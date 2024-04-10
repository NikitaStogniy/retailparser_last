// импортируем класс Gateway из раннее установленного пакета micromq
import "dotenv/config";

import Gateway from "micromq/gateway";

// создаем экземпляр класса Gateway
const app = new Gateway({
  // названия микросервисов, к которым мы будем обращаться
  microservices: ["database", "parser", "calculator"],
  // настройки rabbitmq
  rabbit: {
    // ссылка для подключения к rabbitmq (default: amqp://guest:guest@localhost:5672)
    url: process.env.RABBIT_URL,
  },
});

//DATABASE

app.post(["/bulk", "/addproperty", "/status"], async (req, res) => {
  // делегируем запрос в микросервис users
  await res.delegate("database");
});

app.get("/dbstatus", async (req, res) => {
  // делегируем запрос в микросервис users
  await res.delegate("database");
});

app.get("/pstatus", async (req, res) => {
  // делегируем запрос в микросервис users
  await res.delegate("parser");
});

app.patch(["/signal/:id", "/cluster/:id", "/status"], async (req, res) => {
  // делегируем запрос в микросервис users
  await res.delegate("database");
});

app.put(["/signal/:id", "/cluster/:id", "/status"], async (req, res) => {
  // делегируем запрос в микросервис users
  await res.delegate("database");
});

app.get("/task/:taskId", async (req, res) => {
  await res.delegate("parser");
});

//PARSER
app.post("/parse", async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  // Отправка задачи в микросервис обработки

  await res.delegate("parser", {
    path: "/parse",
    method: "post",
    body: { url },
  });
});

// начинаем слушать порт
console.log(`Started on port ${process.env.PORT}`);
app.listen(process.env.PORT);
