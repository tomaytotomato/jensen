# Jensen Theme for Tailwind CSS

*"I never asked for this... but I'm glad it exists."*

## Overview

This is a Tailwind CSS theme adaptation inspired by **Deus Ex: Human Revolution**, bringing the Cyber Renaissance aesthetic to your web applications. The theme features the iconic gold and copper tones from the game's UI against deep carbon blacks, creating a high-contrast, futuristic experience.

The theme uses CSS custom properties with hex color values for maximum compatibility and simplicity.

## Installation

### Using the Theme

1. Import the theme CSS file into your project:

```css
@import './theme.css';
```

2. The theme provides CSS custom properties that work with Tailwind CSS v4's `@theme inline` directive, including semantic color tokens like:
   - `--primary`: `#eda622` (Signature Jensen Gold)
   - `--background`: `#141514` (Dark mode) / `#f0f0f0` (Light mode)
   - `--foreground`: Text colors
   - `--destructive`: `#ef4444` (Alert red)
   - And many more...

## Color Palette

The Jensen theme uses hex-based colors for clarity and compatibility:

### Signature Colors (Hex Values)

| Color | Hex | Usage | Example Class |
|-------|-----|-------|---------------|
| **Carbon-950** | `#141514` | Dark background (eerie-black) | `bg-carbon-950` |
| **Carbon-50** | `#FBFBFB` | Light text (white) | `text-carbon-50` |
| **Carbon-300** | `#C4C7C4` | Comments (silver-sand) | `text-carbon-300` |
| **Gold-500** | `#EDA622` | Primary actions (marigold) | `bg-gold-500` |
| **Gold-700** | `#BB831B` | Dark gold (dark-goldenrod) | `bg-gold-700` |
| **Gold-950** | `#503A1D` | Gold shadow (cafe-noir) | `bg-gold-950` |
| **Gold-200** | `#F2E2BA` | Light gold (dutch-white) | `bg-gold-200` |
| **Copper-500** | `#E55D02` | Electronic copper accent | `bg-copper-500` |
| **Lime-500** | `#A0FF33` | Success (french-lime) | `bg-lime-500` |
| **Blue-500** | `#0EA2C9` | Information (pacific-blue) | `bg-blue-500` |
| **Red-500** | `#ED333C` | Danger (imperial-red) | `bg-red-500` |

### Available Color Palettes

Each color comes with a full range from 50 (lightest) to 950 (darkest):

- **Carbon**: Deep carbon blacks to bright whites
- **Gold**: Signature Jensen gold tones (marigold primary)
- **Copper**: Electronic copper for warm accents
- **Lime**: Cyber lime greens for success
- **Blue**: Electric blue for information
- **Red**: Alert red for danger

## Design Philosophy

The Jensen theme follows these core principles from the project:

- **Cyber Renaissance**: Blend futuristic technology with refined, elegant design
- **High Contrast**: Maintain readability with distinct foreground/background separation
- **Signature Gold**: The iconic gold/copper accent (`#EDA622`) as the hallmark
- **Dark Foundation**: Deep carbon black (`#141514`) provides the canvas
- **Purposeful Accents**: Each color serves a functional purpose

## Usage Examples

### Hero Section
```html
<div class="bg-carbon-950 text-carbon-50">
  <h1 class="text-5xl font-bold text-gold-500">
    Augmented Experience
  </h1>
  <p class="text-carbon-300">
    Enhance your interface with the Jensen theme
  </p>
  <button class="bg-gold-500 hover:bg-gold-400 text-carbon-950">
    Get Started
  </button>
</div>
```

### Alert Component
```html
<div class="bg-red-950 border-l-4 border-red-500 p-4">
  <p class="text-red-200">
    Warning: System security breach detected
  </p>
</div>
```

### Success Message
```html
<div class="bg-lime-950 border border-lime-500 p-4 rounded">
  <p class="text-lime-200">
    ✓ Augmentation successfully installed
  </p>
</div>
```

### Tech Panel
```html
<div class="bg-carbon-900 border border-blue-500 p-6">
  <h3 class="text-blue-400 font-semibold">System Status</h3>
  <p class="text-carbon-300">All systems operational</p>
</div>
```

## Official Color Values

From the Jensen project specification:

| Color      | Hex       | RGB           | Purpose                    |
|------------|-----------|---------------|----------------------------|
| Background | `#141514` | `20 21 20`    | Deep carbon black          |
| Foreground | `#FBFBFB` | `251 251 251` | Bright white text          |
| Comment    | `#C4C7C4` | `196 199 196` | Muted gray for comments    |
| Green      | `#A0FF33` | `160 255 51`  | Cyber lime (success/safe)  |
| Blue       | `#0EA2C9` | `14 162 201`  | Electric blue (info)       |
| Red        | `#F25244` | `242 82 68`   | Alert red (danger/warning) |
| Yellow     | `#EDA622` | `237 166 34`  | Signature gold (highlight) |

## OKLCH Color Space

This theme uses OKLCH (Oklch) color space for better perceptual uniformity and consistency across the color scales. OKLCH provides:

- **Better interpolation** between colors
- **Perceptually uniform** lightness
- **Consistent chroma** across hues
- **Wide gamut support** for modern displays

## Browser Support

The theme uses modern CSS features:
- CSS Custom Properties (CSS Variables)
- OKLCH color space (with fallbacks)
- Modern Tailwind v4 syntax

For maximum compatibility, ensure your build process includes appropriate fallbacks.

## Customization

You can extend or override the Jensen theme colors in your Tailwind config:

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        'jensen-highlight': 'oklch(72% 0.19 45)', // Custom gold variant
      }
    }
  }
}
```

## Contributing

When suggesting modifications to the theme:
- Maintain the Deus Ex aesthetic
- Use exact hex values from the official palette
- Test contrast for accessibility
- Document color purpose and usage

## Inspiration

This theme is a tribute to:
- **Deus Ex: Human Revolution** by Eidos Montreal
- UI/UX design by Eric Bellefeuille
- The cyberpunk aesthetic that defined a generation

## License

MIT License - See main project LICENSE file

---

**Created by tomaytotomato**

*"Would Adam Jensen approve of this augmentation?"*

