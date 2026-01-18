# Jensen Theme for Emacs

Bring the Cyber Renaissance to Emacs with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your editor into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during extended coding sessions
- 🎯 **Carefully Crafted Colors**: Optimized for readability and visual hierarchy
- 💻 **Universal Emacs Support**: Works with GNU Emacs and compatible variants

## Installation

### Method 1: Manual Installation

1. Copy `jensen.el` to your Emacs themes directory:
   ```bash
   mkdir -p ~/.emacs.d/themes/
   cp jensen.el ~/.emacs.d/themes/
   ```
2. Add to your Emacs configuration (`~/.emacs` or `~/.emacs.d/init.el`):
   ```elisp
   (add-to-list 'custom-theme-load-path "~/.emacs.d/themes/")
   (load-theme 'jensen t)
   ```
3. Restart Emacs or evaluate the buffer: `M-x eval-buffer`

### Method 2: Direct Load

1. Place `jensen.el` anywhere in your Emacs load path
2. Add to your configuration:
   ```elisp
   (load-file "/path/to/jensen.el")
   (load-theme 'jensen t)
   ```

### Enabling Interactively

You can also load Jensen interactively:
```
M-x load-theme RET jensen RET
```

## Color Palette

The Jensen theme uses a carefully curated palette inspired by Deus Ex: Human Revolution's iconic UI design:

| Color Name        | Hex Code    | Usage                                                    |
|-------------------|-------------|----------------------------------------------------------|
| **Eerie Black**   | `#141514`   | Main background, canvas                                  |
| **White**         | `#FBFBFB`   | Primary text, foreground elements                        |
| **Silver Sand**   | `#C4C7C4`   | Comments, muted text, secondary information              |
| **Marigold**      | `#EDA622`   | Primary accent, signature gold highlight, selected items |
| **Electronic Copper** | `#E55D02` | Secondary accent, hover states, warm highlights        |
| **French Lime**   | `#A0FF33`   | Success states, positive feedback, strings               |
| **Pacific Blue**  | `#0EA2C9`   | Information states, links, functions                     |
| **Imperial Red**  | `#ED333C`   | Error states, warnings, critical alerts                  |

## Tips

- **Font Recommendation**: Use a programming font with good Unicode support:
  ```elisp
  (set-face-attribute 'default nil :font "JetBrains Mono-11")
  ```
- **True Color Support**: Ensure your terminal supports true color if using Emacs in terminal mode
- **Mode Line**: Jensen provides custom mode line colors for a cohesive look
- **Org Mode**: The theme includes optimized colors for Org mode

## Compatibility

Jensen for Emacs supports:
- **GNU Emacs** 24.3+
- **Doom Emacs** (place in `~/.doom.d/themes/`)
- **Spacemacs** (place in `~/.spacemacs.d/themes/`)

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Editors**: Vim, BBEdit
- **Terminals**: iTerm2, Alacritty, Warp, Hyper
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

