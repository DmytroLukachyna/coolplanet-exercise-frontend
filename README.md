![Logo](https://www.coolplanet.io/hs-fs/hubfs/Imported%20sitepage%20images/header-logo.png?width=1980&height=384&name=header-logo.png)

# CoolPlanet - Exercise - Frontend part

This repository contains the frontend part of the CoolPlanet exercise. Backend part can be found [here](https://github.com/DmytroLukachyna/coolplanet-exercise-backend).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DmytroLukachyna/coolplanet-exercise-frontend.git
   ```
2. Navigate into the project directory and install dependencies.

## Usage

1. Check that you have environment variables set up in a .env.local file.
2. Start the development server:

```bash
  npm run dev
```

3. Open a browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.
   **You will be redirected to /users page by default.**

## Scripts

The following scripts are available for development and production tasks:

- **dev**: `npm run dev`
  - Starts the Next.js development server on [http://localhost:3000](http://localhost:3000).
- **build**: `npm run build`
  - Compiles the application for production.
- **start**: `npm run start`
  - Starts the compiled Next.js application in production mode.
- **lint**: `npm run lint`
  - Runs ESLint to check for code quality and style issues.
- **lint-fix**: `npm run lint-fix`
  - Runs type checking and fixes any auto-fixable ESLint errors.
- **format**: `npm run format`
  - Formats all JavaScript, TypeScript, and Markdown files in `src` using Prettier with the configuration specified in `.prettierrc`.
