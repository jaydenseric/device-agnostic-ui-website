// @ts-check

import puppeteer from "puppeteer";
import { ensureDir } from "@std/fs/ensure-dir";

const screenshotPath = "public/screenshots";
const targetElementId = "daui-screenshot-target";
const componentNames = [
  "Blockquote",
  "Button",
  "ButtonSubmit",
  "Code",
  "Fieldset",
  "Heading",
  "Html",
  "Icon",
  "IconTick",
  "LinkCard",
  "LinkNav",
  "LinkText",
  "ListOrdered",
  "ListUnordered",
  "Loading",
  "Margin",
  "Nav",
  "Para",
  "Picture",
  "Pre",
  "Scroll",
  "Select",
  "Select",
  "Table",
  "Textbox",
  "Toggle",
  "WordBreaks",
];

try {
  // Ensure the screenshot directory exists.
  await ensureDir(screenshotPath);

  console.info(
    `Screenshotting element with ID \`${targetElementId}\` in ${componentNames.length} pages…`,
  );

  const browser = await puppeteer.launch(
    {
      // Todo: Enable headless mode after resolving why it causes `page.goto` to
      // timeout after the first couple of uses.
      headless: false,
      defaultViewport: {
        width: 720,
        height: 720,
        deviceScaleFactor: 4,
      },
    },
  );

  try {
    const [page] = await browser.pages();

    for (const componentName of componentNames) {
      const pageUrl = `http://localhost:${
        Deno.env.get("RUCK_PORT")
      }/components/${componentName}`;

      try {
        console.info(`Screenshotting ${pageUrl}`);

        await page.goto(pageUrl);

        const targetElement = await page.$(`#${targetElementId}`);

        if (!targetElement) {
          throw new Error(
            `Element ID \`${targetElementId}\` missing at ${pageUrl}.`,
          );
        }

        await page.addStyleTag({
          // Width and padding should add up to 320px, the narrowest supported
          // viewport. The padding must be able to contain any box-shadows.
          // Positioning the target element off the viewport guarantees no
          // styles from ancestors make their way into the screenshot.
          content: `*,
*::after,
*::before {
  transition: none !important;
  animation: none !important;
}

#${targetElementId} {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: hsl(
    var(--daui-background-hue),
    var(--daui-background-saturation),
    var(--daui-background-lightness)
  );
  overflow: hidden;
}`,
        });

        const pngPathLight = `${screenshotPath}/${componentName}-light.png`;
        const pngPathDark = `${screenshotPath}/${componentName}-dark.png`;

        // Create the light mode screenshot PNG.
        await page.emulateMediaFeatures([{
          name: "prefers-color-scheme",
          value: "light",
        }]);
        await targetElement.screenshot({ path: pngPathLight });

        // Create the dark mode screenshot PNG.
        await page.emulateMediaFeatures([{
          name: "prefers-color-scheme",
          value: "dark",
        }]);
        await targetElement.screenshot({ path: pngPathDark });

        // Allow time for the Ruck server to restart due to the Deno watcher
        // detecting the saved screenshot files.
        // Todo: Figure out how to prevent image file changes from triggering
        // the Deno watcher.
        await page.waitForTimeout(1500);
      } catch (cause) {
        console.error(
          new Error(`Screenshot failed for ${pageUrl}.`, { cause }),
        );
      }
    }
  } finally {
    await browser.close();
  }
} catch (cause) {
  console.error(new Error("Screenshots failed.", { cause }));
}
