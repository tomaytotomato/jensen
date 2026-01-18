# Jensen Theme for KDE Plasma

Bring the Cyber Renaissance to your KDE desktop with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your entire desktop into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during extended use
- 🎯 **Carefully Crafted Colors**: Optimized for KDE Plasma's interface elements
- 💻 **KDE Plasma 5+**: Works with KDE Plasma 5 and 6

## Installation

1. Copy `jensen.colors` to KDE's color schemes directory:
   ```bash
   mkdir -p ~/.local/share/color-schemes/
   cp jensen.colors ~/.local/share/color-schemes/
   ```

2. Open **System Settings**

3. Navigate to **Appearance** → **Colors**

4. Select **Jensen** from the list

5. Click **Apply**

## System-Wide Installation (Optional)

For all users on the system:

```bash
sudo cp jensen.colors /usr/share/color-schemes/
```

## What Gets Themed

The Jensen color scheme affects:
- Window title bars
- Panel and taskbar
- Menus and context menus
- Buttons and controls
- Text selection
- Links and highlighted text
- Active/inactive window states
- Plasma widgets and applets

## Color Palette

The Jensen theme uses a carefully curated palette inspired by Deus Ex: Human Revolution's iconic UI design:

| Color Name        | Hex Code    | Usage                                                    |
|-------------------|-------------|----------------------------------------------------------|
| **Eerie Black**   | `#141514`   | Main background, window backgrounds                      |
| **White**         | `#FBFBFB`   | Primary text, foreground elements                        |
| **Silver Sand**   | `#C4C7C4`   | Inactive elements, secondary text                        |
| **Marigold**      | `#EDA622`   | Primary accent, selections, active elements              |
| **Electronic Copper** | `#E55D02` | Secondary accent, hover states                        |
| **French Lime**   | `#A0FF33`   | Positive states, success messages                        |
| **Pacific Blue**  | `#0EA2C9`   | Links, information                                       |
| **Imperial Red**  | `#ED333C`   | Negative states, errors, close buttons                   |

## Recommended Complementary Settings

For the full Deus Ex experience:

1. **Plasma Theme**: Choose a dark Plasma theme (Breeze Dark works well)
2. **Window Decorations**: Use a minimal window decoration style
3. **Icons**: Dark icon theme (Breeze Dark Icons)
4. **Application Style**: Breeze (Dark)
5. **Fonts**: A clean sans-serif font

## Complete Jensen KDE Setup

```bash
# 1. Install Jensen color scheme
cp jensen.colors ~/.local/share/color-schemes/

# 2. Apply via System Settings
# Or use kwriteconfig5:
kwriteconfig5 --file kdeglobals --group General --key ColorScheme Jensen

# 3. Pair with Konsole Jensen theme
cp ../konsole/jensen-konsole.colorscheme ~/.local/share/konsole/

# 4. Restart plasmashell to apply
kquitapp5 plasmashell && kstart5 plasmashell
```

## Tips

- **Accent Color**: The signature gold works beautifully as an accent throughout KDE
- **Transparency**: KDE's blur effects look great with Jensen's dark backgrounds
- **Consistency**: Pair with Jensen themes for Konsole and other KDE apps
- **Export**: You can export your complete KDE setup with Jensen to share or backup

## Troubleshooting

**Colors not applying**: Try restarting plasmashell:
```bash
kquitapp5 plasmashell && kstart5 plasmashell
```

**Partial application**: Some apps may need to be restarted to pick up the new colors.

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Terminals**: Konsole (highly recommended!), Alacritty, Kitty
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

