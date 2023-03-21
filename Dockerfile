FROM ghcr.io/puppeteer/puppeteer:19.7.5

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./


RUN sudo rm -rf node_modules package-lock.json && npm install

COPY . .

CMD [ "node", "app.js" ]
