---
layout: post
title: Building This Website
date: 2026-04-04 22:00:00-0700
description: How I built this personal website with al-folio, Jekyll, and GitHub Pages — with an AI copilot doing most of the work.
tags: projects dev-tools
categories: projects
giscus_comments: false
related_posts: false
---

## Why Build a Personal Website?

I've been meaning to set up a personal site for a while. Somewhere to put projects, share thoughts, and eventually pin travel photos on a world map. GitHub Pages felt like the obvious choice — free, version-controlled, and I already live on GitHub.

As a Product Manager who's spent years shipping products at Microsoft, Meta, and gaming companies, I know the value of just launching something. Perfect is the enemy of shipped.

## The Stack

- **[al-folio](https://github.com/alshedivat/al-folio)** — A Jekyll theme with 15k+ stars. It comes with dark mode, blog, projects, CV, and more out of the box.
- **Jekyll** — Static site generator. No servers, no databases, just markdown to HTML.
- **GitHub Pages** — Free hosting. Push to main, GitHub Actions builds and deploys.
- **GitHub Actions** — al-folio needs custom plugins that GitHub's default Jekyll builder doesn't support. The included deploy.yml workflow handles the full build pipeline.

## What's Here So Far

- **Home** — Quick intro and links
- **Projects** — What I'm building (more coming)
- **Blog** — You're reading it
- **CV** — The real deal — Microsoft AI, Meta, Age of Learning, Zynga, MobilityWare
- **Personal** — Gallery, world map, GitHub repos

## What's Next

A few things on the roadmap:

- More blog posts — agentic dev notes, memory research, product takes
- Travel photo world map with Leaflet.js
- Photo gallery
- Contact form via FormSubmit

## The Meta Part

This entire site was set up in a single session with an AI coding assistant. Every config edit, every page, every commit — pair-programmed with Claude. Like Guy from *Free Guy* putting on the sunglasses for the first time — once you see what agentic AI can do, you can't unsee it.

If you're thinking about building your own site, just start. Fork a theme, personalize it, ship it. You can always iterate.

---

*First post. More to come.*
