# Plan: Personal Website on GitHub Pages

## Context

Neal wants a personal website at `https://agentictaskx.github.io/` — free, hosted entirely on GitHub Pages (static only). The site should combine professional info (resume, projects) with personal content (travel photos on a world map, blog). It should feel polished but not overly corporate.

## Research Summary

### GitHub Pages Constraints
- **Static only** — no server-side code, no databases
- **1 GB** max published site size, **100 GB/month** bandwidth
- **100 MB** max per file
- Jekyll builds: only whitelisted plugins unless using GitHub Actions
- **Solution:** Use GitHub Actions to build al-folio (bypasses plugin whitelist)

### Theme Choice: al-folio
- 15k+ stars, most feature-rich Jekyll theme
- Light/dark mode, responsive, Bootstrap-based
- Built-in: projects, blog, CV/resume, photo galleries, social links
- Deployed via GitHub Actions (not native Jekyll build)
- Needs customization: remove academic sections (publications, teaching), add world map

### Contact Without Exposing Email
- **FormSubmit.co** — zero signup, just set form action URL
- Email is hashed/hidden from bots
- Alternative: Formspree (requires signup, 50 free/month)

### Photo World Map
- **Leaflet.js** + OpenStreetMap tiles (free, no API key)
- MarkerCluster plugin for 100+ photos
- Thumbnails in popups, lazy loading
- Photos stored in repo or external CDN (Cloudinary free tier) if >1GB

### Social Post Embedding
- **X/Twitter:** Native `<blockquote>` embed HTML in markdown — works on GitHub Pages
- **LinkedIn:** Native `<iframe>` embed from "Embed this post" — works on GitHub Pages
- No plugins needed — just paste embed code into blog posts

## Site Structure

```
agentictaskx.github.io/
├── Home (About)        — brief intro, profile photo, social links
├── Projects            — cards with descriptions ("Coming Soon" for now)
├── Blog                — posts (original + reshared social posts)
├── CV                  — minimal resume pulled from LinkedIn
├── Personal            — dropdown menu:
│   ├── Photo Gallery   — grid of travel photos
│   └── World Map       — Leaflet.js map with photos pinned to locations
└── Contact             — FormSubmit form (email hidden) + LinkedIn link
```

### Navigation (top bar)
```
[Home]  [Projects]  [Blog]  [CV]  [Personal ▾]  [Contact]
                                    ├── Gallery
                                    └── World Map
```

### What Other Top Sites Include (that we should too)
From researching high-star repos:
- **Social icons** in footer/header (LinkedIn, GitHub, X/Twitter)
- **Dark/light mode toggle** (al-folio has this built in)
- **SEO meta tags** (al-folio includes `jekyll-seo-tag`)
- **RSS feed** (al-folio includes `jekyll-feed`)
- **Google Analytics** (optional, configured in `_config.yml`)
- **404 page** (al-folio includes one)
- **Favicon** (custom, from profile photo)

## Implementation Phases

### Phase 1: Fork & Basic Setup
1. Fork `alshedivat/al-folio` → `agentictaskx/agentictaskx.github.io`
2. Enable GitHub Pages (deploy via GitHub Actions)
3. Update `_config.yml`:
   - `url: https://agentictaskx.github.io`
   - `baseurl: ""` (user site, not project site)
   - Personal info: name, bio, social links (LinkedIn, GitHub, X)
   - Remove/disable: publications, teaching, news ticker
4. Replace default profile photo
5. Verify site loads at `https://agentictaskx.github.io/`

### Phase 2: Core Pages
1. **Home/About** (`_pages/about.md`):
   - Brief intro paragraph
   - Profile photo
   - Social links (LinkedIn, GitHub, X)
   - "What I'm working on" blurb

2. **CV** (`_pages/cv.md`):
   - Minimal: current role, education, key skills
   - "Full details on LinkedIn" link
   - Download PDF option (optional)

3. **Projects** (`_pages/projects.md`):
   - Card layout (al-folio has this built in)
   - tmux-tutorial as first project (link to repo)
   - 2-3 placeholder cards with "Coming Soon"

