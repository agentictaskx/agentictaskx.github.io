# Site Instructions — agentictaskx.github.io

Personal website of **Neal Zhang** — Product Manager & Agentic Developer.

> **Narrative:** Like Guy from *Free Guy* (2021) — an NPC who wakes up inside the system and starts building his own path. Neal spent a decade as a PM shipping AI products at Microsoft, Meta, Zynga, and Age of Learning. Then he woke up to agentic AI and started building his own systems.

**Live at:** [https://agentictaskx.github.io/](https://agentictaskx.github.io/)

**GitHub account:** `agentictaskx` — switch before any git/gh operations:
```bash
gh auth switch --user agentictaskx
```

**Upstream theme docs:** Read `AGENTS.md` and `.github/copilot-instructions.md` for al-folio internals.

---

## Site Structure

| Page | Path | Nav Order | Description |
|------|------|-----------|-------------|
| **Home** | `/` | — (always first) | Bio (Free Guy narrative), profile photo, social links, latest posts |
| **Projects** | `/projects/` | 2 | Project cards — categories: `active`, `coming soon` |
| **Blog** | `/blog/` | 3 | "The Agentic Log" |
| **CV** | `/cv/` | 4 | Experience (Microsoft AI, Meta, Age of Learning, Zynga, MobilityWare) |
| **Personal** | dropdown | 5 | Gallery, World Map, Repositories |

### Navigation

Nav order is set in each page's frontmatter (`nav_order:`). The dropdown is configured in `_pages/dropdown.md`:

```yaml
dropdown: true
children:
  - title: gallery
    permalink: /gallery/
  - title: world map
    permalink: /worldmap/
  - title: divider
  - title: repositories
    permalink: /repositories/
```

Hidden pages (nav: false): publications, teaching, profiles, books, news, repositories (accessed via dropdown only).

---

## Tech Stack

- **Theme:** [al-folio](https://github.com/alshedivat/al-folio) (Jekyll 4.x)
- **Hosting:** GitHub Pages (static, 1GB max, 100GB/month bandwidth)
- **Build:** GitHub Actions (`deploy.yml`) builds Jekyll then pushes to `gh-pages` branch
- **Pages config:** `build_type: legacy`, `source: gh-pages` branch
- **Map:** Leaflet.js 1.9.4 + OpenStreetMap tiles (free, no API key)
- **Features:** Dark/light mode, responsive, SEO (Open Graph + Schema.org), RSS feed

---

## How to Add Content

### New Blog Post

Create a file in `_posts/` with naming convention `YYYY-MM-DD-your-post-title.md`:

```yaml
---
layout: post
title: Your Post Title
date: YYYY-MM-DD HH:MM:SS-0700
description: Short description for previews and SEO.
tags: agentic memory
categories: projects
giscus_comments: false
related_posts: false
---

Your markdown content here.
```

### New Project (Simple)

Create a file in `_projects/`:

```yaml
---
layout: page
title: Project Name
description: Short description
img: assets/img/your-image.jpg
importance: 1
category: active
github: https://github.com/agentictaskx/repo-name
---

Project details in markdown.
```

**Image rule:** Project card thumbnails are forced to 16:9 aspect ratio via CSS (`_sass/_components.scss`). Use landscape images, or tall images will show only the top portion.

### New Project (With Embedded Assets)

Pattern from tmux-tutorial — for projects with HTML pages, images, etc:

1. **Download assets** into `assets/`:
   - Images go to `assets/img/project-name/`
   - HTML pages go to `assets/html/project-name.html`

2. **Create project page** in `_projects/project-name.md`:
   - Use `img: assets/img/project-name/thumbnail.png` for card thumbnail
   - Link to HTML: `<a href="/assets/html/project-name.html" target="_blank">Launch</a>`
   - Embed images with al-folio's figure include:
     ```
     {% include figure.liquid loading="lazy" path="assets/img/project-name/image.png" title="Title" class="img-fluid rounded z-depth-1" %}
     ```

3. **Add to repositories** in `_data/repositories.yml` if it has a GitHub repo

### Travel Photos (Gallery + World Map)

1. Add photos to `assets/img/travel/`
2. **Edit BOTH files** with the same data (they must stay in sync):
   - `_data/photos.json` — used by Jekyll templates
   - `assets/data/photos.json` — served statically for JS fetch

```json
{
  "id": 2,
  "title": "Photo Title",
  "caption": "What happened here",
  "lat": 35.6762,
  "lng": 139.6503,
  "location": "Tokyo, Japan",
  "thumbnail": "/assets/img/travel/tokyo.jpg",
  "full": "/assets/img/travel/tokyo.jpg",
  "date": "2026-05-01"
}
```

### Social Links

Edit `_data/socials.yml`:

```yaml
github_username: agentictaskx
linkedin_username: zhangneal
x_username: NealZha48958325
rss_icon: true
```

Field names are defined by the `jekyll-socials` plugin. See `_includes/metadata.liquid` for URL generation.

### CV

Edit `_data/cv.yml`. Current format uses `rendercv` style (set in `_pages/cv.md`).

---

## Deployment

### How It Works

1. Push to `main` branch
2. `deploy.yml` workflow triggers (if changed files match the `paths` filter)
3. Workflow builds Jekyll with full Ruby/Python toolchain
4. Built site pushed to `gh-pages` branch via `JamesIves/github-pages-deploy-action`
5. GitHub Pages serves static files from `gh-pages` branch

### Manual Deploy Trigger

The `deploy.yml` has a `paths` filter — changes to non-code files (README, instruction.md, plans/) do NOT auto-trigger. Use:

```bash
gh workflow run deploy.yml --repo agentictaskx/agentictaskx.github.io --ref main
```

### Watch Build Status

```bash
gh run list --repo agentictaskx/agentictaskx.github.io --workflow deploy.yml --limit 1
gh run watch --repo agentictaskx/agentictaskx.github.io <RUN_ID> --exit-status
```

### Pages Configuration

**CRITICAL:** Pages must be configured as:
- `build_type: legacy` (NOT `workflow`)
- `source: gh-pages` branch, path `/`

The `deploy.yml` uses `JamesIves/github-pages-deploy-action` which pushes built files to the `gh-pages` branch. This is NOT the newer GitHub Actions Pages deployment (which uses `actions/deploy-pages`). If someone switches to `build_type: workflow`, the site will 404.

To verify or fix:
```bash
# Check current config
gh api repos/agentictaskx/agentictaskx.github.io/pages

# Fix if wrong
gh api -X PUT repos/agentictaskx/agentictaskx.github.io/pages \
  --input - <<< '{"build_type":"legacy","source":{"branch":"gh-pages","path":"/"}}'
```

### Local Development

```bash
docker compose pull && docker compose up
# Site runs at http://localhost:8080
```

---

## Gotchas & Common Build Failures

### 1. Removing a collection breaks jekyll-archives

If you remove a collection from `_config.yml` `collections:` (e.g. `books`), you MUST also remove its entry from `jekyll-archives:`. Otherwise `jekyll-archives-v2` crashes with `undefined method 'docs' for nil`.

### 2. Deleting files referenced by other pages

Pages can reference other files via frontmatter `content:` (e.g. `profiles.md` referenced `about_einstein.md`). Deleting the referenced file without updating the referencing page causes build failure: `Could not locate the included file`.

**Before deleting any file:** Search for references:
```bash
grep -r "filename" _pages/ _includes/ _layouts/
```

### 3. Project card image aspect ratio

All project card thumbnails are cropped to 16:9 via CSS in `_sass/_components.scss`:
```scss
.projects .card img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top;
}
```
Tall/portrait images will show only the top portion. Use landscape images for best results.

### 4. Photos.json dual file sync

The gallery and world map use `fetch()` to load photo data at runtime. Jekyll's `_data/` directory is NOT served as static files — so `_data/photos.json` is only available to Liquid templates. The `assets/data/photos.json` is the static copy that JS can fetch. **Both must contain identical data.**

### 5. Deploy workflow paths filter

`deploy.yml` only triggers on changes to these paths: `assets/`, `_sass/`, `_scripts/`, `*.bib`, `*.html`, `*.js`, `*.liquid`, `**/*.md`, `*.yml`, `Gemfile*`. Changes to `README.md`, `instruction.md`, `plans/`, etc. require manual trigger.

### 6. GitHub readme stats for repositories page

The repositories page uses `github-readme-stats.vercel.app` API to generate SVG cards. This requires:
- The GitHub account to have public activity
- Repos to have descriptions set on GitHub
- `repo_trophies.enabled: false` in `_config.yml` (disabled for new accounts with no trophy data)

---

## Key Files

```
_config.yml                          # Main site config
_pages/
  about.md                           # Home page (Free Guy narrative)
  projects.md                        # Projects grid (categories: active, coming soon)
  blog.md                            # Blog index
  cv.md                              # CV page
  gallery.md                         # Photo gallery (JS fetch)
  worldmap.html                      # Leaflet.js map (JS fetch)
  dropdown.md                        # Personal dropdown nav config
  404.md                             # Custom 404 page
_posts/                              # Blog posts (YYYY-MM-DD-title.md)
_projects/                           # Project cards
_data/
  cv.yml                             # CV content (rendercv format)
  socials.yml                        # Social links (jekyll-socials plugin)
  repositories.yml                   # GitHub repos for repositories page
  photos.json                        # Photo data for Liquid templates
_sass/
  _components.scss                   # Custom CSS (project card 16:9 crops)
_bibliography/
  papers.bib                         # Bibliography (empty — academic feature disabled)
assets/
  img/
    prof_pic.jpg                     # Profile photo (anime avatar)
    travel/                          # Travel photos
    tmux-tutorial/                   # tmux tutorial PNG training cards (9 files)
  html/
    tmux-tutorial.html               # Self-contained interactive tutorial
  data/
    photos.json                      # Static copy of _data/photos.json for JS fetch
plans/
  personal-website-plan.md           # Original build plan
```

## Customization Reference

| What | Where |
|------|-------|
| Site title, URL, description | `_config.yml` lines 1-25 |
| Social links | `_data/socials.yml` |
| Dark/light mode | `_config.yml` → `enable_darkmode: true` |
| Nav bar items | Each page's `nav: true` + `nav_order:` in frontmatter |
| Project card image cropping | `_sass/_components.scss` → `.projects .card img` |
| Blog name | `_config.yml` → `blog_name:` |
| Footer | `_config.yml` → `footer_text:` |
| Favicon | `_config.yml` → `icon:` (currently robot emoji) |
| SEO / Open Graph | `_config.yml` → `serve_og_meta: true`, `serve_schema_org: true` |

---

## Built With

Theme by [al-folio](https://github.com/alshedivat/al-folio) · Site built with Claude
