FROM node:16 AS base

WORKDIR /app/admin-ui

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine as prod

COPY --from=base /app/admin-ui/build /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]