4. **Contact** (`_pages/contact.md`):
   - FormSubmit.co form (name, subject, message)
   - Email stays hidden — FormSubmit hashes it
   - LinkedIn profile link prominently displayed
   - GitHub profile link

### Phase 3: Blog
1. Set up `_posts/` directory
2. Create 1 initial post (e.g., "Building this website")
3. Add a reshared social post example:
   - X/Twitter embed (paste `<blockquote>` HTML)
   - LinkedIn embed (paste `<iframe>` HTML)
4. Configure blog pagination

### Phase 4: Photo Gallery & World Map
1. **Gallery page** (`_pages/gallery.md`):
   - Responsive photo grid using al-folio's built-in gallery support
   - Lazy loading (`loading="lazy"`)
   - Lightbox for full-size viewing
   - Start with 10-20 photos, add more over time

2. **World Map page** (`_pages/worldmap.html`):
   - Custom layout using Leaflet.js
   - OpenStreetMap tiles (free)
   - MarkerCluster plugin for clustering
   - JSON data file (`_data/photos.json`) with lat/lon/thumbnail/caption
   - Click marker → popup with photo thumbnail + caption
   - Click photo → full-size view

3. **Photo hosting strategy:**
   - < 50 photos: store in repo under `assets/img/travel/`
   - 50-200 photos: use thumbnails in repo, full-size on Cloudinary (free 25GB)
   - 200+: all on Cloudinary, only JSON metadata in repo

4. **Navigation:** Both under "Personal" dropdown

### Phase 5: Polish
1. Custom favicon (from profile photo)
2. Update footer (copyright, social links)
3. Light/dark mode verified working
4. Mobile responsive check
5. SEO: meta descriptions on all pages
6. Performance: Lighthouse audit, compress images
7. README.md for the repo

## File Structure (key files to create/modify)

```
agentictaskx.github.io/
├── _config.yml                    # Main config (modify)
├── _pages/
│   ├── about.md                   # Home page (modify)
│   ├── projects.md                # Projects (modify)
│   ├── cv.md                      # Resume (modify)
│   ├── blog.md                    # Blog index (keep)
│   ├── contact.md                 # Contact form (create)
│   ├── gallery.md                 # Photo gallery (create)
│   ├── worldmap.html              # Leaflet map (create)
│   └── dropdown.md                # Personal dropdown nav (create)
├── _posts/
│   └── YYYY-MM-DD-first-post.md   # Initial blog post (create)
├── _data/
│   ├── cv.yml                     # CV data (modify)
│   └── photos.json                # Photo locations for map (create)
├── assets/
│   ├── img/
│   │   ├── prof_pic.jpg           # Profile photo (replace)
│   │   └── travel/                # Travel photos (create)
│   ├── js/
│   │   └── worldmap.js            # Leaflet map logic (create)
│   └── css/
│       └── worldmap.css           # Map styles (create)
└── _layouts/
    └── worldmap.html              # Custom layout for map page (create)
```

## Verification

1. `bundle exec jekyll serve` locally — all pages render
2. Push to GitHub → Actions build succeeds
3. `https://agentictaskx.github.io/` loads with correct content
4. Navigation: all links work, dropdown works
5. Contact form: submit test → receive email
6. Photo map: markers appear, photos load in popups
7. Blog: posts render, social embeds display
8. Mobile: test on phone Chrome
9. Dark mode: toggle works on all pages
10. Lighthouse: Performance > 80, Accessibility > 90

## Timeline Estimate

| Phase | Effort |
|-------|--------|
| Phase 1: Fork & Setup | ~30 min |
| Phase 2: Core Pages | ~1-2 hours |
| Phase 3: Blog | ~30 min |
| Phase 4: Photos & Map | ~2-3 hours |
| Phase 5: Polish | ~1 hour |
| **Total** | **~5-7 hours** |

Can be done incrementally — Phase 1-2 gets you a live site, Phases 3-5 add features over time.
