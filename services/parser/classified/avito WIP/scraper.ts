//NOT DONE YET

// import { setupPage } from "../../browser/setupPage";
// import { Browser } from "puppeteer";

// declare global {
//   interface Window {
//     _cianConfig: any; // Или используйте более конкретный тип вместо any, если он известен
//   }
// }

// export async function scrapeAvito(
//   browser: Browser,
//   url: string
// ): Promise<ClassifiedObject | null> {
//   const page = await browser.newPage();
//   await setupPage(page, url);
//   const result = [];

//   try {
//     const scriptContent = await page.evaluate(() => {
//       const scriptElement = document.querySelector(
//         'script[type="mime/invalid"][id="initialData"]'
//       );
//       if (scriptElement) {
//         return JSON.parse(scriptElement.innerHTML);
//       }
//       return null;
//     });
//     if (scriptContent) {
//       result.push(scriptContent.search.allItems);
//     } else {
//       console.log("Не удалось извлечь содержимое скрипта");
//     }
//   } catch (error) {
//     console.error("Ошибка при извлечении данных скрипта:", error);
//   }
//   console.log(result);
//   await page.close();
//   return result.length > 0 ? result[0] : null;
// }
