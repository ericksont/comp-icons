FROM node:18.12.1-slim

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install\
    && npm install typescript -g
COPY . .
RUN tsc --init

CMD [ "node", "server.js" ]