import { createClient } from "redis";

export const client = createClient({
  url: "redis://localhost:6379", // Укажите URL вашего сервера Redis
});

export async function updateTaskStatus(
  taskId: string,
  status: string,
  result: any = null
) {
  await client.connect();
  try {
    await client.hSet(taskId, "status", status);
    if (result !== null) {
      const resultString = JSON.stringify(result);
      await client.hSet(taskId, "result", resultString);
      await client.set(`task:${taskId}`, resultString);
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Ошибка типа при обновлении статуса задачи:", error);
    } else {
      console.error("Ошибка при обновлении статуса задачи:", error);
    }
  } finally {
    await client.disconnect();
  }
}
export async function getTaskStatus(taskId: string) {
  await client.connect();
  let statusData = null;
  let resultData = null;
  try {
    // Получение статуса и результата задачи с использованием правильного ключа
    const status = await client.hGet(taskId, "status");
    const result = await client.hGet(taskId, "result");
    statusData = status;
    resultData = result;
  } catch (error) {
    if (error.message.includes("WRONGTYPE")) {
      console.error(
        "Операция применена к ключу с неподходящим типом значения:",
        error
      );
    } else {
      console.error("Ошибка при получении статуса задачи:", error);
    }
  } finally {
    await client.disconnect();
  }
  return {
    status: statusData,
    result: resultData ? JSON.parse(resultData) : null,
  };
}
