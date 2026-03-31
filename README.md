# Studio 3 Test

Small static-site starter built with:
- Vite (build/dev server)
- Tailwind CSS (utility framework)
- SCSS (custom styling)

## Project Structure
- `index.html` - Main HTML entry
- `src/main.js` - Frontend entry point
- `src/styles/tailwind.css` - Tailwind import
- `src/styles/main.scss` - Custom SCSS styles
- `vite.config.mjs` - Vite config

## Requirements
- Node.js 18+ (recommended: latest LTS)
- npm 9+

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start local development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in terminal (usually http://localhost:5173).

## Build for Static Handoff
1. Create production assets:
   ```bash
   npm run build
   ```
2. Final static output is in:
   - `dist/`

## Optional Local Verification of Production Build
```bash
npm run preview
```

## Handoff Notes
- For deployment to static hosting (Netlify, Vercel static output, S3, GitHub Pages, etc.), publish the contents of `dist/`.
- No server-side runtime is required.
