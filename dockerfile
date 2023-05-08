FROM node:18

WORKDIR /usr/src/website
ADD package-lock.json package-lock.json

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]
