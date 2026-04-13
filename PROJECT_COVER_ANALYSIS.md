# Project Cover Image Analysis Report
**agentictaskx.github.io**

**Date:** 2026-04-06  
**Analysis Scope:** Complete inventory of all projects in `_projects/` directory with cover image status verification

---

## Executive Summary

**Total Projects:** 6  
**Projects with Cover Images:** 4 (active projects)  
**Projects Missing Cover Images:** 2 (coming soon projects)  
**Cover Image Field Name:** `img` (YAML frontmatter)  
**Primary Storage Directory:** `assets/img/projects/`

---

## Complete Project Inventory

### Active Projects (4 total — all have cover images)

#### 1. **AgenticTaskX**
- **File:** `_projects/agentictaskx.md`
- **Status:** ACTIVE
- **Cover Image Field:** `img: assets/img/projects/agentictaskx.png`
- **Image Status:** ✅ EXISTS
- **Description:** Personal website and digital home—built on al-folio Jekyll theme, deployed on GitHub Pages
- **Key Features:** Light/dark mode, blog ("The Agentic Log"), interactive world map with Leaflet.js, responsive design, SEO optimized

#### 2. **Codebase-to-Course v2**
- **File:** `_projects/codebase_to_course_v2.md`
- **Status:** ACTIVE
- **Cover Image Field:** `img: assets/img/projects/codebase-to-course-v2.png`
- **Image Status:** ✅ EXISTS
- **Description:** Schema-driven pipeline that turns any codebase into an interactive HTML course—75% fewer tokens than v1
- **Key Features:** AI generates JSON, build script assembles HTML/CSS/JS; 15 standardized element types; single self-contained HTML file

#### 3. **PPT-to-Course**
- **File:** `_projects/ppt_to_course.md`
- **Status:** ACTIVE
- **Cover Image Field:** `img: assets/img/projects/ppt-to-course.png`
- **Image Status:** ✅ EXISTS
- **Description:** Claude Code skill that converts PowerPoint/PDF slide decks into interactive single-page HTML courses
- **Key Features:** 7 subject themes, PNG infographic export, interactive elements, speaker notes extraction, dual input (PPTX + PDF)

#### 4. **tmux Tutorial**
- **File:** `_projects/tmux_tutorial.md`
- **Status:** ACTIVE
- **Cover Image Field:** `img: assets/img/tmux-tutorial/00-overview.png`
- **Image Status:** ✅ EXISTS
- **Description:** Interactive hands-on tutorial for learning tmux terminal multiplexer
- **Key Features:** 9 visual training reference cards, hands-on exercises, completion certificate, self-contained HTML tutorial
- **Note:** Uses project-specific subdirectory `assets/img/tmux-tutorial/` instead of standard `assets/img/projects/`

### Coming Soon Projects (2 total — both MISSING cover images)

#### 5. **Agentic Memory System**
- **File:** `_projects/coming_soon_1.md`
- **Status:** COMING SOON
- **Cover Image Field:** `img:` (EMPTY — NO VALUE)
- **Image Status:** ❌ MISSING
- **Description:** Exploring memory architectures for AI agents
- **Note:** Placeholder project; frontmatter `img:` field exists but is unpopulated

#### 6. **Agentic Dev Tools**
- **File:** `_projects/coming_soon_2.md`
- **Status:** COMING SOON
- **Cover Image Field:** `img:` (EMPTY — NO VALUE)
- **Image Status:** ❌ MISSING
- **Description:** Collection of agentic developer tools and utilities
- **Note:** Placeholder project; frontmatter `img:` field exists but is unpopulated

---

## Cover Image Field Name

**YAML Frontmatter Field:** `img`

**Usage Pattern:** Consistent across all projects:
```yaml
img: assets/img/projects/[filename].png
```

