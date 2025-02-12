# my-portfolio

## Vite + React ⚡️

---

## Getting stated 🚀

### Prerequisites ⚠️

-   [Git](https://git-scm.com)
-   [Node.js](https://nodejs.org/en/download/)

## Setup 🔧

### Create the project 📂

```bash
yarn create vite
```

### Install dependancies 📓

```bash
yarn
```

### Start the development server 💻

```bash
yarn run dev
```

### Install Tailwind CSS

```bash
yarn add -D tailwindcss postcss autoprefixer
```

### Generate the tailwind.config.js and postcss.config.js files

```bash
yarn tailwindcss init -p
```

### Generate the tailwind.config.js and postcss.config.js files

-   In the file tailwind.config.js

```bash
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

### Add the Tailwind directive to the CSS

-   In the file tailwind.config.js

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### ESLint Plugin TailwindCSS

```bash
yarn add -D  eslint-plugin-tailwindcss
```

### Edit .eslintrc

"plugin:tailwindcss/recommended"

```bash
extends: ["plugin:tailwindcss/recommended"],
```

---

### React icons installation

```bash
yarn add react-icons
```

### React-vertical-timeline-component installation

```bash
yarn add react-vertical-timeline-component @heroicons/react
```

## Vercel installation

```bash
yarn add vercel
```

### Login to Vercel account

```bash
vercel login
```
