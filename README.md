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

# Blog Server Monorepo

> **Instantly generate production-ready Node.js backend and admin UI with Amplication!**

## 🚀 Introduction

This repository provides a scalable, full-stack solution for quickly building production-grade Node.js applications using [Amplication](https://amplication.com). It aims to reduce boilerplate, speed up onboarding, and enable robust patterns through modern best practices.

- **Zero-setup onboarding:** Built-in scripts and clear guidance for new developers
- **Powerful, extensible monorepo:** Integrates server and admin UI projects for unified development
- **Cloud-ready:** Structured for easy deployment and CI/CD out-of-the-box

## 🗂️ Monorepo Structure

The repository uses a monorepo approach to centralize the backend server and admin UI code:

- [`/server`](./server/README.md) – Node.js backend/API ([see server README](./server/README.md))
- [`/admin-ui`](./admin-ui/README.md) – React admin interface ([see admin-ui README](./admin-ui/README.md))

Each package has its own README for detailed info, setup, and specific scripts. Please refer to those for component-level instructions.

## ⚡ Quickstart (TL;DR)

### 1. Clone the repo
```sh
git clone https://github.com/amplication/blog-server.git
cd blog-server
```

### 2. Configure Environment Variables
- Copy and edit `.env` files in [server](./server) and [admin-ui](./admin-ui) folders as needed. See below for a list of required environment variables.

### 3. Install dependencies and run locally
- To start all components for development:
```sh
# Install dependencies
npm install --workspaces

# Start server in one terminal
cd server
npm install
npm run prisma:generate
npm run docker:dev         # launches db and deps via Docker
npm run db:init            # seeds/init DB
npm run start              # launches API

# Start admin-ui in another terminal
cd ../admin-ui
npm install
npm run start              # starts React admin at http://localhost:3001
```

For more detailed instructions, see component READMEs: [server](./server/README.md), [admin-ui](./admin-ui/README.md).

## 🧩 Configuration & Environment Variables

**Server** (`/server`):
| Variable             | Description                                  | Example/Default                                                     |
| -------------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| BCRYPT_SALT          | String used for password hashing             | random-string                                                       |
| COMPOSE_PROJECT_NAME | Compose project name prefix                  | amp_blog-server                                                     |
| PORT                 | Port for API server                          | 3000                                                                |
| DB_URL               | Database connection string                   | postgres://user:pw@localhost:5432/db                                |
| DB_PORT              | DB port                                      | 5432                                                                |
| DB_USER              | DB username                                  | user                                                                |
| DB_PASSWORD          | DB password                                  | password                                                            |
| DB_NAME              | Database name                                | blog-server                                                         |
| JWT_SECRET_KEY       | JWT signing secret                           | secret                                                              |
| JWT_EXPIRATION       | JWT expiration (e.g. 2d)                     | 2d                                                                  |

**Admin UI** (`/admin-ui`):
| Variable             | Description                                  | Example/Default                 |
| -------------------- | -------------------------------------------- | ------------------------------- |
| PORT                 | Port for React app                           | 3001                           |
| REACT_APP_SERVER_URL | URL of backend API                           | http://localhost:3000           |

> **Note:** Templates for environment files `.env.example` may be present. Sensitive values should come from secrets, not be checked into source!

## 🚚 Deployment & CI/CD

- **Branching:**
  - `main` – Deploys automatically to staging on commit
  - Tagged releases – Deploy to production on version tag (from `main`)
- **CI/CD:**
  - Automated testing and build workflows via GitHub Actions ([View workflow](https://github.com/amplication/amplication/actions/workflows/ci.yml))
- **Environments:**
  - Both the blog server and admin UI are hosted on staging and production clusters; configs differ by branch/tag.

For full details or to update deployment settings, see your cloud provider's README or ops documentation (not included here).

## 📚 Documentation & Community
- [Amplication Docs](https://docs.amplication.com/)
- [Main Project Site](https://amplication.com)
- [Discord](https://amplication.com/discord)
- [Twitter](https://twitter.com/amplication)
- [YouTube](https://www.youtube.com/c/Amplicationcom)

## 🤝 Contributing
If you wish to contribute, please see the [contribution guidelines](CONTRIBUTING.md) if present. We welcome issues and PRs from the community!

## 📄 License & Acknowledgments
This project is licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).<br>
Icons, logos, and certain content &copy; Amplication.

---

_The README is designed for clarity and new contributor onboarding. Please open a pull request with feedback or requested changes._
