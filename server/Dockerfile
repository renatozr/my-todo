FROM node:16

ENV NODE_ENV=production

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 5000

CMD ["npm", "run", "prod"]