**Observations:**
- Field name is uniform: `img` (not "image", "cover", "thumbnail", "hero", etc.)
- All projects define the field in frontmatter, even if left empty
- Path format: relative paths starting with `assets/img/`
- File extension: `.png` (consistent across all active projects)

---

## Image Directory Structure

### Primary Directory: `assets/img/projects/`
**Purpose:** Standard location for active project cover images  
**Contents:**
- `agentictaskx.png` (for AgenticTaskX project)
- `codebase-to-course-v2.png` (for Codebase-to-Course v2 project)
- `ppt-to-course.png` (for PPT-to-Course project)

### Project-Specific Subdirectory: `assets/img/tmux-tutorial/`
**Purpose:** Specialized storage for multi-image projects with training materials  
**Contents:**
- `00-overview.png` (training card)
- `01-sessions.png` (training card)
- `02-windows.png` (training card)
- `03-panes.png` (training card)
- `04-resize.png` (training card)
- `05-copy-mode.png` (training card)
- `06-workflow.png` (training card)
- `07-cheatsheet.png` (training card)
- `08-multi-project.png` (training card)

### Other Asset Directories (Not Project-Related)
- `assets/img/book_covers/` — 1 file
- `assets/img/publication_preview/` — 2 files
- `assets/img/travel/` — 1 file
- `assets/img/` (root) — 2 miscellaneous files

---

## Projects Missing Cover Images

### Missing Cover Images Summary

| # | Project Name | File | Category | Issue |
|---|---|---|---|---|
| 1 | Agentic Memory System | `_projects/coming_soon_1.md` | coming soon | `img:` field empty; no image file |
| 2 | Agentic Dev Tools | `_projects/coming_soon_2.md` | coming soon | `img:` field empty; no image file |

### Pattern Analysis

**Correlation:** All projects with `category: coming soon` (placeholder/WIP status) lack cover images. All projects with `category: active` (published status) have cover images.

**Rationale:** Coming soon projects are incomplete work-in-progress items—cover images typically created once project work reaches completion and active publication status.

---

## Key Findings

### 1. Frontmatter Structure
- **Field Name:** `img` (consistent across 100% of project files)
- **Field Status:** Present in all 6 projects; populated for 4 active projects, empty for 2 coming soon projects
- **Path Format:** Relative paths, always relative to site root (`assets/img/...`)

### 2. Image Storage Organization
- **Standard Location:** `assets/img/projects/` (used by 3 of 4 active projects)
- **Variation Allowed:** Project-specific subdirectories permitted (e.g., `assets/img/tmux-tutorial/`)
- **File Format:** PNG exclusively for project cover images

### 3. Status Correlation
- **Active Projects (4):** 100% have cover images
- **Coming Soon Projects (2):** 0% have cover images (all unpopulated `img:` fields)

### 4. Coverage Percentage
- **Cover Image Presence:** 4/6 projects (66.7%)
- **Missing Coverage:** 2/6 projects (33.3%)
- **All Missing Projects:** In "coming soon" status (work-in-progress placeholders)

---

## Recommendations

1. **For Coming Soon Projects:** Create placeholder or final cover images and populate the `img:` field once ready for public view
2. **Naming Convention:** Maintain kebab-case naming for project cover files (`agentictaskx.png`, `codebase-to-course-v2.png`, etc.)
3. **Image Dimensions:** Ensure all project cover images follow the 16:9 aspect ratio enforced by CSS in `_sass/_components.scss`
4. **Directory Consistency:** Continue using `assets/img/projects/` as the standard location for simple project covers; use project-specific subdirectories only when projects require multiple images (like tmux tutorial with training cards)

---

## Verification Checklist

- [x] All 6 project markdown files located and examined
- [x] Frontmatter `img` field values extracted and documented
- [x] All image file paths verified against actual files in `assets/img/`
- [x] Projects with empty `img:` fields identified (2 total)
- [x] Directory structure documented with file inventory
- [x] Status correlation (active vs coming soon) confirmed
- [x] File format and naming conventions documented

