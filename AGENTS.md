# AGENTS.md — Ray的數位筆記

## Project Overview

- **Name:** Ray的數位筆記
- **Framework:** Astro 7 + Tailwind CSS 4
- **Template:** AstroPaper v6
- **Language:** Traditional Chinese (zh-tw)
- **Deployment:** GitHub Pages
- **URL:** https://ray-10190.github.io/rays-digital-notes/

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:4321) |
| `npm run build` | Type check + build + generate pagefind index |
| `npm run lint` | ESLint check |
| `npm run format` | Prettier format |
| `npm run format:check` | Prettier check (no write) |

## Key Files

| File | Purpose |
|------|---------|
| `astro-paper.config.ts` | Site metadata, socials, features, theme settings |
| `astro.config.ts` | Astro config: base path, i18n, markdown, fonts |
| `src/styles/theme.css` | Light/dark theme color definitions |
| `src/i18n/lang/zh-tw.ts` | Traditional Chinese UI translations |
| `src/content/pages/about.md` | About page content |
| `src/content/posts/` | Blog posts (currently empty) |

## Conventions

- **Language:** All UI text must be in Traditional Chinese (zh-tw). Only blog post content can be in other languages.
- **Theme colors:** Defined in `src/styles/theme.css` using CSS custom properties (`--color-accent`, `--color-bg`, etc.)
- **Social icons:** SVG files in `src/assets/icons/socials/`. Filename must match `name` in `astro-paper.config.ts` socials array.
- **Translations:** UI strings go in `src/i18n/lang/zh-tw.ts`. The i18n system auto-discovers `./lang/*.ts` files.
- **Posts:** Markdown/MDX files in `src/content/posts/`. Frontmatter requires `title`, `pubDatetime`, `description`.

## Deployment

Push to `main` branch triggers GitHub Pages deployment via `.github/workflows/deploy.yml`.

## Notes

- `base: "/rays-digital-notes"` in `astro.config.ts` is required for GitHub Pages subpath deployment
- Pagefind search index is built during `npm run build` and copied to `public/`
- The project uses `npm` (not pnpm) for local development
