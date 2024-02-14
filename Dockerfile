FROM node

WORKDIR /bot

COPY package.json .
RUN npm install
COPY . .

CMD node source/main.js

