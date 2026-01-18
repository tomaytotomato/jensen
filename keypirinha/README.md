# Jensen Theme for Keypirinha

Bring the Cyber Renaissance to Keypirinha with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your Windows launcher into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during quick searches
- 🎯 **Carefully Crafted Colors**: Optimized for Keypirinha's interface
- 💻 **Windows Compatible**: Works with Keypirinha on Windows 10/11

## Installation

1. Copy `jensen-keypirinha.ini` to your Keypirinha themes directory:
   - **Default location**: `%APPDATA%\Keypirinha\User\Themes\`
   
2. Create the directory if it doesn't exist:
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:APPDATA\Keypirinha\User\Themes\"
   ```

3. Copy the theme file:
   ```powershell
   Copy-Item jensen-keypirinha.ini "$env:APPDATA\Keypirinha\User\Themes\"
   ```

4. Open Keypirinha (default: `Ctrl+Win+K`)

5. Type `Keypirinha: Configure` and press Enter

6. In the config file, add or modify the `[gui]` section:
   ```ini
   [gui]
   theme = Jensen
   ```

7. Save and restart Keypirinha

## Manual Configuration

Alternatively, you can paste the contents directly into your Keypirinha.ini file under the appropriate sections.

## Color Palette

The Jensen theme uses a carefully curated palette inspired by Deus Ex: Human Revolution's iconic UI design:

| Color Name        | Hex Code    | Usage                                                    |
|-------------------|-------------|----------------------------------------------------------|
| **Eerie Black**   | `#141514`   | Main background, launcher window                         |
| **White**         | `#FBFBFB`   | Primary text, search input                               |
| **Silver Sand**   | `#C4C7C4`   | Secondary text, result descriptions                      |
| **Marigold**      | `#EDA622`   | Primary accent, selected items, signature gold           |
| **Electronic Copper** | `#E55D02` | Secondary accent, category indicators                 |
| **French Lime**   | `#A0FF33`   | Success states, active plugins                           |
| **Pacific Blue**  | `#0EA2C9`   | Information states, file paths                           |
| **Imperial Red**  | `#ED333C`   | Error states, warnings                                   |

## Tips

- **Hotkey**: The signature gold makes selected items stand out instantly
- **Fast Launch**: Keypirinha's speed + Jensen's clarity = augmented productivity
- **Custom Plugins**: Jensen works beautifully with all Keypirinha plugins
- **Dark Desktop**: Pair with a dark Windows theme for consistency

## Why Keypirinha?

Keypirinha is a lightning-fast launcher for Windows, similar to Alfred on macOS. The Jensen theme makes it even more pleasant to use with:
- High contrast for quick visual scanning
- Gold highlights for selected items
- Dark background that doesn't distract
- Professional appearance

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Terminals**: Windows Terminal, Alacritty, Warp, Hyper
- **Launchers**: Alfred (macOS), Wox (Windows)
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

