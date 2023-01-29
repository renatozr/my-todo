FROM node:16

ENV NODE_ENV=production

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]