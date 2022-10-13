FROM node:16.16 AS base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY prisma/schema.prisma ./prisma/

RUN npm run prisma:generate

COPY . .

RUN npm run build

FROM node:16.16 AS prod

WORKDIR /app

COPY --from=base /app/node_modules/ ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/dist ./dist
COPY --from=base /app/prisma ./prisma
COPY --from=base /app ./

EXPOSE 3000

ENTRYPOINT ["node", "./dist/main"]

