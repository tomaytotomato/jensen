# Jensen Theme for Xresources

Bring the Cyber Renaissance to X Window System terminals with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your terminal into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during extended terminal sessions
- 🎯 **Carefully Crafted Colors**: Optimized for readability and visual hierarchy
- 💻 **Universal Compatibility**: Works with xterm, urxvt, st, and other X11 terminals

## Installation

1. Copy the contents of the theme file from this directory
2. Open or create your `~/.Xresources` file:
   ```bash
   nano ~/.Xresources
   ```
3. Paste the Jensen color configuration
4. Load the new configuration:
   ```bash
   xrdb -merge ~/.Xresources
   ```
5. Restart your terminal or start a new instance

## Automatic Loading

To automatically load your `.Xresources` on login, add this to your `~/.xinitrc` or `~/.xprofile`:

```bash
xrdb -merge ~/.Xresources
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

## Supported Terminals

Jensen for Xresources works with:
- **xterm** - Classic X terminal
- **urxvt** (rxvt-unicode) - Unicode-enabled terminal
- **st** (Simple Terminal) - Suckless terminal
- **aterm** - Afterstep terminal
- And many other X11 terminals

## Tips

- **Font Recommendation**: Add a font configuration to your `.Xresources`:
  ```
  *.font: xft:JetBrains Mono:size=11
  ```
- **Transparency**: For urxvt, enable transparency:
  ```
  URxvt.transparent: true
  URxvt.shading: 15
  ```
- **Testing**: Use `xrdb -query` to see your current configuration
- **Backup**: Keep a backup of your `.Xresources` before making changes

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

