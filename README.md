# Neal Zhang

Personal website for Neal Zhang, built on top of the al-folio Jekyll theme.

- Live site: <https://agentictaskx.github.io/>
- Repository: <https://github.com/agentictaskx/agentictaskx.github.io>
- Theme base: <https://github.com/alshedivat/al-folio>

## Overview

This repo is intentionally slimmer than the upstream theme. It keeps the site source, build tooling, and a small set of maintenance notes, without the extra preview assets, generated Lighthouse reports, and broad upstream documentation.

The main website content lives in:

- `_pages/`
- `_posts/`
- `_projects/`
- `_data/`
- `assets/`
- `_includes/`, `_layouts/`, `_sass/`, `_scripts/`

## Local development

Use Docker for local work.

```bash
docker compose pull
docker compose up
```

The site runs at `http://localhost:8080`.

To rebuild after dependency changes:

```bash
docker compose up --build
```

## Formatting

Before committing, run:

```bash
npm install --save-dev prettier @shopify/prettier-plugin-liquid
npx prettier . --write
```

## Deploy

Pushes to `main` deploy normally when site-relevant files change.

For documentation-only updates or other changes outside the workflow path filters, trigger deploy manually:

```bash
gh auth switch --user agentictaskx
gh workflow run deploy.yml --repo agentictaskx/agentictaskx.github.io --ref main
```

Check the latest deploy run with:

```bash
gh run list --repo agentictaskx/agentictaskx.github.io --workflow deploy.yml --limit 1
```

## Common update points

- Site configuration: `_config.yml`
- Home page: `_pages/about.md`
- Projects: `_projects/`
- Blog posts: `_posts/`
- CV data: `_data/cv.yml`
- Social links: `_data/socials.yml`
- Photos and media: `assets/`

## Repo guidance

If you come back later to update, change, improve, or remove parts of the site, start with:

- `instruction.md` for site-specific guidance
- `.github/copilot-instructions.md` for build and repo conventions
- `CLAUDE.md` or `AGENTS.md` if you are using AI tooling in the repo
