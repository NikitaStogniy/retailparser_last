export interface WorkTimeInfo {
  callFrom: string;
  callTo: string;
}

export interface AgentAvailability {
  available: boolean;
  userId: number;
}

export interface Author {
  agentLists: any[];
  avatar: string;
  cianId: number;
  fromDeveloper: string;
  isChatsEnabled: boolean;
  isFromBuilder: boolean;
  isFromLeadFactory: boolean;
  name: string;
  realtyUserId: number;
  workTimeInfo: WorkTimeInfo;
  agentAvailability: AgentAvailability;
}

export interface Media {
  url: string;
  previewUrl: string;
  type: string;
}

export interface Price {
  value: number;
  currency: string;
}

export interface Puids {
  [key: string]: string | number | boolean;
}

export interface ModerationInfo {
  showContactWarningMessage: boolean;
}

export interface PhotoLabel {
  color: string;
  name: string;
}

export interface Building {
  verifiedByCian: boolean;
  houseName: string;
  deadline: string;
  deadlineShort: string;
}

export interface Calltracking {
  siteBlockId: number;
}

export interface Underground {
  id: number;
  lineColor: string;
  name: string;
  transportType: string;
  time: string;
  underConstruction: boolean;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Title {
  link: string;
  name: string;
}

export interface Geo {
  regionId: number;
  undergrounds: Underground[];
  highways: any[];
  coordinates: Coordinates;
  title: Title;
  timezone: number;
  address: string;
}

export interface Promo {
  name: string;
  promoType: string;
}

export interface ClassifiedObject {
  author: Author;
  cianId: number;
  category: string;
  dealType: string;
  description: string;
  fromImport: boolean;
  gaLabel: string;
  icons: any[];
  id: number;
  isFavorite: boolean;
  isPromoted: boolean;
  isColorized: boolean;
  media: Media[];
  offerType: string;
  phones: string[];
  price: Price;
  puids: Puids;
  moderationInfo: ModerationInfo;
  isCalltrackingEnabled: boolean;
  isExternalTourAvailable: boolean;
  callButtonTitle: string;
  photoLabels: PhotoLabel[];
  building: Building;
  calltracking: Calltracking;
  discount: null;
  features: string[];
  geo: Geo;
  href: string;
  modelVersion: null;
  pessimization: null;
  promo: Promo;
  promoSuburban: null;
  vasTitle: string;
  village: null;
  identicalOffers: null;
  groupedOffers: null;
  newbuildingId: number;
  showWarningMessage: boolean;
  hasTour: boolean;
  photoFeatureIcons: any[];
  profitbaseBooking: null;
  isCianPartner: boolean;
  canBeBooked: boolean;
  isBookedFromDeveloper: boolean;
  villageAdvantages: null;
  // Добавленные необязательные типы
  roomsCount?: string;
  status?: string;
  meta?: {
    addedAt?: string;
    updatedAt?: string;
    views?: number;
  };
  mainFeatures?: {
    type?: string;
    label?: string;
    value?: string;
  }[];
  offerInfo?: {
    saleType?: string;
    saleTypeDescription?: string;
  };
  general?: {
    housingType?: string;
    area?: string;
    livingArea?: string;
    kitchenArea?: string;
    roomsArea?: string;
    ceilingHeight?: string;
    restroom?: string;
  };
  generalV2?: {
    title?: string;
    value?: string;
  }[];
  amenities?: any[];
  dealConditions?: {
    price?: string;
    saleType?: string;
  };
  categoriesIds?: number[];
  seoTitle?: string;
  tags?: {
    type?: string;
    color?: string;
    name?: string;
  }[];
  callButtonLabel?: string;
  houseInfo?: {
    info?: {
      gkName?: string;
      houseType?: string;
    };
    verifiedByCian?: boolean;
    demolitionInvolved?: boolean;
  };
  additionalPrice?: string;
  additionalPriceValue?: number;
  offerInDeal?: boolean;
  isDealRentOffline?: boolean;
  isCommercialOwnershipVerified?: boolean;
  mainFeaturesV2?: {
    value?: string;
    label?: string;
  }[];
  offerInfoV2?: {
    id?: string;
    title?: string;
    features?: {
      type?: string;
      label?: string;
      value?: string;
    }[];
  };
  isUniqueCheckDate?: string;
  offersHistoryExists?: boolean;
  isApartments?: boolean;
}
