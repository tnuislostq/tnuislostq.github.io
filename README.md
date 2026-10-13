<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Tanu Vishwakarma — Portfolio

React, TypeScript, and Vite portfolio deployable to GitHub Pages and Vercel.

## Run locally

**Prerequisite:** Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Deploy to GitHub Pages

Push the `main` or `master` branch to the `tnuislostq.github.io` repository. The GitHub Actions workflow builds and deploys the site automatically. In the repository settings, open **Pages** and set the source to **GitHub Actions**.

The site is published at https://tnuislostq.github.io/.

## Deploy to Vercel

Import the same GitHub repository in Vercel. The included `vercel.json` configures the install command, build command, and `dist` output directory. Use the repository's `main` branch for production deployments; subsequent pushes will deploy automatically.
