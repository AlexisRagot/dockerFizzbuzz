FROM node:16.18-alpine

ENV NODE_ENV=production

COPY ./ /usr/local/app/
WORKDIR /usr/local/app

RUN npm install

EXPOSE 8000

CMD npm run start