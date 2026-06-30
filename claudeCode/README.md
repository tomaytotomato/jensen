# Jensen for Claude Code

A [Deus Ex: Human Revolution](https://youtu.be/0af2wvSdwwI) inspired theme for
[Claude Code](https://docs.claude.com/en/docs/claude-code) — Anthropic's
official command-line AI coding assistant. Cyber Renaissance gold and copper
sweeping across **48 of Claude Code's 69 themable tokens** — Claude's accent,
prompt borders, plan mode, system spinner, diff word highlights, subagents,
rate-limit bar, and more.

> "I never asked for this..."

## Install

### 1. Drop the theme into your Claude themes folder

```bash
mkdir -p ~/.claude/themes
cp jensen.json ~/.claude/themes/jensen.json
```

Or symlink it so edits to this repo are picked up live:

```bash
ln -s "$PWD/jensen.json" ~/.claude/themes/jensen.json
```

> The **filename is the slug** — so `jensen.json` becomes the theme `jensen`
> (shown as **Jensen** in the picker). Renaming the file renames the theme.

### 2. Activate it inside Claude Code

In any Claude Code session, run:

```
/theme
```

Pick **Jensen** from the list. The change is immediate — no restart needed —
and Claude Code writes `"theme": "custom:jensen"` into `~/.claude/settings.json`.

## What gets re-skinned

The theme covers every meaningful surface that touches the Jensen palette
without invented shades:

| Surface                              | Jensen color                       |
| ------------------------------------ | ---------------------------------- |
| Claude's accent + permission prompts | Marigold `#EDA622`                 |
| Plan mode                            | Marigold `#EDA622`                 |
| Prompt border                        | Dark Goldenrod `#BB831B` (gold mid)|
| Bash tool border                     | Electronic Copper `#E55D02`        |
| System spinner / IDE indicator       | Pacific Blue `#0EA2C9`             |
| `success` / added word highlight     | French Lime `#A0FF33`              |
| `error` / removed word highlight     | Imperial Red `#ED333C`             |
| `warning` / fast-mode                | Electronic Copper `#E55D02`        |
| Foreground text                      | White `#FBFBFB`                    |
| Subtle / inactive UI                 | Café Noir `#503A1D` · Silver Sand `#C4C7C4` |
| Rate-limit bar fill / empty          | Marigold `#EDA622` · Café Noir `#503A1D` |
| You / Claude message labels          | Pacific Blue · Marigold            |
| Subagent labels                      | Mapped to palette (red, blue, green, yellow, orange, cyan) |
| Rainbow accents                      | Red → Copper → Marigold → Lime → Pacific Blue |

Diff backgrounds (`diffAdded`, `diffRemoved`, dimmed variants), purple/pink
subagent colors, message backgrounds, and indigo/violet rainbow shades are
intentionally **left at base-dark defaults** — using bright palette colors
there would harm legibility.

## File format

Claude Code expects exactly three top-level keys. The slug is the **filename**,
not a field. All other fields are silently ignored.

```json
{
  "name": "Jensen",
  "base": "dark",
  "overrides": {
    "claude": "#EDA622",
    "...": "..."
  }
}
```

- `name` — display name shown in `/theme` picker
- `base` — one of `dark`, `light`, `dark-daltonized`, `light-daltonized`,
  `dark-ansi`, `light-ansi`. Defaults to `dark` if missing/invalid.
- `overrides` — map of token name → color. Unknown tokens are silently
  dropped. Values accept `#rrggbb`, `#rgb`, `rgb(r,g,b)`, `ansi256(n)`,
  or `ansi:<name>`.

## Files

- `jensen.json` — the theme (48 overrides over `base: dark`).
