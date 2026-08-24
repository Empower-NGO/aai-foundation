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

**First-time setup**

Making the repository public is not enough. Pages must also be switched on:

1. Open https://github.com/Empower-NGO/aai-foundation/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` — **not** `main`
4. **Folder:** `/ (root)`
5. Save, wait 1–2 minutes, then open https://empower-ngo.github.io/aai-foundation/

If this page is missing, an organisation owner must allow Pages under the org **Settings → Member privileges**.

`Dockerfile` and `docker-compose.yml` join the existing `empngo-network`.  
Nginx on the EmpNGO VPS will route `aaifoundation.org` to `aai-web`.
