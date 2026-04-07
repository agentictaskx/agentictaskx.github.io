# Agent Guidelines

This repository is Neal Zhang's personal website, built on al-folio and trimmed to the files needed for ongoing maintenance.

## Start Here

- Read [`.github/copilot-instructions.md`](.github/copilot-instructions.md) first for build, layout, and deployment rules.
- Read [`instruction.md`](instruction.md) for site-specific content structure and editing guidance.
- Use [`CLAUDE.md`](CLAUDE.md) for a short repo summary and common commands.

## Essential Commands

### Local Development (Docker)

The recommended approach is using Docker.

```bash
# Initial setup & start dev server
docker compose pull && docker compose up
# Site runs at http://localhost:8080

# Rebuild after changing dependencies or Dockerfile
docker compose up --build

# Stop containers and free port 8080
docker compose down
```

### Pre-Commit Checklist

Before every commit, you **must** run these steps:

1. **Format Code:**

    ```bash
    # (First time only)
    npm install --save-dev prettier @shopify/prettier-plugin-liquid
    # Format all files
    npx prettier . --write
    ```

2. **Build Locally & Verify:**

    ```bash
    # Rebuild the site
    docker compose up --build

    # Verify by visiting http://localhost:8080.
    # Check navigation, pages, images, and dark mode.
    ```

## Critical Configuration

When modifying `_config.yml`, these **must be updated together**:

- **Personal site:** `url: https://username.github.io` + `baseurl:` (empty)
- **Project site:** `url: https://username.github.io` + `baseurl: /repo-name/`
- **YAML errors:** Quote strings with special characters: `title: "My: Cool Site"`

## Development Workflow

- **Git & commits:** See [.github/GIT_WORKFLOW.md](.github/GIT_WORKFLOW.md).
- **Code-specific instructions:** Use the matching instruction file for the file type you are editing.

| File Type                                     | Instruction File                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Markdown content (`_posts/`, `_pages/`, etc.) | [markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md)       |
| YAML config (`_config.yml`, `_data/`)         | [yaml-configuration.instructions.md](.github/instructions/yaml-configuration.instructions.md)   |
| BibTeX (`_bibliography/`)                     | [bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md) |
| Liquid templates (`_includes/`, `_layouts/`)  | [liquid-templates.instructions.md](.github/instructions/liquid-templates.instructions.md)       |
| JavaScript (`_scripts/`)                      | [javascript-scripts.instructions.md](.github/instructions/javascript-scripts.instructions.md)   |

## Common Issues

- For build and deployment pitfalls, use [`.github/copilot-instructions.md`](.github/copilot-instructions.md).
- For this site's structure and conventions, use [`instruction.md`](instruction.md).
- For upstream theme behavior, check the al-folio repository if needed.
