# Jensen Theme for Alacritty

Bring the Cyber Renaissance to Alacritty with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your terminal into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during extended terminal sessions
- 🎯 **Carefully Crafted Colors**: Optimized for readability and visual hierarchy
- 💻 **Cross-Platform**: Works on Windows, macOS, and Linux

## Installation

1. Copy the contents of `jensen-alacritty.yml` from this directory
2. Open your Alacritty config file:
   - **macOS/Linux**: `~/.config/alacritty/alacritty.yml` or `~/.alacritty.yml`
   - **Windows**: `%APPDATA%\alacritty\alacritty.yml`
3. Paste the color scheme into your config file under the `colors:` section
4. Save the file
5. Alacritty will automatically reload the configuration

Alternatively, you can include the theme file:
```yaml
import:
  - /path/to/jensen-alacritty.yml
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

- **Font Recommendation**: Use a ligature-supporting font like Fira Code or JetBrains Mono for the best experience
- **Opacity**: Alacritty supports window opacity - try `opacity: 0.95` for a subtle augmented effect
- **Live Reload**: Alacritty automatically reloads when you save the config file

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Terminals**: iTerm2, Warp, Hyper, Windows Terminal, Kitty
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

