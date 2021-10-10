FROM node:latest
RUN mkdir -p /app/src
WORKDIR /app

RUN npm init -y
COPY ./package.json ./
RUN npm install --silent

COPY . .
CMD ["npm", "start"]