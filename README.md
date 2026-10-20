# Tanu Kr. Vishwakarma | Portfolio

Personal portfolio website for Tanu Kr. Vishwakarma, a Junior Full-Stack Developer. This project showcases projects, technical skills, experience, certifications, and contact information through a modern, interactive single-page portfolio built with React and TypeScript.

The site is live at: https://tnuislostq.github.io/

## Overview

This portfolio is designed to present:

- Full-stack project work and case studies
- Skills and technologies
- Education and work experience
- Certifications and credentials
- Contact details and resume access
- A polished interactive UI with theme switching and animated sections

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS
- Lucide React icons
- Canvas confetti and motion-based UI effects

## Features

- Responsive portfolio layout
- Dark/light theme toggle
- Interactive terminal-style modal
- Resume modal and profile presentation
- Animated background and custom cursor effects
- Dedicated project, skills, certifications, and experience sections
- Easy deployment to GitHub Pages or Vercel

## Project Structure

```text
.
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI sections and modals
│   ├── data/                # Portfolio data/models
│   ├── types/               # TypeScript types
│   ├── App.tsx              # Main app shell
│   ├── index.css            # Global styles and design system
│   └── main.tsx             # App entry point
├── .env.example
├── .gitignore
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vercel.json
├── vite.config.ts
├── bun.lock
├── package-lock.json
├── README.md
└── Polished Professional Studio Portrait.png
```

## Local Development

Prerequisites:

- Node.js 22+
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will run locally at:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

### GitHub Pages

This repository is configured for GitHub Pages hosting and can be deployed by pushing to the default branch. After deployment, the portfolio is available at:

```text
https://tnuislostq.github.io/
```

### Vercel

The project also includes a `vercel.json` configuration for deployment via Vercel.

## Scripts

```bash
npm run dev      # Start the app in development mode
npm run build    # Build the production bundle
npm run preview  # Preview the production bundle locally
npm run lint     # Run TypeScript type-checking
```

## Notes

This repository is a portfolio-focused front-end project intended to showcase the developer's work, certifications, and professional profile. It emphasizes strong visual design, a clean user experience, and quick deployment for static hosting.

## Author

Tanu Kumari  Vishwakarma

## Repository

https://github.com/tnuislostq/tnuislostq.github.io
