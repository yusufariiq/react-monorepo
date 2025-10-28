# Installation

## Prerequisites
- Node.js (16+ recommended)
- yarn
- Git

## Clone repository
```bash
git clone https://github.com/yusufariiq/react-monorepo.git
cd /d:/Project/lerna-react-basic
```

## Clean all lerna projects
`lerna clean -y`

## Install dependencies
```bash
# install root deps
yarn install
```

## Run the React app(s)
Start a single package (replace <package-name> with the package folder name from /packages):
```bash
lerna run start --scope <package-name> --stream
```
Start all start scripts in parallel:
```bash
lerna run start
```

## Build
Build all packages:
```bash
lerna run build
```
Build a single package:
```bash
lerna run build --scope <package-name> --stream
```

## Add a new React package
Option A — create with Create React App:
```bash
npx create-react-app packages/my-app
```
Option B — use Lerna to scaffold (if preferred):
```bash
npx lerna create my-app packages/my-app
```

## Add a dependency to a package
```bash
yarn workspace <package-name> add axios
```

## Add dev dependency
```bash
yarn workspace <package-name> add jest -D
```

Notes
- Replace placeholders (e.g., <repo-url>, <package-name>, my-app) with real names.
- If the repo uses npm/Yarn workspaces, use the workspace-aware commands (e.g., `npm install`, `npm run start --workspace=<workspace>`).
- Use `npx lerna --help` for more Lerna commands.