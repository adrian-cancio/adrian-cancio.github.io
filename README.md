## Adrian Cancio — Professional Portfolio

This repository houses Adrian Cancio’s professional portfolio—a modern, minimalist, and fully responsive site built with Next.js 15 (App Router) and Tailwind CSS. The experience highlights the journey from full-stack delivery at Treelogic toward a Cloud/DevOps-focused trajectory, with emphasis on automation, DevSecOps, and infrastructure-as-code.

### ✨ Key Sections
- **Hero:** Introduces Adrian’s current role and Cloud/DevOps ambition.
- **About & Career Vision:** Summarizes present responsibilities, future goals, and the active learning plan around PowerShell and automation.
- **Technical Stack:** Visual skill taxonomy across languages, frameworks, automation tooling, and complementary capabilities.
- **Key Projects:** Curated portfolio cards linking to public repositories in automation, systems engineering, and tooling.
- **Contact:** Fast access to email, GitHub, and pronouns for collaboration.

### 🛠️ Tech Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS 4
- React 19
- Testing with Vitest and Testing Library

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to explore the site. The app supports hot module reloading for rapid iteration.

## Quality Gates

Run linting:

```bash
npm run lint
```

Run the unit tests:

```bash
npm run test
```

Create a production build:

```bash
npm run build
```

Start the production server (after building):

```bash
npm run start
```

## Deployment

The project is configured for static export (`output: "export"` in `next.config.ts`), producing assets under `out/` when you run `npm run build`.

### GitHub Pages via Actions (recommended)
1. Ensure GitHub Pages is set to “GitHub Actions” in the repository settings.
2. Push to `master`. The workflow at `.github/workflows/deploy.yml` will:
	- Install dependencies
	- Run linting and tests
	- Build the static site
	- Publish the `out/` directory to GitHub Pages
3. Once the workflow completes, your site will be available at https://adrian-cancio.github.io/.

### Manual export (optional)

```bash
npm run build
```

The static assets live in `out/`. Deploy that folder to any static host if you prefer an alternative platform (e.g., Vercel, Netlify, Cloudflare Pages).

## License

All content © Adrian Cancio. Please reach out for collaboration or licensing inquiries.
