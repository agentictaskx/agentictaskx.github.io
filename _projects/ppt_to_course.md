---
layout: page
title: PPT-to-Course
description: Claude Code skill that converts PowerPoint or PDF slide decks into interactive single-page HTML courses with themes, quizzes, and PNG infographic export.
img: assets/img/projects/ppt-to-course.png
importance: 1
category: active
github: https://github.com/agentictaskx/ppt-to-course
---

A Claude Code skill that transforms any slide deck into a beautiful, interactive single-page HTML course. Point it at a `.pptx` or `.pdf` and it extracts all slides, images, charts, and speaker notes, then reorganizes everything into an engaging learning experience.

Built on the same schema-driven architecture as [Codebase-to-Course v2](/projects/codebase_to_course_v2/) — the AI generates structured JSON, a build script handles all the HTML/CSS/JS assembly.

---

## How It Works

1. **Extract** — Python scripts parse PPTX or PDF, pulling out text, images, charts, and speaker notes
2. **Generate** — AI produces course content as structured JSON (one module at a time)
3. **Validate** — Schema checks all required fields before building
4. **Compile** — Build script assembles JSON + templates into a polished interactive course
5. **Ship** — One self-contained HTML file, works offline, no dependencies

## Features

- **7 subject themes** — auto-detected or manually selected to match the content
- **PNG infographic export** — generate shareable social media images from course content
- **Interactive elements** — quizzes, animations, scroll-based navigation, code highlighting
- **Dual input** — accepts both PowerPoint (`.pptx`) and PDF slide decks
- **Speaker notes** — extracts and incorporates presenter notes as teaching context

## Comparison with Codebase-to-Course

| Aspect | Codebase-to-Course v2 | PPT-to-Course |
|--------|----------------------|---------------|
| **Input** | Source code repositories | PowerPoint / PDF slides |
| **Extraction** | AI reads code directly | Python scripts parse slides + images |
| **Output** | Interactive code walkthrough | Interactive slide-based course |
| **Shared** | Same schema, build pipeline, and element types | Same schema, build pipeline, and element types |

---

*A Claude Code skill by Neal Zhang.*
