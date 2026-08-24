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

**First-time setup** (the Actions deploy API 404s until this is done):

1. After the workflow finishes, open **Settings → Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Set **Branch** to `gh-pages` and the folder to `/ (root)`.
4. Save, wait a minute, then open the link above.

If Pages is missing or the site 404s, the repository likely needs to be **public** (GitHub Pages on a private org repo needs a paid plan).

`Dockerfile` and `docker-compose.yml` join the existing `empngo-network`.  
Nginx on the EmpNGO VPS will route `aaifoundation.org` to `aai-web`.
