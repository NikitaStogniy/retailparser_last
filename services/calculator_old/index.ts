import express, { Request, Response } from "express";
import { calculatePrice } from "./calculations";

const app = express();
app.use(express.json());

// app.post("/upload", async (req, res) => {
//   try {
//     const newFlat = await Property.create({ ...req.body });
//     res.json(newFlat);
//   } catch (error) {
//     console.error("Ошибка при добавлении объекта:", error);
//     res.status(500).json(error.message);
//   }
// });

app.get("/envs", async (req: Request, res: Response) => {
  try {
    const envs = {
      first_multiply: process.env.FIRST_MULTIPLY,
      second_multiply: process.env.SECOND_MULTIPLY,
      difference: process.env.DIFFERENCE,
      repair_price: process.env.REPAIR_PRICE,
    };
    res.json(envs);
  } catch (error: any) {
    console.error("Ошибка при получении переменных окружения:", error);
    res.status(500).json(error.message);
  }
});

app.post("/updateenvs", async (req: Request, res: Response) => {
  try {
    const { first_multiply, second_multiply, difference, repair_price } =
      req.body;
    process.env.FIRST_MULTIPLY = first_multiply;
    process.env.SECOND_MULTIPLY = second_multiply;
    process.env.DIFFERENCE = difference;
    process.env.REPAIR_PRICE = repair_price;
    res.json({ message: "Переменные окружения обновлены." });
  } catch (error: any) {
    console.error("Ошибка при обновлении переменных окружения:", error);
    res.status(500).json(error.message);
  }
});

app.post("/calc", async (req: Request, res: Response) => {
  try {
    const clusterPrice = 300000;
    const property_m2 = 274082;
    const property_area = 46.3;
    const first_mult = parseFloat(process.env.FIRST_MULTIPLY || "0.95");
    const second_mult = parseFloat(process.env.SECOND_MULTIPLY || "0.88");
    const difference = parseFloat(process.env.DIFFERENCE || "15");
    const repair_price = parseFloat(process.env.REPAIR_PRICE || "45000");

    const property: PropertyType = req.body;

    res.json(
      calculatePrice(
        property_m2,
        property_area,
        first_mult,
        second_mult,
        repair_price,
        clusterPrice,
        difference
      )
    );
  } catch (error: any) {
    console.error("Ошибка при расчете цены:", error);
    res.status(500).json(error.message);
  }
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`Сервер запущен на порту ${process.env.PORT || 3003}`);
});

export interface PropertyType {
  subway_feet_time: number;
  subway_feet_name: string;
  subway_car_time: number;
  subway_car_name: string;
  name: string;
  total_price: number;
  m2_price: number;
  address: string;
  lat: number;
  lng: number;
  district: string;
  city: string;
  region: string;
  country: string;
  description: string;
  images: string[];
  rooms: number;
  floor: number;
  floors: number;
  area: number;
  living_area: number;
  kitchen_area: number;
  balcony: number;
  loggia: number;
  bathroom: number;
  toilet: number;
  ceiling_height: number;
  renovation: number;
  year: number;
  type: string;
  building_type: string;
  heating: string;
  water: string;
  gas: string;
  electricity: string;
  elevators_count: number;
  sewerage: string;
  security: string;
  parking: string;
  infrastructure: string;
  transport: string;
  view: string;
  furniture: string;
  appliances: string;
  internet: string;
  phone: string;
  tv: string;
  price: number;
  currency: string;
  link: string;
  id: number;
  attribute?: string;
  building_series: string;
  overlap_type: string;
  enterance_count: number;
  emergency: boolean;
  klassified_price: number;
  service_name: string;
}
