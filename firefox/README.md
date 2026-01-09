# Jensen - Firefox Theme

Bring your browser into the Cyber Renaissance with this Firefox theme inspired by the iconic aesthetics of Deus Ex: Human Revolution. Features signature gold and copper tones against deep carbon black backgrounds with a subtle fractal pattern.

**Creator:** tomaytotomato

![img.png](img.png)

## Features

- **Deep Carbon Black** background (`#141514`) for comfortable browsing
- **Signature Gold** accents (`#EDA622`) throughout the interface
- **Cyber Lime Green** loading indicators (`#A0FF33`)
- **Alert Red** attention icons (`#F25244`)
- **Fractal Hexagonal Pattern** background inspired by Deus Ex UI elements
- **High Contrast** design for excellent readability

## Installation

### Method 1: Manual Installation (Development)

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the left sidebar
3. Click "Load Temporary Add-on..."
4. Navigate to this directory and select the `manifest.json` file
5. The theme will be applied immediately

**Note:** This is temporary and will be removed when Firefox restarts.

### Method 2: Installing as ZIP (Recommended)

1. Create a ZIP file containing:
   - `manifest.json`
   - `images/` folder with `background.svg`
2. Rename the ZIP file to `jensen-theme.xpi`
3. Open Firefox and navigate to `about:addons`
4. Click the gear icon ⚙️ → "Install Add-on From File..."
5. Select the `jensen-theme.xpi` file
6. Confirm the installation

### Method 3: Firefox Add-ons Store (Future)

This theme may be submitted to the Firefox Add-ons store for easier installation.

## Color Palette

The Jensen Firefox theme uses the following carefully selected colors:

| Element | Color | Hex | Purpose |
|---------|-------|-----|---------|
| **Background** | Deep Carbon Black | `#141514` | Main browser UI background |
| **Foreground** | Bright White | `#FBFBFB` | Text and tab text |
| **Toolbar Text** | Signature Gold | `#EDA622` | Primary toolbar text and icons |
| **Tab Line** | Signature Gold | `#EDA622` | Active tab indicator |
| **Tab Loading** | Cyber Lime | `#A0FF33` | Loading progress indicator |
| **Icons Attention** | Alert Red | `#F25244` | Warning and notification icons |
| **Hover** | Dark Goldenrod | `#BB831B` | Button hover states |
| **Comments** | Silver Sand | `#C4C7C4` | Inactive tab text |

## Theme Components

### Toolbar
- Dark background with gold text and icons
- Gold-bordered search/URL field
- Smooth hover transitions

### Tabs
- Subtle tab background with clear active indicators
- Gold line under active tab
- Cyber lime loading animation
- High contrast text

### Popups & Menus
- Dark backgrounds matching main theme
- Gold borders and highlights
- Clear visual hierarchy

### Sidebar
- Consistent dark theme
- Gold accents and borders
- Seamless integration

### Background Pattern
The SVG background features:
- Hexagonal fractal patterns inspired by Deus Ex UI
- Subtle gold accents with varied opacity
- Corner triangles in theme colors
- Light scan lines for that "augmented screen" aesthetic

## Customization

To modify the theme colors, edit the `manifest.json` file:

```json
"colors": {
  "toolbar": "rgb(20, 21, 20)",
  "toolbar_text": "rgb(237, 166, 34)",
  // ... more properties
}
```

To change the background pattern, edit `images/background.svg`.

## Browser Compatibility

- **Firefox:** 60+ (manifest v2)
- **Firefox Developer Edition:** Fully supported
- **Firefox ESR:** 60+ supported

## Screenshots

The theme provides a cohesive augmented experience:
- Dark mode by default
- Gold accents throughout
- Subtle animated elements
- Professional cyber aesthetic

## Troubleshooting

**Theme not loading?**
- Ensure `manifest.json` is valid JSON
- Check that `images/background.svg` exists
- Try reloading the temporary add-on

**Colors look wrong?**
- Clear Firefox cache and reload
- Check your monitor color profile
- Ensure hardware acceleration is enabled

**Background not showing?**
- Verify the SVG file path in manifest.json
- Check SVG file for syntax errors
- Try a simpler background temporarily

## Development

To develop this theme further:

1. Make changes to `manifest.json` or `background.svg`
2. In `about:debugging`, click "Reload" next to the extension
3. Test the changes immediately
4. Iterate until perfect

## Future Enhancements

Potential additions:
- Custom new tab page
- Animated loading indicators
- Multiple background variations
- Light theme variant (for those who ask for it)
- Browser action icons

## Inspiration

This theme is a tribute to:
- **Deus Ex: Human Revolution** by Eidos Montreal
- The stunning UI/UX design by Eric Bellefeuille
- The hexagonal motifs and gold aesthetic of Sarif Industries

## License

MIT License - See root LICENSE file

---

*"I never asked for this... but my browser looks augmented now."* 🔶⚡

