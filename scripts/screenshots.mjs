import { exec } from 'child_process';
import fs from 'fs';
import { basename } from 'path';
import { promisify } from 'util';
// eslint-disable-next-line node/no-unpublished-import
import imagemin from 'imagemin';
// eslint-disable-next-line node/no-unpublished-import
import imageminPngquant from 'imagemin-pngquant';
// eslint-disable-next-line node/no-unpublished-import
import imageminWebp from 'imagemin-webp';
// eslint-disable-next-line node/no-unpublished-import
import imageminZopfli from 'imagemin-zopfli';
// eslint-disable-next-line node/no-unpublished-import
import puppeteer from 'puppeteer';

const execPromise = promisify(exec);

/**
 * Recursively deletes a directory, if it exists.
 * @param {string} path Directory path.
 */
async function deleteDirectory(path) {
  try {
    await execPromise(`rm -rf ${path}`);
  } catch (error) {
    console.error(`Failed to delete directory “${path}”:`, error);
  }
}

/**
 * Optimizes a PNG, creating an adjacent optimized WebM file.
 * @param {string} pngPath PNG path.
 * @param {string} destinationPath Destination directory path for the optimized images.
 */
async function optimizePngToPngAndWebm(pngPath, destinationPath) {
  try {
    // Optimize the screenshot PNG.
    await imagemin([pngPath], {
      destination: destinationPath,
      plugins: [
        imageminPngquant({ quality: [0.85, 0.85], speed: 1, strip: true }),
        imageminZopfli({ more: true }),
      ],
    });

    // Create the screenshot WebP from the PNG.
    await imagemin([pngPath], {
      destination: destinationPath,
      plugins: [imageminWebp({ nearLossless: 85 })],
    });
  } catch (error) {
    console.error(`Failed to optimize PNG “${pngPath}”:`, error);
  }
}

/**
 * Screenshots an element on a page.
 * @param {object} browser Puppeteer browser instance.
 * @param {string} pageUrl Page URL.
 * @param {string} elementId Element ID to screenshot.
 * @param {string} screenshotPath Screenshot directory path.
 * @param {string} screenshotFilenamePrefix Screenshot filename prefix.
 */
async function screenshotPageElement(
  browser,
  pageUrl,
  elementId,
  screenshotPath,
  screenshotFilenamePrefix
) {
  console.info(`Screenshotting ${pageUrl}`);

  const pngPathLight = `${screenshotPath}/${screenshotFilenamePrefix}-light.png`;
  const pngPathDark = `${screenshotPath}/${screenshotFilenamePrefix}-dark.png`;
  const page = await browser.newPage();

  try {
    await page.setViewport({ width: 720, height: 720, deviceScaleFactor: 4 });
    await page.goto(pageUrl);

    const targetElement = await page.$(`#${elementId}`);
    if (!targetElement)
      throw new Error(`Element ID “${elementId}” missing at URL ${pageUrl}.`);

    await page.evaluateHandle((elementId) => {
      // Width and padding should add up to 320px, the narrowest supported
      // viewport. The padding must be able to contain any box-shadows.
      // Positioning the target element off the viewport guarantees no styles
      // from ancestors make their way into the screenshot.

      // eslint-disable-next-line no-undef
      const sheet = document.createElement('style');

      sheet.innerHTML = `
        #${elementId} {
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
      `;

      // eslint-disable-next-line no-undef
      document.body.appendChild(sheet);
    }, elementId);

    // Create the light mode screenshot PNG.

    await page.emulateMediaFeatures([
      {
        name: 'prefers-color-scheme',
        value: 'light',
      },
    ]);
    await targetElement.screenshot({ path: pngPathLight });

    // Create the dark mode screenshot PNG.

    await page.emulateMediaFeatures([
      {
        name: 'prefers-color-scheme',
        value: 'dark',
      },
    ]);

    // Wait for any CSS transitions going from light to dark mode to finish.
    await page.waitFor(300);

    await targetElement.screenshot({ path: pngPathDark });
  } finally {
    await page.close();
  }

  // Convert the PNG images to optimized PNG and WebM images.
  await Promise.all([
    optimizePngToPngAndWebm(pngPathLight, screenshotPath),
    optimizePngToPngAndWebm(pngPathDark, screenshotPath),
  ]);
}

/**
 * Gets the names of all documented components.
 * @param {string} componentPath Component directory path.
 * @returns {Promise<Array<string>>} Resolves component names.
 */
async function getComponentNames(componentPath) {
  try {
    return (await fs.promises.readdir(componentPath))
      .map((filename) => basename(filename, '.js'))
      .filter((name) => name !== 'index');
  } catch (error) {
    console.error(`Failed to get component names:`, error);
  }
}

/**
 * Updates component screenshots.
 * @param {string} componentPath Component directory path.
 * @param {string} elementId Element ID to screenshot.
 * @param {string} screenshotPath Screenshot directory path.
 * @param {Array<string>} [componentNames] Names of components to screenshot.
 */
async function updateScreenshots(
  componentPath,
  elementId,
  screenshotPath,
  componentNames
) {
  try {
    // If updating all component screenshots, clean the screenshot directory.
    if (!componentNames) await deleteDirectory(screenshotPath);

    // Ensure the screenshot directory exists.
    await fs.promises.mkdir(screenshotPath, { recursive: true });

    if (!componentNames)
      componentNames = await getComponentNames(componentPath);

    console.info(
      `Screenshotting element with ID “${elementId}” in ${componentNames.length} pages…`
    );

    const browser = await puppeteer.launch();

    try {
      for (let name of componentNames) {
        const pageUrl = `http://localhost:3000/components/${name}`;

        try {
          await screenshotPageElement(
            browser,
            pageUrl,
            elementId,
            screenshotPath,
            name
          );
        } catch (error) {
          console.error(`Screenshot failed for URL ${pageUrl}:`, error);
        }
      }
    } finally {
      await browser.close();
    }
  } catch (error) {
    console.error('Update screenshots failed:', error);
  }
}

const componentNames = process.argv.slice(2).reduce((accumulator, arg) => {
  const [key, value] = arg.split('=');
  if (key === 'component') accumulator.push(value);
  return accumulator;
}, []);

updateScreenshots(
  'pages/components',
  'daui-screenshot-target',
  'public/static/screenshots',
  componentNames.length ? componentNames : undefined
);
