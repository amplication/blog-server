FROM node:16.16 AS base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY prisma ./prisma

RUN npm run prisma:generate

COPY . .

RUN npm run build

FROM node:16.16 AS prod

WORKDIR /app

COPY --from=base /app/node_modules/ ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/dist ./dist
COPY --from=base /app/prisma ./prisma

EXPOSE 3000

ENTRYPOINT ["node", "./dist/main"]

