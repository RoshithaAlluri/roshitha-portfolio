# Alluri Roshitha — Portfolio

A responsive React + Vite personal portfolio.

## Run locally

1. Install Node.js (LTS): https://nodejs.org/
2. Open this folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually http://localhost:5173).

## Before publishing

- Put your latest resume PDF in `public/` and name it exactly `Roshitha_Resume.pdf`.
- In `src/App.jsx`, replace the three `link: profile.github` values with each project's actual GitHub repository URL.
- Review all personal details and dates.

## Create production build

```bash
npm run build
```

The production website files will be generated in `dist/`.

## Deploy

Push this project to a GitHub repository, then import that repository at https://vercel.com/new.
Vercel should detect Vite automatically. Deploy to receive a public `.vercel.app` URL.
