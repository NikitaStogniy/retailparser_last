export const getClassified = (url: string) => {
  if (url.includes("cian")) {
    return CLASSIFIED.CIAN;
  }
  if (url.includes("avito")) {
    return CLASSIFIED.AVITO;
  }
  if (url.includes("yandex")) {
    return CLASSIFIED.YANDEX;
  }
  return null;
};

export enum CLASSIFIED {
  CIAN = "cian",
  AVITO = "avito",
  YANDEX = "yandex",
}
