import { setupPage } from "../../browser/setupPage";
import { ClassifiedObject } from "./typeMulti";
import { Browser } from "puppeteer";

declare global {
  interface Window {
    _cianConfig: any;
  }
}

export async function scrapeCian(
  browser: Browser,
  url: string
): Promise<ClassifiedObject | null> {
  const page = await browser.newPage();
  await setupPage(page, url);
  const result = [];
  try {
    result.push(
      await page.evaluate(
        () =>
          window._cianConfig["mobile-search-frontend"][101].value.rawOffer.data
            .offer
      )
    );
  } catch (error) {
    result.push(
      await page.evaluate(
        () =>
          window._cianConfig["mobile-search-frontend"][101].value.offers.byId
      )
    );
  }

  await page.close();
  return result.length > 0 ? result[0] : null;
}
