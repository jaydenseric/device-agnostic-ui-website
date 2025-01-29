// @ts-check

/** @import { ElementHandle, Page, ScreenshotOptions } from "@astral/astral" */

import { launch } from "@astral/astral";
import { ensureDir } from "@std/fs/ensure-dir";

/** Screenshot scale. */
const screenshotScale = 4;

/** Path to the directory to save screenshots in. */
const screenshotPath = "public/screenshots";

/** Screenshot target element ID. */
const targetElementId = "daui-screenshot-target";

/**
 * Names of Device Agnostic UI React components to screenshot.
 * @satisfies {Array<string>}
 */
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

// Todo: Replace this helper function with the Astral method
// `ElementHandle.screenshot` once these issues are resolved:
// https://github.com/lino-levan/astral/issues/136
// https://github.com/lino-levan/astral/issues/137
/**
 * Scrolls an Astral page element into view and screenshots it.
 * @see https://github.com/lino-levan/astral/blob/348dda34a0abe8c5719349f3a5a3c4d70bf18a31/src/element_handle.ts#L275-L297
 * @see https://github.com/lino-levan/astral/issues/138
 * @param {Page} page Page the element is in.
 * @param {ElementHandle} element Element to screenshot.
 * @param {Omit<ScreenshotOptions, "clip">
 *   & Pick<NonNullable<ScreenshotOptions["clip"]>, "scale">} options Screenshot
 *   options.
 */
async function elementScreenshot(page, element, options) {
  await element.scrollIntoView();

  const boxModel = await element.boxModel();

  if (!boxModel) {
    throw new Error(
      "No bounding box found when trying to screenshot element.",
    );
  }

  return await page.screenshot({
    ...options,
    clip: {
      x: boxModel.border[0].x,
      y: boxModel.border[0].y,
      width: boxModel.border[2].x - boxModel.border[0].x,
      height: boxModel.border[2].y - boxModel.border[0].y,
      scale: options.scale,
    },
  });
}

try {
  // Ensure the screenshot directory exists.
  await ensureDir(screenshotPath);

  console.info(
    `Screenshotting element with ID \`${targetElementId}\` in ${componentNames.length} pages…`,
  );

  const browser = await launch();

  try {
    const page = await browser.newPage();

    page.addEventListener("console", ({ detail }) => {
      console.group("Astral browser page console event:");
      console.dir(detail);
      console.groupEnd();
    });

    const celestial = page.unsafelyGetCelestialBindings();

    await celestial.Emulation.setDeviceMetricsOverride({
      width: 720,
      height: 720,
      deviceScaleFactor: 1,
      mobile: false,
    });

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

        // Customize the page styles for an optimal screenshot. Disable all
        // animations and transitions for a deterministic screenshot. The
        // screenshot target element width and padding should add up to 320px,
        // the narrowest supported viewport. The padding must be able to contain
        // any box-shadows. Position the target element off the viewport to
        // guarantee no styles from ancestors make their way into the
        // screenshot.
        await page.evaluate(
          /** @param {string} styles Styles to insert in the page. */
          async (styles) => {
            const styleElement = document.createElement("style");

            styleElement.appendChild(document.createTextNode(styles));

            const done = new Promise((resolve, reject) => {
              styleElement.onload = resolve;
              styleElement.onerror = reject;
            });

            document.head.appendChild(styleElement);

            await done;
          },
          {
            args: [
              /* CSS */ `
*,
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
}
`,
            ],
          },
        );

        // Create the light mode screenshot PNG.
        await page.emulateMediaFeatures([{
          name: "prefers-color-scheme",
          value: "light",
        }]);
        await Deno.writeFile(
          `${screenshotPath}/${componentName}-light.png`,
          await elementScreenshot(page, targetElement, {
            format: "png",
            scale: screenshotScale,
          }),
        );

        // Create the dark mode screenshot PNG.
        await page.emulateMediaFeatures([{
          name: "prefers-color-scheme",
          value: "dark",
        }]);
        await Deno.writeFile(
          `${screenshotPath}/${componentName}-dark.png`,
          await elementScreenshot(page, targetElement, {
            format: "png",
            scale: screenshotScale,
          }),
        );
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
