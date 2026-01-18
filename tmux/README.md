# Jensen Theme for tmux

Bring the Cyber Renaissance to tmux with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your terminal multiplexer into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during extended terminal sessions
- 🎯 **Multiple Variants**: 12 different theme variations to choose from
- 💻 **Universal Support**: Works on any system running tmux

## Available Variants

This directory contains multiple Jensen theme variants:

### Style Variants
- **default** - Clean, minimal status bar
- **block** - Block-style separators
- **double** - Double-line separators

### Version Variants (v0-v3)
- **v0** - Minimal information
- **v1** - Standard information
- **v2** - Enhanced information
- **v3** - Maximum information display

Choose the variant that best suits your workflow!

## Installation

### Method 1: Source the Theme File

1. Choose your preferred variant (e.g., `themer-tmux.dark.default.v0.tmuxtheme`)
2. Copy it to a permanent location:
   ```bash
   mkdir -p ~/.config/tmux/themes/
   cp themer-tmux.dark.default.v0.tmuxtheme ~/.config/tmux/themes/jensen.tmuxtheme
   ```
3. Add to your `~/.tmux.conf`:
   ```bash
   source-file ~/.config/tmux/themes/jensen.tmuxtheme
   ```
4. Reload tmux configuration:
   ```bash
   tmux source-file ~/.tmux.conf
   ```

### Method 2: Direct Integration

1. Copy the contents of your preferred theme file
2. Paste directly into your `~/.tmux.conf`
3. Reload: `tmux source-file ~/.tmux.conf`

## Quick Setup Example

```bash
# Install Jensen theme for tmux (default style, version 1)
cd ~/.config/tmux/
mkdir -p themes
cp /path/to/jensen/tmux/themer-tmux.dark.default.v1.tmuxtheme themes/jensen.tmuxtheme

# Add to ~/.tmux.conf
echo "source-file ~/.config/tmux/themes/jensen.tmuxtheme" >> ~/.tmux.conf

# Reload tmux
tmux source-file ~/.tmux.conf
```

## Color Palette

The Jensen theme uses a carefully curated palette inspired by Deus Ex: Human Revolution's iconic UI design:

| Color Name        | Hex Code    | Usage                                                    |
|-------------------|-------------|----------------------------------------------------------|
| **Eerie Black**   | `#141514`   | Main background, status bar background                   |
| **White**         | `#FBFBFB`   | Primary text, foreground elements                        |
| **Silver Sand**   | `#C4C7C4`   | Inactive panes, secondary information                    |
| **Marigold**      | `#EDA622`   | Primary accent, active pane, signature gold highlight    |
| **Electronic Copper** | `#E55D02` | Secondary accent, alerts                              |
| **French Lime**   | `#A0FF33`   | Success states, positive feedback                        |
| **Pacific Blue**  | `#0EA2C9`   | Information states, window indicators                    |
| **Imperial Red**  | `#ED333C`   | Error states, warnings, urgent notifications             |

## Customization

You can customize the Jensen theme by modifying the theme file. Common customizations:

```bash
# Change status bar position
set -g status-position top

# Adjust status update interval
set -g status-interval 1

# Customize left/right status content
set -g status-left "#[fg=#EDA622]❯ #S "
set -g status-right "#[fg=#0EA2C9]%H:%M"
```

## Tips

- **True Color**: Ensure your terminal supports true color (24-bit)
- **Font**: Use a powerline-compatible font for best results with block styles
- **Reload Quickly**: Create a keybinding to reload tmux config:
  ```bash
  bind r source-file ~/.tmux.conf \; display "Jensen augmented!"
  ```
- **Pane Borders**: The gold borders make it easy to see your active pane

## Recommended tmux Settings

Pair Jensen with these settings for the best experience:

```bash
# Enable true color support
set -g default-terminal "screen-256color"
set -ga terminal-overrides ",*256col*:Tc"

# Better mouse support
set -g mouse on

# Start windows and panes at 1
set -g base-index 1
setw -g pane-base-index 1
```

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Terminals**: iTerm2, Alacritty, Warp, Hyper, Konsole
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

