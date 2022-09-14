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

COPY --from=base /app/dist /app/dist

# Expose the port the server listens to
EXPOSE 3000

# Run server
CMD [ "node", "/app/dist/main"]
