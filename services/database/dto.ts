export interface ClassifiedObjectDto {
  id?: number;
  cianId?: number;
  category?: string;
  dealType?: string;
  description?: string;
  fromImport?: boolean;
  gaLabel?: string;
  isFavorite?: boolean;
  isPromoted?: boolean;
  isColorized?: boolean;
  offerType?: string;
  priceValue?: number;
  priceCurrency?: string;
  showContactWarningMessage?: boolean;
  verifiedByCian?: boolean;
  houseName?: string;
  deadline?: string;
  siteBlockId?: number;
  regionId?: number;
  address?: string;
  name?: string;
  promoType?: string;
  roomsCount?: string;
  status?: string;
  addedAt?: string;
  updatedAt?: string;
  views?: number;
  saleType?: string;
  saleTypeDescription?: string;
  housingType?: string;
  area?: string;
  livingArea?: string;
  kitchenArea?: string;
  roomsArea?: string;
  ceilingHeight?: string;
  restroom?: string;
  price?: string;
  seoTitle?: string;
  callButtonLabel?: string;
  additionalPrice?: string;
  additionalPriceValue?: number;
  offerInDeal?: boolean;
  isDealRentOffline?: boolean;
  isCommercialOwnershipVerified?: boolean;
  isUniqueCheckDate?: string;
  offersHistoryExists?: boolean;
  isApartments?: boolean;
}

export interface SignalDto {
  dateTime?: Date;
  ClassifiedObjectId?: number;
}

export interface ClusterDto {
  year?: number;
  city?: string;
  area?: string;
  microarea?: string;
}
