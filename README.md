# Studio 3 Test

Live site: https://jaker-dev.github.io/studio-3/

Single-page static site built with:
- Vite (build + local dev server)
- Tailwind CSS v4
- SCSS

## Requirements
- Node.js 18+ (Node 20 recommended)
- npm 9+

## Project Structure
- `index.html` - Page markup
- `public/images/` - Static image assets
- `src/main.js` - App entry point
- `src/styles/tailwind.css` - Tailwind import + theme tokens
- `src/styles/main.scss` - Custom styles
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment workflow
- `vite.config.mjs` - Vite config (includes GitHub Pages base path)

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```

## Production Build
1. Build the site:
   ```bash
   npm run build
   ```
2. Output is generated in `dist/`.

To preview the production build locally (recommended):
```bash
npm run preview
```

## GitHub Pages Deployment
This repo is configured to deploy on push to `main` using GitHub Actions.

### One-time GitHub Settings
1. Open repository settings.
2. Go to Pages.
3. Under Build and deployment, set Source to `GitHub Actions`.

### Deploy Flow
1. Commit and push to `main`.
2. Workflow in `.github/workflows/deploy-pages.yml` runs automatically.
3. The built `dist/` folder is published to GitHub Pages.

## Important Config Note
`vite.config.mjs` uses:
```js
base: '/studio-3/'
```

This must match the repository name for project pages:
- Repo: `studio-3`
- Site URL: `https://jaker-dev.github.io/studio-3/`

If the repository name changes, update `base` to match.

## Troubleshooting
- If deployed assets 404, verify `base` in `vite.config.mjs` matches the repo name.
- After deploy, hard refresh the browser (Cmd+Shift+R).
- Do not open `dist/index.html` directly via `file://` for verification; use `npm run preview` instead.
