FROM node:8-alpine

EXPOSE 3000

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "docker:start"]