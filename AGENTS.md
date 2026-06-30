# AGENTS.md — Jensen Theme

Reference for AI coding agents working on this repository. Keep this file up to date when project structure, conventions, or workflows change.

## Project Summary

**Jensen** is a multi-platform theme collection inspired by *Deus Ex: Human Revolution* (Cyber Renaissance aesthetic, gold/copper on deep black). It ships:

1. **Theme files** for 30+ apps (IDEs, terminals, browsers, editors, tools) — each in its own top-level directory.
2. **A Vue 3 + Vite showcase website** (under `website/`, built to `dist/`, deployed to GitHub Pages at `/jensen/`).
3. **A central manifest** `apps.json` that drives the website's app directory.

Author: `tomaytotomato`. License: MIT.

## Repository Layout

```
.
├── apps.json              # Canonical registry of all themed apps (drives website)
├── README.md              # Main project doc + color palette table
├── index.html             # Vite entry HTML
├── vite.config.js         # base: '/jensen/', outDir: 'dist'
├── tailwind.config.js     # Tailwind setup for website
├── postcss.config.js
├── package.json           # scripts: dev / build / preview
├── start-website.sh       # Interactive helper for npm scripts
│
├── src/                   # Shared source assets
│   ├── colours.scss
│   └── img/
├── public/                # Static assets served by Vite (icons, logos)
│   └── icons/             # SVG icons referenced from apps.json
├── website/               # Vue 3 SPA
│   ├── main.js
│   ├── App.vue
│   ├── assets/            # CSS + Eurostile fonts
│   └── components/        # Header, Hero, ColorPalette, AppsSection,
│                          # ComponentsShowcase, Footer
├── dist/                  # Build output (committed for GH Pages)
├── docs/                  # Reference screenshots
│
├── intellij/  vscode/  xcode/             # IDE themes
├── iterm2/  alacritty/  warp/  hyper/  kitty/  konsole/
├── terminal/  terminator/  winTerminal/  cmd/  conEmu/   # Terminals
├── vim/  vimLightLine/  sublime/  emacs/  bbEdit/        # Editors
├── firefox/  chrome/  brave/                              # Browsers
├── tailwind/  prism/                                      # Web dev
├── tmux/  alfred/  slack/  wox/  keypirinha/             # Tools
├── kdePlasma/  xresources/  sketchPalettes/              # Desktop / design
└── .github/copilot-instructions.md   # Detailed design philosophy
```

Each app directory should contain: theme file(s), a `README.md` with install instructions, and an SVG icon in `public/icons/` referenced from `apps.json`.

## Canonical Color Palette

Use **exact hex values** from the table in `README.md`. Do not invent new shades. Most important:

| Role       | Name              | Hex       |
|------------|-------------------|-----------|
| Background | Eerie Black       | `#141514` |
| Foreground | White             | `#FBFBFB` |
| Comment    | Silver Sand       | `#C4C7C4` |
| Primary    | Marigold (gold)   | `#EDA622` |
| Secondary  | Electronic Copper | `#E55D02` |
| Success    | French Lime       | `#A0FF33` |
| Info       | Pacific Blue      | `#0EA2C9` |
| Error      | Imperial Red      | `#ED333C` |
| Light gold | Dutch White       | `#F2E2BA` |
| Gold shadow| Café Noir         | `#503A1D` |
| Gold mid   | Dark Goldenrod    | `#BB831B` |

Hierarchy: Marigold (primary) → Electronic Copper (secondary) → French Lime / Pacific Blue (contextual) → Imperial Red (critical).

Note: `.github/copilot-instructions.md` lists a slightly older red (`#F25244`). The `README.md` palette (`#ED333C`) is the source of truth — prefer it.

## Common Workflows

### Website development
```bash
npm install          # first time
npm run dev          # vite dev server (http://localhost:5173)
npm run build        # produces dist/
npm run preview      # serve dist/ at http://localhost:4173
./start-website.sh   # interactive menu wrapping the above
```

The site is deployed under the `/jensen/` base path — keep `vite.config.js` `base` aligned with the GH Pages repo name.

### Adding a new app theme
1. Create `<appname>/` at repo root with the theme file(s) and a `README.md` containing install steps.
2. Add an SVG icon at `public/icons/<appname>.svg` (preferred over raster).
3. Append an entry to `apps.json` following the existing schema:
   - `id`, `name`, `description`, `category` (one of: `ide | editor | terminal | browser | web | tool | desktop | app | design`)
   - `status` (`available` | otherwise), `platform[]`, `directory`, `icon`, `screenshot`
   - `links` (`github`, `marketplace`, `docs`), `tags[]`, `files[]`
4. Bump `version` / `lastUpdated` in `apps.json` if doing a release.
5. The website's `AppsSection` will pick it up automatically (search + filter).

### Modifying an existing theme
- Edit files only in the app's directory.
- Keep colors faithful to the canonical palette.
- Update that app's `README.md` if installation or file layout changes.

## Conventions

- **Minimal dependencies**: only Vue 3, Vite, Tailwind, PostCSS, Autoprefixer. Don't add libraries casually.
- **ES modules**: `package.json` has `"type": "module"`.
- **Vue 3 SFCs** in `website/components/` — composition or options API, follow what's already in the file you're editing.
- **Tailwind** for website styling; raw SCSS lives in `src/colours.scss` for shared palette.
- **Docs tone**: professional but evokes Deus Ex ("augmented", "Cyber Renaissance"). The signature quote *"I never asked for this..."* appears in main docs — don't sprinkle it everywhere.
- **Documentation discipline**: per `.github/copilot-instructions.md`, do NOT add excessive docs. Prefer updating existing `README.md` / `SETUP.md` over creating new files.
- **No build artifacts** beyond the committed `dist/` (which is intentional for GH Pages).
- **Cross-platform**: terminal/editor themes often need testing on macOS, Linux, and Windows variants — flag in PRs when you can't verify all.

## Files Agents Should Read Before Non-Trivial Changes

- `README.md` — palette + app list
- `.github/copilot-instructions.md` — design philosophy
- `apps.json` — when touching anything that affects app metadata or the website
- The target app's own `README.md`

## Things to Avoid

- Introducing colors outside the canonical palette.
- Adding heavy frameworks or build tooling to the website.
- Creating new top-level documentation files when an existing README will do.
- Changing the Vite `base` without coordinating with GH Pages deployment.
- Editing `dist/` by hand — regenerate with `npm run build`.
- Renaming app directories without updating `apps.json` and links in `README.md`.
