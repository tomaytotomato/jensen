# Jensen Theme for Windows Terminal

Bring the Cyber Renaissance to Windows Terminal with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your terminal into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during extended terminal sessions
- 🎯 **Carefully Crafted Colors**: Optimized for readability and visual hierarchy
- 💻 **Windows 10/11 Compatible**: Works with Windows Terminal on Windows 10 and 11

## Installation

### Method 1: Settings UI (Easiest)

1. Open Windows Terminal
2. Press `Ctrl+,` to open Settings
3. Click **Open JSON file** (bottom-left corner)
4. Copy the color scheme from `jensen-win-terminal.json`
5. Find the `"schemes"` array in your settings
6. Paste the Jensen scheme into the array
7. Save the file (Windows Terminal will reload automatically)
8. Go back to Settings → **Profiles** → Select your profile (e.g., PowerShell)
9. Under **Appearance**, set **Color scheme** to **"Jensen"**
10. Click **Save**

### Method 2: Direct JSON Edit

1. Press `Win+R` and type: `%LOCALAPPDATA%\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState`
2. Open `settings.json` in your preferred text editor
3. Add the Jensen scheme to the `"schemes"` array
4. Set `"colorScheme": "Jensen"` in your desired profile

## Example Configuration

```json
{
  "schemes": [
    {
      "name": "Jensen",
      "background": "#141514",
      "foreground": "#FBFBFB",
      // ... (copy from jensen-win-terminal.json)
    }
  ],
  "profiles": {
    "defaults": {
      "colorScheme": "Jensen"
    }
  }
}
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

- **Acrylic Background**: Enable acrylic transparency in Windows Terminal settings for a sleek augmented look:
  ```json
  "useAcrylic": true,
  "acrylicOpacity": 0.9
  ```
- **Font Recommendation**: Use Cascadia Code or Fira Code for ligature support
- **Multiple Profiles**: Apply Jensen to specific profiles (PowerShell, CMD, WSL) individually

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Terminals**: iTerm2, Alacritty, Warp, Hyper, Kitty
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

