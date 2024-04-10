import { closeBrowser, startBrowser } from "./browser/browser";
import MicroMQ from "micromq";
import { scrapeWebsite } from "./scrape";
import { client, getTaskStatus, updateTaskStatus } from "./redis";
import { v4 as uuidv4 } from "uuid";

const app = new MicroMQ({
  name: "parser",
  rabbit: {
    url: process.env.RABBIT_URL,
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

app.post("/parse", async (req, res) => {
  const { url } = req.body;
  const taskId = uuidv4();
  await res.json({ taskId });
  const browser = await startBrowser();
  try {
    const result = await scrapeWebsite(browser, url);
    updateTaskStatus(taskId, "completed", result);
  } catch (error) {
    console.log(error);
    updateTaskStatus(taskId, "failed", []);
  } finally {
    await closeBrowser(browser);
  }
});

app.get("/task/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const taskStatus = await getTaskStatus(taskId);

  if (!taskStatus) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(taskStatus);
});

app.get("/status", (req, res) => {
  res.json({
    text: "Fine",
  });
});

app.start();
