import { Page, KnownDevices } from "puppeteer";
const iPhone = KnownDevices["iPhone 6"];

export const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";

export async function setupPage(page: Page, url: string) {
  await page.emulate(iPhone);
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.setUserAgent(USER_AGENT);
  page.setDefaultNavigationTimeout(0);
}
