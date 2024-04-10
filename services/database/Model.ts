import { Model, DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.POSTGRES_DB!,
  process.env.POSTGRES_USER!,
  process.env.POSTGRES_PASSWORD!,
  {
    host: process.env.POSTGRES_HOST!,
    dialect: "postgres", // или другой диалект, который вы используете
  }
);

export class ClassifiedObjectModel extends Model {
  public id!: number;
  public cianId!: number;
  public category!: string;
  public dealType!: string;
  public description!: string;
  public fromImport!: boolean;
  public gaLabel!: string;
  public isFavorite!: boolean;
  public isPromoted!: boolean;
  public isColorized!: boolean;
  public offerType!: string;
  public priceValue!: number;
  public priceCurrency!: string;
  public showContactWarningMessage!: boolean;
  public verifiedByCian!: boolean;
  public houseName!: string;
  public deadline!: string;
  public siteBlockId!: number;
  public regionId!: number;
  public address!: string;
  public name!: string;
  public promoType!: string;
  public roomsCount?: string;
  public status?: string;
  public addedAt?: string;
  public updatedAt?: string;
  public views?: number;
  public saleType?: string;
  public saleTypeDescription?: string;
  public housingType?: string;
  public area?: string;
  public livingArea?: string;
  public kitchenArea?: string;
  public roomsArea?: string;
  public ceilingHeight?: string;
  public restroom?: string;
  public price?: string;
  public seoTitle?: string;
  public callButtonLabel?: string;
  public additionalPrice?: string;
  public additionalPriceValue?: number;
  public offerInDeal?: boolean;
  public isDealRentOffline?: boolean;
  public isCommercialOwnershipVerified?: boolean;
  public isUniqueCheckDate?: string;
  public offersHistoryExists?: boolean;
  public isApartments?: boolean;
}

ClassifiedObjectModel.init(
  {
    // Определения атрибутов
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cianId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    dealType: DataTypes.STRING,
    description: DataTypes.TEXT,
    fromImport: DataTypes.BOOLEAN,
    gaLabel: DataTypes.STRING,
    isFavorite: DataTypes.BOOLEAN,
    isPromoted: DataTypes.BOOLEAN,
    isColorized: DataTypes.BOOLEAN,
    offerType: DataTypes.STRING,
    priceValue: DataTypes.FLOAT,
    priceCurrency: DataTypes.STRING,
    showContactWarningMessage: DataTypes.BOOLEAN,
    verifiedByCian: DataTypes.BOOLEAN,
    houseName: DataTypes.STRING,
    deadline: DataTypes.STRING,
    siteBlockId: DataTypes.INTEGER,
    regionId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    name: DataTypes.STRING,
    promoType: DataTypes.STRING,
    roomsCount: DataTypes.STRING,
    status: DataTypes.STRING,
    addedAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING,
    views: DataTypes.INTEGER,
    saleType: DataTypes.STRING,
    saleTypeDescription: DataTypes.STRING,
    housingType: DataTypes.STRING,
    area: DataTypes.STRING,
    livingArea: DataTypes.STRING,
    kitchenArea: DataTypes.STRING,
    roomsArea: DataTypes.STRING,
    ceilingHeight: DataTypes.STRING,
    restroom: DataTypes.STRING,
    price: DataTypes.STRING,
    seoTitle: DataTypes.STRING,
    callButtonLabel: DataTypes.STRING,
    additionalPrice: DataTypes.STRING,
    additionalPriceValue: DataTypes.FLOAT,
    offerInDeal: DataTypes.BOOLEAN,
    isDealRentOffline: DataTypes.BOOLEAN,
    isCommercialOwnershipVerified: DataTypes.BOOLEAN,
    isUniqueCheckDate: DataTypes.STRING,
    offersHistoryExists: DataTypes.BOOLEAN,
    isApartments: DataTypes.BOOLEAN,
  },
  {
    sequelize, // Использование экземпляра sequelize
    modelName: "ClassifiedObject",
  }
);

export class Signal extends Model {
  public dateTime!: Date;
  public ClassifiedObject!: ClassifiedObjectModel;
}
Signal.init(
  {
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ClassifiedObjectId: {
      type: DataTypes.INTEGER,
      references: {
        model: ClassifiedObjectModel,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Signal",
  }
);

export class Cluster extends Model {
  public year!: number;
  public city!: string;
  public area!: string;
  public microarea!: string;
  public ClassifiedObjectModels!: ClassifiedObjectModel[];
}
Cluster.init(
  {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    microarea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Cluster",
  }
);
Cluster.hasMany(ClassifiedObjectModel, { as: "ClassifiedObjectModels" });
ClassifiedObjectModel.belongsTo(Cluster, {
  foreignKey: "clusterId",
  as: "cluster",
});
