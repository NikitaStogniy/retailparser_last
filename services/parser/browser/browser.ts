import puppeteer, { Browser } from "puppeteer";

export async function startBrowser() {
  let browser: Browser;
  try {
    console.log("Opening the browser......");
    browser = await puppeteer.launch({
      headless: false,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--single-process",
      ],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }
  return browser;
}

export async function closeBrowser(browser: Browser) {
  try {
    console.log("Closing the browser......");
    await browser.close();
  } catch (err) {
    console.log("Could not close the browser instance => : ", err);
  }
}
