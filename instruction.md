# Site Instructions — agentictaskx.github.io

Personal website of **Neal Zhang** — Product Manager & Agentic Developer.

🌐 **Live at:** [https://agentictaskx.github.io/](https://agentictaskx.github.io/)

## Site Structure

| Page | Path | Description |
|------|------|-------------|
| **Home** | `/` | Bio, profile photo, social links |
| **Projects** | `/projects/` | Project cards (active + coming soon) |
| **Blog** | `/blog/` | "The Agentic Log" — posts on agents, memory, dev tools, movies |
| **CV** | `/cv/` | Experience, skills, interests |
| **Gallery** | `/gallery/` | Travel photo grid (under Personal ▾) |
| **World Map** | `/worldmap/` | Leaflet.js map with photo markers (under Personal ▾) |
| **Repositories** | `/repositories/` | GitHub profile & repos (under Personal ▾) |

## Tech Stack

- **Theme:** [al-folio](https://github.com/alshedivat/al-folio) (Jekyll)
- **Hosting:** GitHub Pages
- **Build:** GitHub Actions (`deploy.yml` → `gh-pages` branch)
- **Map:** Leaflet.js + OpenStreetMap tiles
- **Features:** Dark/light mode, responsive, SEO, RSS feed

## How to Add Content

### New Blog Post

Create a file in `_posts/` with this naming convention:

```
_posts/YYYY-MM-DD-your-post-title.md
```

Template:

```yaml
---
layout: post
title: Your Post Title
date: YYYY-MM-DD HH:MM:SS-0700
description: A short description for previews and SEO.
tags: agentic memory
categories: projects
giscus_comments: false
related_posts: false
---

Your markdown content here.
```

### New Project

Create a file in `_projects/`:

```yaml
---
layout: page
title: Project Name
description: Short description
img: assets/img/your-image.jpg  # optional
importance: 1
category: active  # or "coming soon"
github: https://github.com/agentictaskx/repo-name  # optional
---

Project details in markdown.
```

### Travel Photos (Gallery + World Map)

1. Add photos to `assets/img/travel/`
2. Edit **both** of these files with the same data:
   - `_data/photos.json`
   - `assets/data/photos.json`

Entry format:

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

Edit `_data/socials.yml` to add/remove social links:

```yaml
github_username: agentictaskx
linkedin_username: zhangneal
x_username: NealZha48958325
rss_icon: true
```

### CV

Edit `_data/cv.yml` to update experience, skills, and interests.

## Deployment

### Automatic

Push to `main` → GitHub Actions builds and deploys to `gh-pages` branch.

> **Note:** The deploy workflow has a `paths` filter. If your push only changes files not in the filter (e.g., README), you may need to trigger manually.

### Manual Trigger

```bash
gh workflow run deploy.yml --repo agentictaskx/agentictaskx.github.io --ref main
```

### Local Development (Docker)

```bash
docker compose pull && docker compose up
# Site runs at http://localhost:8080
```

## Key Files

```
├── _config.yml              # Main site configuration
├── _pages/
│   ├── about.md             # Home page
│   ├── projects.md          # Projects page
│   ├── blog.md              # Blog index
│   ├── cv.md                # CV page
│   ├── gallery.md           # Photo gallery
│   ├── worldmap.html        # Leaflet.js map
│   └── dropdown.md          # Personal dropdown nav config
├── _posts/                  # Blog posts (YYYY-MM-DD-title.md)
├── _projects/               # Project cards
├── _data/
│   ├── cv.yml               # CV content
│   ├── socials.yml          # Social links
│   ├── repositories.yml     # GitHub repos to display
│   └── photos.json          # Photo locations for map
├── assets/
│   ├── img/
│   │   ├── prof_pic.jpg     # Profile photo
│   │   └── travel/          # Travel photos
│   └── data/
│       └── photos.json      # Static copy for JS fetch
└── plans/
    └── personal-website-plan.md  # Build plan
```

## Built With

Theme by [al-folio](https://github.com/alshedivat/al-folio) · Site built in one session with Claude 🤖
