interface GalleryItem {
  value: {
    "140x140": string;
    "278x278": string;
    "339x339": string;
    "372x372": string;
    "507x507": string;
    "558x558": string;
    "678x678": string;
  };
  type: string;
}

interface AnalyticParams {
  view: string;
  type: string;
  screen: string;
  place: string;
  image: string;
}

interface Price {
  sale: null | string;
  current: string;
}

interface BadgeContent {
  id: string;
  title: string;
  style: string;
  color: {
    value: string;
    valueDark?: string;
    valueName: string;
  };
  textColor: {
    value: string;
    valueDark?: string;
    valueName: string;
  };
}

interface ClassifiedItem {
  type: "item";
  value: {
    normalizedPrice: string;
    galleryItems: GalleryItem[];
    hasVideo: boolean;
    analyticParams: AnalyticParams;
    price: Price;
    hasRealtyLayout: boolean;
    title: string;
    layoutDirection: string;
    uri: string;
    size: string;
    freeForm: any[]; // Уточните тип, если возможно
    id: number;
    categoryId: number;
    isFavorite: boolean;
  };
  isConstructor: boolean;
}

const classifiedItem: ClassifiedItem = {
  type: "item",
  value: {
    normalizedPrice: "134 545 ₽ за м²",
    galleryItems: [
      {
        value: {
          "140x140":
            "https://70.img.avito.st/image/1/1.7QNFE7aCQeprstvqEzC6QGyxQ-77uNvqa7JD6PemRej3pEHq99km.1UnEC9t2l4fA8tLwtRkMYvq-8kkQXN_MpZJEFHrvugA",
          "278x278":
            "https://70.img.avito.st/image/1/1.7QNFE7aCQepftO_sEzC6QGyxQ-77uO_sX7RD6PemRej3pEHq99km.Z-NapHhEaduJQSLSPClD_WV3n3r-rLu83faBT2EJxZA",
          "339x339":
            "https://70.img.avito.st/image/1/1.7QNFE7aCQepVteXtEzC6QGyxQ-77uOXtVbVD6PemRej3pEHq99km.OA1ijd0mLoS1y6D0HrjNJ5y3GnIyDTpD6o_SXtPL_cA",
          "372x372":
            "https://70.img.avito.st/image/1/1.7QNFE7aCQeobtavtEzC6QGyxQ-77uKvtG7VD6PemRej3pEHq99km.3qZ3OH7qvb4LFtV4IIyulnuOf689A-SdZgwaksX4u6Y",
          "507x507":
            "https://70.img.avito.st/image/1/1.7QNFE7aCQeoFt7XvEzC6QGyxQ-77uLXvBbdD6PemRej3pEHq99km.w3nObGYsoLpkk0KFznjzvwL_HDdjJg4wQP_uY23itOM",
          "558x558":
            "https://70.img.avito.st/image/1/1.7QNFE7aCQeovuJ_gEzC6QGyxQ-77uJ_gL7hD6PemRej3pEHq99km.2OjCSXu3f8P0B7S37aS1uamwuf18TF5PdI4iSAGttf8",
          "678x678":
            "https://70.img.avito.st/image/1/1.7QNFE7aCQeo_uo_iEzC6QGyxQ-77uI_iP7pD6PemRej3pEHq99km.ogBhY05q1AbatTSTRWuB9dlDd6KKerXnbUmUNGZzO0M",
        },
        type: "image",
      },
    ],
    hasVideo: false,
    analyticParams: {
      view: "list",
      type: "item",
      screen: "serp",
      place: "serp-items",
      image: "item_ratio_one_x_one_real_estate",
    },
    price: { sale: null, current: "4 440 000 ₽" },
    hasRealtyLayout: false,
    title: "1-к. квартира, 33 м², 9/14 эт.",
    layoutDirection: "horizontal",
    uri: "/rostov-na-donu/kvartiry/1-k._kvartira_33_m_914_et._2211355091?context=H4sIAAAAAAAA_0q0MrKqLraysFJKK8rPDUhMT1WyLrYysVLKTczMAzENrZQqQLSxoZWSoUWehUFaTq55eWFFblZ-SmZlXo6xZVpBioFZSnJhgZJ1LSAAAP__PaDcIU8AAAA",
    size: "small",
    freeForm: [], // Уточните тип, если возможно
    id: 2211355091,
    categoryId: 24,
    isFavorite: false,
  },
  isConstructor: true,
};
