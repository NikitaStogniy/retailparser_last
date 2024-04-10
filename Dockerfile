# Определите базовый образ
FROM node:14

# Создайте директорию для приложения
WORKDIR /usr/src/app

# Копируйте файлы package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Копируйте исходный код приложения
COPY . .

# Откройте порт, который использует ваше приложение
EXPOSE 3000

# Задайте переменные окружения из файла .env
ENV FIRST_MULTIPLY=0.95
ENV SECOND_MULTIPLY=0.88
ENV DIFFERENCE=15
ENV REPAIR_PRICE=45000
ENV PORT=3000
ENV RABBIT_URL=amqp://guest:guest@localhost:5672

# Запустите приложение
CMD [ "node", "server.js" ]