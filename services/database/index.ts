import { Optional } from "sequelize";
import { ClassifiedObjectModel, Cluster, Signal } from "./Model";
import { ClusterDto, ClassifiedObjectDto, SignalDto } from "./dto";

const { Sequelize } = require("sequelize");

const express = require("express");

export let sequelize: typeof Sequelize | null = null;

const app = express();
sequelize = new Sequelize(process.env.POSTGRESS_STRING);

app.use(express.json());

app.post("/addproperty", async (req, res) => {
  try {
    const propertyData: ClassifiedObjectDto = req.body;
    const newProperty = await ClassifiedObjectModel.create({
      ...propertyData,
    });
    res.json(newProperty);
  } catch (error) {
    console.error("Ошибка при добавлении объекта:", error);
    res.status(500).json(error.message);
  }
});

app.post("/bulk", async (req, res) => {
  try {
    const propertyData: ClassifiedObjectDto[] = req.body;
    const propertyOptions: Optional<any, string>[] = propertyData.map(
      (property) => ({ ...property })
    );
    const newProperty = await ClassifiedObjectModel.bulkCreate(propertyOptions);
    res.json(newProperty);
  } catch (error) {
    console.error("Ошибка при добавлении объекта:", error);
    res.status(500).json(error.message);
  }
});

app.patch("/cluster/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const clusterData: ClusterDto = req.body;
    const cluster = await Cluster.findByPk(id);
    if (!cluster) {
      return res.status(404).json("Кластер не найден.");
    }
    const updatedCluster = await cluster.update(clusterData);
    res.json({ message: "Кластер обновлен.", updatedCluster });
  } catch (error) {
    console.error("Ошибка при обновлении кластера:", error);
    res.status(500).json(error.message);
  }
});
app.patch("/signal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const signalData: SignalDto = req.body;
    const signal = await Signal.findByPk(id);
    if (!signal) {
      return res.status(404).json("Сигнал не найден.");
    }
    const updatedSignal = await signal.update(signalData);
    res.json({ message: "Сигнал обновлен.", updatedSignal });
  } catch (error) {
    console.error("Ошибка при обновлении сигнала:", error);
    res.status(500).json(error.message);
  }
});

app.put("/cluster/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const clusterData: ClusterDto = req.body;
    const cluster = await Cluster.findByPk(id);
    if (!cluster) {
      return res.status(404).json("Кластер не найден.");
    }
    const updatedCluster = await cluster.update(clusterData);
    res.json(updatedCluster);
  } catch (error) {
    console.error("Ошибка при полном обновлении кластера:", error);
    res.status(500).json(error.message);
  }
});

app.put("/signal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const signal = await Signal.findByPk(id);
    if (!signal) {
      return res.status(404).json("Сигнал не найден.");
    }
    const updatedSignal = await signal.update({ ...req.body });
    res.json(updatedSignal);
  } catch (error) {
    console.error("Ошибка при полном обновлении сигнала:", error);
    res.status(500).json(error.message);
  }
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3002, () => {
    console.log(`Сервер запущен на порту ${process.env.PORT || 3002}`);
  });
});
