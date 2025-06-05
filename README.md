<h1 align="center">
    <a href="https://amplication.com/#gh-light-mode-only">
    <img src="https://github.com/amplication/amplication/blob/master/.github/assets/amplication-logo-light-mode.svg">
    </a>
    <a href="https://amplication.com/#gh-dark-mode-only">
    <img src="https://github.com/amplication/amplication/blob/master/.github/assets/amplication-logo-dark-mode.svg">
    </a>
</h1>

<p align="center">
  <i align="center">Production-ready Node.js backend and admin UI for blogs, generated and maintained with Amplication 🚀</i>
</p>

<h4 align="center">
  <a href="https://github.com/amplication/amplication/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/amplication/amplication/ci.yml?branch=master&label=pipeline&style=flat-square" alt="continuous integration">
  </a>
  <a href="https://github.com/amplication/amplication/graphs/contributors">
    <img src="https://img.shields.io/github/contributors-anon/amplication/amplication?color=yellow&style=flat-square" alt="contributors">
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
    <img src="https://img.shields.io/badge/apache%202.0-blue.svg?style=flat-square&label=license" alt="license">
  </a>
  <br>
  <a href="https://amplication.com/discord">
    <img src="https://img.shields.io/badge/discord-7289da.svg?style=flat-square" alt="discord">
  </a>
  <a href="https://twitter.com/amplication">
    <img src="https://img.shields.io/badge/twitter-18a1d6.svg?style=flat-square" alt="twitter">
  </a>
  <a href="https://www.youtube.com/c/Amplicationcom">
    <img src="https://img.shields.io/badge/youtube-d95652.svg?style=flat-square&" alt="youtube">
  </a>
</h4>

<p align="center">
  <img src="https://github.com/amplication/amplication/assets/73097785/c7ed2bbc-8954-46a1-a520-91a4711a9320.png" alt="dashboard"/>
</p>

# Blog Server

Production-ready Node.js backend and React admin UI for blogs, generated and maintained with Amplication. Ideal for fast, scalable, and maintainable deployment with extensive configuration and contribution options for developers and teams.

---

## Table of Contents
- [Features](#features)
- [Architecture / Tech Stack](#architecture--tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [Troubleshooting & FAQ](#troubleshooting--faq)
- [License](#license)
- [Contact](#contact)

---

## Features
- Modern backend API in Node.js using [NestJS](https://nestjs.com/) & [Prisma](https://www.prisma.io/)
- Admin dashboard in React (powered by [React-Admin](https://marmelab.com/react-admin/))
- Out-of-the-box authentication, authorization, user & post management
- Scalable code & database architecture with plugin-friendly setup
- Instant local dev, containerized deployment, and cloud-readiness
- Auto-generated scripts for DB migration, seeding, and more

## Architecture / Tech Stack
### Server
- **NestJS**, **GraphQL** & **REST API**
- **Prisma ORM** (PostgreSQL, MySQL, etc.)
- **JWT Authentication**, **Passport.js**, **Access Control**
- **Docker** for containerization
- **Jest** for testing, **TS-Node** tooling

### Admin UI
- **React 16+**
- **React-Admin** for rapidly built admin interfaces
- **Apollo Client** & **GraphQL**
- **Material-UI** components
- Docker-ready

---

## Project Structure
```
blog-server/
├── admin-ui/        # React admin UI
├── server/          # Node.js/NestJS backend
├── .github/         # CI/CD & workflow files
└── README.md        # Project documentation
```
Each main component has its own README for advanced usage:
- [server/README.md](./server/README.md)
- [admin-ui/README.md](./admin-ui/README.md)

---

## Getting Started
### Prerequisites
- Node.js (v16.x+)
- npm (v8.x+ recommended)
- Docker & Docker Compose (for containerized workflow)

### Local Development (Quick Start)
```sh
# 1. Clone this repository
$ git clone https://github.com/amplication/blog-server.git
$ cd blog-server

# 2. Install dependencies for both services
$ cd server && npm install && cd ../admin-ui && npm install

# 3. Generate Prisma client
$ cd ../server && npm run prisma:generate

# 4. Start DB and server locally (from ./server)
$ npm run docker:dev     # Starts database using Docker Compose
$ npm run db:init        # Run DB migrations & seed
$ npm run start          # Starts NestJS server (http://localhost:3000)

# 5. Start admin UI (in separate terminal)
$ cd ../admin-ui && npm start    # http://localhost:3001
```
> Default Credentials: Username `admin`, Password `admin`

---

## Configuration

Both server and admin UI can be configured via their respective `.env` files in `server/` and `admin-ui/` directories. Example variables:

### Server (`server/.env`)
| Variable          | Description                              |
|-------------------|------------------------------------------|
| PORT              | Port for backend (default: 3000)         |
| DB_URL            | Database connection URI                  |
| JWT_SECRET_KEY    | JWT auth secret                          |
| ...               | See [server/README.md](./server/README.md) |

### Admin UI (`admin-ui/.env`)
| Variable                | Description                         |
|-------------------------|-------------------------------------|
| PORT                    | Port for frontend (default: 3001)   |
| REACT_APP_SERVER_URL    | Backend API URL                     |
| ...                     | Add custom variables as needed      |

> **Security Note:** Use environment variables and secrets management in production.

---

## Scripts
### Commonly Used Scripts - Server
| Script           | Description                              |
|------------------|------------------------------------------|
| npm start        | Start NestJS server                      |
| npm run build    | Build for production                     |
| npm test         | Run tests                                |
| npm run docker:dev | Launch DB with Docker Compose          |
| npm run db:init  | Initialize database and seed data        |
| npm run prisma:generate | Generate Prisma client             |

### Commonly Used Scripts - Admin UI
| Script           | Description                              |
|------------------|------------------------------------------|
| npm start        | Start React dev server                   |
| npm run build    | Production build                         |
| npm test         | Run tests                                |

For more scripts, see [server/package.json](./server/package.json) and [admin-ui/package.json](./admin-ui/package.json).

---

## Testing
- **Server**: Run `npm test` under `server/` for Jest-based tests
- **Admin UI**: Run `npm test` under `admin-ui/` for React Testing Library tests
- Test configuration is defined in each `package.json`

---

## Deployment
- **Staging**: Deploys automatically from the `main` branch
- **Production**: Deploys from release tags on `main`

Container images are built and pushed by GitHub Actions (see `.github/workflows`).
Custom Dockerfiles and compose files are provided for each component. To build containers manually:
```sh
# Server:
cd server && docker build .
# Admin UI:
cd ../admin-ui && docker build .
```

---

## Usage
- API and authentication details in [server/README.md](./server/README.md)
- React admin dashboard details in [admin-ui/README.md](./admin-ui/README.md)

---

## Contributing
- Fork and branch from `main`
- Follow best practices for commit messages, PRs, and code reviews
- Run unit/integration tests before pushing
- Submit PRs referencing associated issues/tickets
- For advanced contribution guidelines, use or extend [.github/workflows](.github/workflows) and `/docs` as needed

---

## Troubleshooting & FAQ
- Check `.env` files are set up correctly
- Ensure DB and all services are running before UI login
- Inspect GitHub Actions for CI/CD issues
- Consult component-specific READMEs for advanced issues
- Raise issues on GitHub if blocked

---

## License
Assumed to be [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) unless otherwise specified. See project or organization policies for changes

---

## Contact
- [Amplication Discord](https://amplication.com/discord)
- [Twitter](https://twitter.com/amplication)
- [YouTube](https://www.youtube.com/c/Amplicationcom)

For additional documentation, refer to https://docs.amplication.com/
