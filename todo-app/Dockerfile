FROM node:latest
WORKDIR /app

RUN npm init -y
COPY ./package.json ./
RUN npm install

COPY ./* ./
CMD ["npm", "start"]