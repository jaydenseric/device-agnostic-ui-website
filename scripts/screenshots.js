const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')
const util = require('util')
// eslint-disable-next-line node/no-unpublished-require
const imagemin = require('imagemin')
// eslint-disable-next-line node/no-unpublished-require
const imageminPngquant = require('imagemin-pngquant')
// eslint-disable-next-line node/no-unpublished-require
const imageminWebp = require('imagemin-webp')
// eslint-disable-next-line node/no-unpublished-require
const imageminZopfli = require('imagemin-zopfli')
// eslint-disable-next-line node/no-unpublished-require
const puppeteer = require('puppeteer')

const exec = util.promisify(childProcess.exec)
const readdir = util.promisify(fs.readdir)
const mkdir = util.promisify(fs.mkdir)

/**
 * Recursively deletes a directory, if it exists.
 * @param {string} path Directory path.
 */
async function deleteDirectory(path) {
  try {
    await exec(`rm -rf ${path}`)
  } catch (error) {
    console.error(`Failed to delete directory “${path}”:`, error)
  }
}

/**
 * Screenshots an element on a page.
 * @param {object} browser Puppeteer browser instance.
 * @param {string} pageUrl Page URL.
 * @param {string} elementId Element ID to screenshot.
 * @param {string} screenshotPath Screenshot directory path.
 * @param {string} screenshotFilename Screenshot filename, without an extension.
 */
async function screenshotPageElement(
  browser,
  pageUrl,
  elementId,
  screenshotPath,
  screenshotFilename
) {
  console.info(`Screenshotting ${pageUrl}`)

  const pngPath = `${screenshotPath}/${screenshotFilename}.png`
  const page = await browser.newPage()

  try {
    await page.goto(pageUrl)
    await page.setViewport({ width: 720, height: 720, deviceScaleFactor: 4 })

    const targetElement = await page.$(`#${elementId}`)
    if (!targetElement)
      throw new Error(`Element ID “${elementId}” missing at URL ${pageUrl}.`)

    await page.evaluateHandle(elementId => {
      // Width and padding should add up to 320px, the narrowest supported
      // viewport. The padding must be able to contain any box-shadows.
      // Positioning the target element off the viewport guarantees no styles
      // from ancestors make their way into the screenshot.

      // eslint-disable-next-line no-undef
      const sheet = document.createElement('style')

      sheet.innerHTML = `
        #${elementId} {
          position: fixed;
          left: 100vh;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 300px;
          height: 100px;
          padding: 20px;
          overflow: hidden;
        }
      `

      // eslint-disable-next-line no-undef
      document.body.appendChild(sheet)
    }, elementId)

    // Create the screenshot PNG.
    await targetElement.screenshot({ path: pngPath })
  } finally {
    await page.close()
  }

  // Optimize the screenshot PNG.
  await imagemin([pngPath], {
    destination: screenshotPath,
    plugins: [
      imageminPngquant({ quality: [0.85, 0.85], speed: 1, strip: true }),
      imageminZopfli({ more: true })
    ]
  })

  // Create the screenshot WebP from the PNG.
  await imagemin([pngPath], {
    destination: screenshotPath,
    plugins: [imageminWebp({ nearLossless: 85 })]
  })
}

/**
 * Gets the names of all documented components.
 * @param {string} componentPath Component directory path.
 * @returns {Promise<Array<string>>} Resolves component names.
 */
async function getComponentNames(componentPath) {
  try {
    return (await readdir(componentPath))
      .map(filename => path.basename(filename, '.js'))
      .filter(name => name !== 'index')
  } catch (error) {
    console.error(`Failed to get component names:`, error)
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
    if (!componentNames) await deleteDirectory(screenshotPath)

    // Ensure the screenshot directory exists.
    await mkdir(screenshotPath, { recursive: true })

    if (!componentNames) componentNames = await getComponentNames(componentPath)

    console.info(
      `Screenshotting element with ID “${elementId}” in ${componentNames.length} pages…`
    )

    const browser = await puppeteer.launch({ args: ['--force-dark-mode'] })

    try {
      for (let name of componentNames) {
        const pageUrl = `http://localhost:3000/components/${name}`

        try {
          await screenshotPageElement(
            browser,
            pageUrl,
            elementId,
            screenshotPath,
            name
          )
        } catch (error) {
          console.error(`Screenshot failed for URL ${pageUrl}:`, error)
        }
      }
    } finally {
      await browser.close()
    }
  } catch (error) {
    console.error('Update screenshots failed:', error)
  }
}

const componentNames = process.argv.slice(2).reduce((accumulator, arg) => {
  const [key, value] = arg.split('=')
  if (key === 'component') accumulator.push(value)
  return accumulator
}, [])

updateScreenshots(
  'pages/components',
  'daui-screenshot-target',
  'public/static/screenshots',
  componentNames.length ? componentNames : undefined
)
