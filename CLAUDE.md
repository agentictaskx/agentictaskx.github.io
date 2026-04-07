# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal website of Neal Zhang — built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Live at [agentictaskx.github.io](https://agentictaskx.github.io/).

**GitHub account:** `agentictaskx` — switch before git/gh operations:

```bash
gh auth switch --user agentictaskx
```

## Build & Development

```bash
# Local dev (Docker — recommended)
docker compose pull && docker compose up
# Site at http://localhost:8080

# Format code (mandatory before every commit)
npm install --save-dev prettier @shopify/prettier-plugin-liquid
npx prettier . --write

# Rebuild after dependency changes
docker compose up --build

# Manual deploy trigger (for changes to non-code files)
gh workflow run deploy.yml --repo agentictaskx/agentictaskx.github.io --ref main

# Watch build status
gh run list --repo agentictaskx/agentictaskx.github.io --workflow deploy.yml --limit 1
```

## Architecture

**Jekyll 4.x static site** deployed via GitHub Actions → `gh-pages` branch → GitHub Pages.

Key configuration chain:

- `_config.yml` — primary site config (title, URL, features, plugins)
- `_data/socials.yml` — social links
- `_data/cv.yml` — CV content (rendercv format)
- `_data/photos.json` — photo data for Liquid templates
- `assets/data/photos.json` — **identical** static copy for JS fetch (both must stay in sync)
- `_data/repositories.yml` — GitHub repos for repositories page

**Pages config MUST be:** `build_type: legacy`, `source: gh-pages` branch. Using `build_type: workflow` will 404 the site.

## Content Structure

| Content Type | Location | Naming Convention |
| --- | --- | --- |
| Blog posts | `_posts/` | `YYYY-MM-DD-title.md` |
| Projects | `_projects/` | Any `.md` filename |
| Pages | `_pages/` | `name.md` (nav via `nav: true` + `nav_order:` frontmatter) |
| Embedded HTML | `assets/html/` | `project-name.html` |
| Images | `assets/img/` | Subdirectories per project |

Project card thumbnails are forced to **16:9 aspect ratio** via CSS in `_sass/_components.scss`. Use landscape images.

## Gotchas

1. **Removing a collection from `_config.yml`** → also remove from `jekyll-archives:` or build crashes with `undefined method 'docs' for nil`
2. **Deleting a file** → search for references first: `grep -r "filename" _pages/ _includes/ _layouts/`
3. **`deploy.yml` paths filter** — changes to README, instruction.md, plans/ do NOT auto-trigger deploy; use manual trigger
4. **YAML special characters** — quote strings: `title: "My: Cool Site"`

## Reference Docs

- `README.md` — concise repo overview and maintenance flow
- `instruction.md` — site-specific structure, navigation, and deployment notes
- `AGENTS.md` — short agent entry point for repo conventions
- `.github/copilot-instructions.md` — build pipeline, tech stack, and common pitfalls
