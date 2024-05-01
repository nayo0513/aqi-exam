# syntax=docker/dockerfile:1.4
FROM node:alpine3.19 AS development

ENV PORT=3000

WORKDIR /code
COPY . /code
RUN npm ci

CMD [ "npm", "run" ,"dev" ]
