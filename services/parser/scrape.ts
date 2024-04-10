import { scrapeCian } from "./classified/cian/scraper";
import { ClassifiedObject } from "./classified/cian/typeMulti";
import { getClassified, CLASSIFIED } from "./utils/getClassified";
import { Browser } from "puppeteer";

export async function scrapeWebsite(browser: Browser, url: string) {
  const classified = getClassified(url);
  let result: ClassifiedObject | null = null;
  switch (classified) {
    case CLASSIFIED.CIAN:
      result = await scrapeCian(browser, url);
      break;
    case CLASSIFIED.AVITO:
      result = null;
      break;
    case CLASSIFIED.YANDEX:
      result = null;
      break;
    default:
      result = null;
  }
  return result;
}
