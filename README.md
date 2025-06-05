<h1 align="center">
    <a href="https://amplication.com/#gh-light-mode-only">
    <img src="https://github.com/amplication/amplication/blob/master/.github/assets/amplication-logo-light-mode.svg">
    </a>
    <a href="https://amplication.com/#gh-dark-mode-only">
    <img src="https://github.com/amplication/amplication/blob/master/.github/assets/amplication-logo-dark-mode.svg">
    </a>
</h1>

<p align="center">
  <i align="center">Instantly generate production-ready Node.js backend apps 🚀</i>
</p>

<h4 align="center">
  <a href="https://github.com/amplication/amplication/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/amplication/amplication/ci.yml?branch=master&label=pipeline&style=flat-square" alt="continuous integration">
  </a>
  <a href="https://github.com/amplication/amplication/graphs/contributors">
    <img src="https://img.shields.io/github/contributors-anon/amplication/amplication?color=yellow&style=flat-square" alt="contributers">
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

# Table of Contents
- [Introduction](#introduction)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Quick Start](#quick-start)
  - [Detailed Instructions](#detailed-instructions)
- [Deployment](#deployment)
- [Learn More](#learn-more)

## Introduction

Amplication is a robust, open-source development platform crafted to revolutionize scalable and secure Node.js application creation. It eliminates repetitive coding tasks and delivers production-ready infrastructure code tailored to your specifications and industry best practices.

This project consists of two main components:

- [`server`](./server/README.md): Node.js backend service (REST API, GraphQL, authentication, database access, etc.)
- [`admin-ui`](./admin-ui/README.md): React admin dashboard (user-friendly UI, forms, permissions, and client features)

For detailed instructions of each component, refer to each subdirectory’s README.

## Repository Structure

```
blog-server/
├── server/     # Backend Node.js application (NestJS, REST/GraphQL, Auth, etc.)
├── admin-ui/   # Frontend admin dashboard (React + React-Admin)
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (for running/initializing the database)

### Quick Start

#### 1. Clone the repository
```sh
git clone https://github.com/amplication/blog-server.git
cd blog-server
```

#### 2. Start the backend server
```sh
cd server
npm install
npm run prisma:generate
# Start the database for development
npm run docker:dev
# Initialize the database
npm run db:init
# Start the server
npm run start
```
By default, you can log in with username `admin` and password `admin`.

#### 3. Start the admin UI
(Open a new terminal tab/window)
```sh
cd admin-ui
npm install
npm run start
```
The admin UI will be available by default at [http://localhost:3001](http://localhost:3001).

#### 4. Environment Variables
Both components are configured via their respective `.env` files. See their READMEs for full details and required variables.

### Detailed Instructions
- [server/README.md](./server/README.md): Configuration variables, local setup, and production/deployment options for backend.
- [admin-ui/README.md](./admin-ui/README.md): Running, building, and configuring the frontend dashboard.

## Deployment

Both the Amplication website, blog server, and admin UI are continuously deployed:
- **Staging**: Automatically deployed on every commit to the `main` branch.
- **Production**: Deployed on release/tag from `main`.

This follows the deployment approach used in the main Amplication repository. Update the branch/tag as needed for your deployment strategy.

---

## Learn More
- [Amplication Docs: Getting Started](https://docs.amplication.com/guides/getting-started)
- [Amplication Website](https://amplication.com)
- [Discord Support](https://amplication.com/discord)
