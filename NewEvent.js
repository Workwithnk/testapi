const puppeteer = require("puppeteer");
const chromium = require("chrome-aws-lambda");

async function checkRunner(viewPortWidth, viewPortHeight) {
  
  const browser = await puppeteer.launch({
    headless: true,
      visible: false,
      defaultViewport: { width: viewPortWidth, height: viewPortHeight },
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });
  
  return browser;
  
}

module.exports = checkRunner;

// if (!chromePath) {
//   browser = await puppeteer.launch({
//     headless: true,
//     visible: false,
//     defaultViewport: {
//       width: viePortData.width,
//       height: viePortData.height,
//     },
//     args: ["--no-sandbox"],
//     ignoreDefaultArgs: ["--disable-extensions"],
//   });
// }

// if (chromePath) {
//   browser = await chromium.puppeteer.launch({
//     args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
//     defaultViewport: chromium.defaultViewport,
//     executablePath: await chromium.executablePath,
//     headless: true,
//     ignoreHTTPSErrors: true,
//   });
// }

// browser = await puppeteer.launch({
//   headless: true,
//   visible: false,
//   defaultViewport: { width: viePortData.width, height: viePortData.height },
//   args: ["--no-sandbox"],
//   ignoreDefaultArgs: ["--disable-extensions"],
//   executablePath: puppeteer.executablePath(),
// });
