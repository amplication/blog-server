FROM node:16.16 AS base

ARG REACT_APP_SERVER_URL

ENV REACT_APP_SERVER_URL=$REACT_APP_SERVER_URL

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS prod

COPY --from=base /app/build /usr/share/nginx/html

RUN apk add --update nodejs npm
RUN npm install -g runtime-env-cra

EXPOSE 80

# ENTRYPOINT ["/bin/sh", "-c", "NODE_ENV=${NODE_ENV} PORT=80 REACT_APP_SERVER_URL=${REACT_APP_SERVER_URL} && runtime-env-cra --config-name ./build/runtime-env.js && nginx -g \"daemon off;\"
ENTRYPOINT ["sh", "-c", "runtime-env-cra --config-name ./build/runtime-env.js && nginx -g \"daemon off;\""]