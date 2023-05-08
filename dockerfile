FROM node:18

WORKDIR /usr/src/website
ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "start"]
