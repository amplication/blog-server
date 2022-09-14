FROM node:16.16 AS base

# Set the working directory
WORKDIR /app

# Copy files specifying dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy Prisma schema
COPY prisma/schema.prisma ./prisma/

# Generate Prisma client
RUN npm run prisma:generate;

# Copy all the files
COPY . .

# Build code
RUN npm run build

FROM node:16.16-alpine AS prod

WORKDIR /app

COPY --from=base /app/node_modules/ ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/dist ./dist
COPY --from=base /app/prisma ./prisma

# Expose the port the server listens to
EXPOSE 3000

# Run server
CMD [ "node", "./dist/main"]
