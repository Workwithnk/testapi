FROM ghcr.io/puppeteer/puppeteer:19.7.5

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm run build

EXPOSE 5000

COPY . .

CMD [ "node", "app.js" ]
