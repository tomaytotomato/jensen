# Jensen Theme for Kitty

Bring the Cyber Renaissance to Kitty with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your terminal into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during extended terminal sessions
- 🎯 **Carefully Crafted Colors**: Optimized for readability and visual hierarchy
- 💻 **Cross-Platform**: Works on Windows, macOS, and Linux

## Installation

### Method 1: Include Theme File

1. Copy `jensen-kitty.conf` to your Kitty config directory:
   - **macOS/Linux**: `~/.config/kitty/`
   - **Windows**: `%USERPROFILE%\AppData\Local\kitty\`
2. In your main `kitty.conf`, add:
   ```
   include jensen-kitty.conf
   ```
3. Restart Kitty or reload config: `Ctrl+Shift+F5`

### Method 2: Direct Integration

1. Copy the contents of `jensen-kitty.conf`
2. Open your Kitty config file:
   - **macOS/Linux**: `~/.config/kitty/kitty.conf`
   - **Windows**: `%USERPROFILE%\AppData\Local\kitty\kitty.conf`
3. Paste the Jensen color configuration
4. Save and reload: `Ctrl+Shift+F5`

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

- **GPU Acceleration**: Kitty's GPU rendering makes Jensen's colors incredibly crisp
- **Font Recommendation**: Use Fira Code or JetBrains Mono for ligature support
- **Opacity**: Add background opacity for a subtle augmented effect:
  ```
  background_opacity 0.95
  ```
- **Live Reload**: Use `Ctrl+Shift+F5` to reload config without restarting Kitty

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Terminals**: iTerm2, Alacritty, Warp, Hyper, Windows Terminal
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

