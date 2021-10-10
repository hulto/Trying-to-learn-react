FROM node:latest
RUN mkdir -p /app/src
WORKDIR /app

RUN npm init -y
COPY ./package.json ./
RUN npm install

COPY ./server.js /app/
COPY ./src/* /app/src
CMD ["npm", "start"]