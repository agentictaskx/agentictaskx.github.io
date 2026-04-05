---
layout: page
title: Codebase-to-Course v2
description: A schema-driven pipeline that turns any codebase into an interactive HTML course — 75% fewer tokens than v1.
img:
importance: 1
category: active
---

An optimization of [Zara Zhang's](https://x.com/zarazhangrui) brilliant **codebase-to-course** skill for Claude Code. The original v1 had the AI generate entire HTML courses in one shot — beautiful output, but token-expensive. v2 separates content from presentation: the AI writes structured JSON, a build script handles all the HTML/CSS/JS assembly.

**Original v1 by [Zara Zhang](https://x.com/zarazhangrui)** — v2 optimization by Neal Zhang.

---

## Launch the Interactive Course

Learn how v2 works by taking the course it generated about itself (yes, it's meta):

<a href="/assets/html/codebase-to-course-v2.html" target="_blank" class="btn btn-primary btn-lg" style="font-size: 1.1rem; padding: 12px 32px; margin: 16px 0;">
  🚀 Launch Interactive Course
</a>

This course was generated *by* v2 *about* v2 — the tool teaching you how it works, using itself.

---

## v1 vs v2 Comparison

| Aspect | v1 (Zara Zhang) | v2 (Neal's optimization) |
|--------|-----------------|--------------------------|
| **Architecture** | LLM generates entire HTML | LLM generates JSON only; build script assembles |
| **Token usage** | ~25,000 tokens per course | ~6,000 tokens per course (**75% reduction**) |
| **Iteration** | Regenerate entire HTML for any change | Regenerate only the changed module's JSON |
| **Quality control** | LLM must maintain CSS/JS consistency | Static templates guarantee consistent styling |
| **Output modes** | Single HTML file | Single HTML + dev multi-file mode |
| **Element types** | Varies per generation | 15 standardized types with schema validation |

## How It Works

1. **Analyze** — AI reads the codebase and creates a structured profile
2. **Generate** — AI produces course content as JSON (one module at a time)
3. **Validate** — Schema checks all required fields before building
4. **Compile** — Build script (`compile.js`) assembles JSON + templates into final HTML
5. **Ship** — One self-contained HTML file, works offline, no dependencies

## The Key Insight

> Why have the AI regenerate 1,400 lines of CSS and 700 lines of JavaScript every single time? The styling and interactivity never change — only the content does.

v2 moves all presentation into static templates. The AI focuses entirely on the creative work: understanding the codebase and teaching it clearly. Everything else is automated.

## Tech Stack

- **Build script:** Node.js (627 lines)
- **Templates:** HTML + CSS (1,391 lines) + JS (715 lines)
- **Schemas:** JSON Schema for validation
- **15 element types:** prose, code translation, chat animation, data flow, callout, step cards, pattern cards, icon rows, file tree, architecture diagram, badge list, layer toggle, spot-the-bug, diff view, custom HTML

---

*Original skill by [Zara Zhang](https://x.com/zarazhangrui). v2 optimization by Neal Zhang.*
