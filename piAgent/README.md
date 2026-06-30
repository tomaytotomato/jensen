# Jensen for Pi Agent

A [Deus Ex: Human Revolution](https://youtu.be/0af2wvSdwwI) inspired theme for
[Pi Agent](https://pi.dev) — the coding agent TUI. Cyber Renaissance gold and
copper, on a warm Eerie Black canvas.

> "I never asked for this..."

## Preview

| Token group     | Mapping (Jensen palette)                                  |
| --------------- | --------------------------------------------------------- |
| Accent / borders| Marigold `#EDA622`, Dark Goldenrod `#BB831B`              |
| Success / bash  | French Lime `#A0FF33`                                     |
| Info / links    | Pacific Blue `#0EA2C9`                                    |
| Warning         | Electronic Copper `#E55D02`                               |
| Error / diff −  | Imperial Red `#ED333C`                                    |
| Selection / bg  | Café Noir `#503A1D` / warm Eerie Black `#141514`          |
| Inline code     | Dutch White `#F2E2BA`                                     |
| Comments        | Silver Sand `#C4C7C4`                                     |
| Thinking levels | gold shadow → goldenrod → marigold → copper → blue → red  |

See the [main README](../README.md) for the canonical palette.

## Install

1. Copy the theme into your global Pi themes folder:

   ```bash
   mkdir -p ~/.pi/agent/themes
   cp jensen.json ~/.pi/agent/themes/jensen.json
   ```

   Or symlink it so updates from this repo are picked up automatically:

   ```bash
   ln -s "$PWD/jensen.json" ~/.pi/agent/themes/jensen.json
   ```

2. Activate the theme — either via the in-app menu (`/settings` →
   *Appearance* → *Theme*) or by editing `~/.pi/agent/settings.json`:

   ```json
   {
     "theme": "jensen"
   }
   ```

3. Restart Pi (or just save the file — Pi hot-reloads the active theme on
   change, handy if you want to tweak the colors).

## Alternative locations

Pi searches several places for themes (see the
[official docs](https://pi.dev/docs/latest/themes#locations)). Pick whichever
fits your workflow:

- **Global**: `~/.pi/agent/themes/jensen.json` (recommended)
- **Per-project**: `.pi/themes/jensen.json` inside a trusted project
- **CLI one-off**: `pi --theme /path/to/jensen.json`

## Tips

- For accurate colors in VS Code's integrated terminal, set
  `"terminal.integrated.minimumContrastRatio": 1`.
- Pair it with the Jensen [iTerm2](../iterm2), [Warp](../warp),
  [Alacritty](../alacritty) or [Kitty](../kitty) themes for a fully augmented
  terminal experience.

## Files

- `jensen.json` — the Pi Agent theme definition (all 51 required tokens).
