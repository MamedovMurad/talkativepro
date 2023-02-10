FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . ./

EXPOSE  9000

CMD [ "npm","start" ]
