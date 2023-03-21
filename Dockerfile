FROM ghcr.io/puppeteer/puppeteer:19.7.5

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

FROM node:alpine
WORKDIR /usr/src/app
COPY ./ /usr/app
RUN npm install
COPY package*.json ./
COPY . .
CMD [ "node", "app.js" ]
