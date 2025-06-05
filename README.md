# Blog Server Monorepo

[![CI](https://img.shields.io/github/actions/workflow/status/amplication/blog-server/continuous-integration.yml?branch=main&style=flat-square)](https://github.com/amplication/blog-server/actions/workflows/continuous-integration.yml)
[![Contributors](https://img.shields.io/github/contributors-anon/amplication/blog-server?color=yellow&style=flat-square)](https://github.com/amplication/blog-server/graphs/contributors)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](./LICENSE)

---

## Table of Contents
- [Project Overview](#project-overview)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

The **blog-server** project is a full-stack, production-ready open source blog platform generated with [Amplication](https://github.com/amplication/amplication). It aims to:
- Rapidly generate secure and scalable Node.js backend and React-based admin UI.
- Provide out-of-the-box REST & GraphQL endpoints, authentication, database, and role-based access control.
- Offer a modern admin interface for CRUD operations.

---

## Architecture & Tech Stack

This repo is a monorepo containing:
- **server**: Node.js backend built with [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/)
- **admin-ui**: Frontend admin dashboard built with [React](https://react.dev/) and [react-admin](https://marmelab.com/react-admin/)

**Main Features:**
- API: REST & GraphQL
- JWT-based authentication & RBAC
- Fully customizable, plugin-ready codebase
- Docker support for local & production
- Integrated continuous integration (CI) and deployment workflows

---

## Getting Started

### Prerequisites
- **Node.js** v16+
- **npm** v7+
- **Docker** (for DB and containerized development)

### Clone the Repository
```bash
git clone https://github.com/amplication/blog-server.git
cd blog-server
```

### Setting Up Server
1. **Configure environment:** Copy `.env` files for each subproject or fill with values (samples below).
2. **Install dependencies and run server:**

```bash
cd server
npm install
npm run prisma:generate
npm run docker:dev     # Start DB using Docker
npm run db:init        # Initialize DB with schema
npm run start          # Starts NestJS server
```
Server runs at http://localhost:3000

#### Example `.env` for server
```ini
BCRYPT_SALT=10
COMPOSE_PROJECT_NAME=amp_blog_server
JWT_SECRET_KEY=Change_ME!!!
JWT_EXPIRATION=2d
PORT=3000
DB_USER=admin
DB_PASSWORD=admin
DB_PORT=5432
DB_NAME=my-db
DB_URL=postgres://admin:admin@localhost:5432/my-db
```
*Change sensitive values in production!*

### Setting Up Admin UI
```bash
cd ../admin-ui
npm install
npm run start
```
Admin UI runs at http://localhost:3001

#### Example `.env` for admin-ui
```ini
PORT=3001
REACT_APP_SERVER_URL=http://localhost:3000
```

---

## Usage

### API Endpoints (Server)
- **REST:**
    - `POST /api/login` (JWT Authentication)
    - CRUD: `/api/post`, `/api/user`, `/api/story`, etc.
- **GraphQL:**
    - Playground at `http://localhost:3000/graphql`

**Default user:**
- Username: `admin`
- Password: `admin`

### Authentication
- Login to get JWT (admin/admin by default)
- Access secured endpoints with `Authorization: Bearer <token>`

### CLI / npm scripts
- In `/server`:
    - `npm run start` – Start dev server
    - `npm run test` – Run Jest tests
    - `npm run db:init` – Run DB migration and seed
    - `npm run docker:dev` – Spin up DB in Docker
- In `/admin-ui`:
    - `npm run start` – Start UI in dev mode
    - `npm run build` – Production build
    - `npm run test` – Run tests

---

## Project Structure

```
blog-server/
├─ admin-ui/          # React admin client
│  ├─ src/
│  ├─ public/
│  └─ ...
├─ server/            # NestJS backend
│  ├─ src/
│  │   ├─ post/       # Post related features
│  │   ├─ user/       # User features
│  │   ├─ story/      # Story features
│  │   ├─ tag/        # Tag features
│  │   ├─ auth/       # Auth module & strategies
│  │   └─ ...
│  ├─ prisma/         # Prisma DB schema and migrations
│  ├─ scripts/        # DB and seed scripts
│  └─ ...
├─ .github/           # Workflows & configs
└─ README.md          # (this file)
```

---

## Contributing

We'd love your help! To contribute:

- Clone and set up locally as above
- Branch from `main` (feature/your-topic)
- Add/fix code & tests
- Ensure code style & lint (Prettier/NestJS/React standards)
- Run tests:
    - Backend (`/server`): `npm run test` (Jest)
    - Frontend (`/admin-ui`): `npm run test` (React Testing Library)
- [Open a pull request](https://github.com/amplication/blog-server/pulls) with a clear description
- For issues, [open a ticket](https://github.com/amplication/blog-server/issues)

---

## License

This project is licensed under the Apache 2.0 License. See [LICENSE](./LICENSE) for details.

---

## Contact

- [Amplication Discord](https://amplication.com/discord)
- [Project maintainers @amplication](https://github.com/amplication/blog-server/graphs/contributors)
- For help/issues, please [open an issue](https://github.com/amplication/blog-server/issues)

---
*Generated with [Amplication](https://github.com/amplication/amplication)*
