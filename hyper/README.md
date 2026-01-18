# Jensen Theme for Hyper

Bring the Cyber Renaissance to Hyper with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your terminal into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during extended terminal sessions
- 🎯 **Carefully Crafted Colors**: Optimized for readability and visual hierarchy
- 💻 **Cross-Platform**: Works on Windows, macOS, and Linux

## Installation

### Method 1: npm Package (Recommended)

If this theme is published to npm (check package.json):

1. Open Hyper
2. Open Preferences (`Ctrl+,` or `Cmd+,`)
3. Add `'hyper-jensen'` to the plugins array:
   ```js
   plugins: ['hyper-jensen']
   ```
4. Save the file - Hyper will automatically install and apply the theme

### Method 2: Local Installation

1. Copy the `index.js` file from this directory
2. Navigate to Hyper's local plugins directory:
   - **macOS/Linux**: `~/.hyper_plugins/local/`
   - **Windows**: `%USERPROFILE%\.hyper_plugins\local\`
3. Create a `hyper-jensen` directory:
   ```bash
   mkdir -p ~/.hyper_plugins/local/hyper-jensen
   ```
4. Copy `index.js` and `package.json` to the directory
5. In your `.hyper.js` config, add to `localPlugins`:
   ```js
   localPlugins: ['hyper-jensen']
   ```
6. Restart Hyper

### Method 3: Direct Config

1. Copy the color values from `index.js`
2. Open your `.hyper.js` config file
3. Paste the colors into the `config` section
4. Save and Hyper will reload automatically

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

- **Font Recommendation**: Use a monospace font like Fira Code or Menlo
- **Transparency**: Add window opacity to your `.hyper.js`:
  ```js
  backgroundColor: 'rgba(20, 21, 20, 0.95)'
  ```
- **Vibrancy**: Enable window vibrancy on macOS for a sleek augmented effect
- **Plugins**: Jensen works great with other Hyper plugins like `hyper-tabs-enhanced`

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Terminals**: iTerm2, Alacritty, Warp, Windows Terminal, Kitty
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

