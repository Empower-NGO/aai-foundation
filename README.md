# Aai Samajsevi Sanstha — public website

Public site for [aaifoundation.org](https://www.aaifoundation.org).  
Separate from EmpowerNGO. Same VPS later, dedicated Docker container.

## Local development

```bash
cd e:\EmpowerNGO\Tech\CodeBase\aai-foundation
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS

## Content rules

Claims come from `EmpNGO/Documents/Website-Balgram/Aai Samajsevi Sanstha — Website Content Draft.md`.  
Do not invent numbers, stories, partners, or facilities.

## Phase 0

Header, footer, design tokens, logo, Projects menu, placeholder inner pages.  
Homepage story is Phase 1.

## Client preview (GitHub Pages)

A test copy is published at:

https://empower-ngo.github.io/aai-foundation/

This is a static preview only (noindex). Production stays on the VPS / Docker later.

If the first deploy fails, in the GitHub repo open **Settings → Pages** and set **Source** to **GitHub Actions**.

`Dockerfile` and `docker-compose.yml` join the existing `empngo-network`.  
Nginx on the EmpNGO VPS will route `aaifoundation.org` to `aai-web`.
