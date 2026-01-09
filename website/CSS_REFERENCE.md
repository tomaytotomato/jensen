# Jensen Theme Website - CSS Reference

## 🎨 Theme Colors

Use these Tailwind color classes throughout the site:

| Class | Hex | Usage |
|-------|-----|-------|
| `bg-jensen-bg` / `text-jensen-bg` | #141514 | Main background |
| `bg-jensen-fg` / `text-jensen-fg` | #FBFBFB | Main text color |
| `bg-jensen-comment` / `text-jensen-comment` | #C4C7C4 | Secondary text |
| `bg-jensen-green` / `text-jensen-green` | #A0FF33 | Success/Active |
| `bg-jensen-blue` / `text-jensen-blue` | #0EA2C9 | Info/Links |
| `bg-jensen-red` / `text-jensen-red` | #F25244 | Error/Alert |
| `bg-jensen-gold` / `text-jensen-gold` | #EDA622 | Accent/Highlight |
| `bg-jensen-dark` / `text-jensen-dark` | #0A0B0A | Darker background |
| `bg-jensen-panel` / `text-jensen-panel` | #1A1B1A | Panel/Card background |

## 🔧 Custom Component Classes

### Borders & Effects

```html
<!-- Cyber border with corner accents -->
<div class="cyber-border">
  Content with augmented border
</div>
```

### Buttons

```html
<!-- Primary cyber button -->
<button class="cyber-button">
  Download
</button>
```

### Cards

```html
<!-- Interactive card with hover effect -->
<div class="cyber-card">
  Card content
</div>
```

### Inputs

```html
<!-- Styled input field -->
<input type="text" class="cyber-input" placeholder="Search..." />
```

### Text Styles

```html
<!-- Gold glowing text (for headings) -->
<h1 class="augmented-text">JENSEN</h1>

<!-- Active status (green glow) -->
<span class="status-active">Online</span>

<!-- Info status (blue glow) -->
<span class="status-info">Connected</span>
```

### Animations

```html
<!-- Pulsing glow effect -->
<div class="animate-glow">
  Glowing element
</div>

<!-- Scanning line effect -->
<div class="relative">
  <div class="scan-line absolute w-full h-1 bg-jensen-gold/30"></div>
</div>
```

## 🖼️ Background Effects

```html
<!-- Cyber grid background -->
<div class="bg-cyber-grid bg-grid opacity-20">
  Content over grid
</div>
```

## 📱 Responsive Utilities

Use Tailwind's responsive prefixes:

```html
<!-- Mobile first, then tablet, then desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## 🎯 Common Patterns

### Section Container

```html
<section class="py-20 px-6">
  <div class="container mx-auto max-w-6xl">
    <!-- Content -->
  </div>
</section>
```

### Glowing Status Indicator

```html
<div class="flex items-center space-x-2">
  <span class="w-3 h-3 bg-jensen-gold rounded-full animate-glow"></span>
  <span class="text-jensen-comment">System Online</span>
</div>
```

### Card with Hover

```html
<div class="cyber-card p-6 group">
  <h3 class="text-jensen-gold group-hover:text-jensen-fg transition-colors">
    Card Title
  </h3>
  <p class="text-jensen-comment">Card content</p>
</div>
```

### Tag/Badge

```html
<span class="px-2 py-1 text-xs bg-jensen-panel border border-jensen-comment/30 text-jensen-comment rounded">
  Tag Label
</span>
```

## 🔍 Typography

Font families available:

```css
font-sans  /* Inter - body text */
font-mono  /* JetBrains Mono - code */
```

## 💡 Tips

1. **Always use theme colors** - Don't use arbitrary hex values
2. **Maintain contrast** - Gold on dark, white on dark
3. **Use transitions** - Add `transition-all` or `transition-colors` for smooth effects
4. **Test responsive** - Check mobile, tablet, and desktop layouts
5. **Keep it cyber** - Borders, glows, and sharp angles are your friends

## 🎮 Inspiration

Think like a Deus Ex UI designer:
- **Angular** - Sharp corners, not rounded (except status indicators)
- **Glowing** - Use text-shadow and box-shadow for cyber glow
- **Gold accent** - The star of the show
- **High contrast** - Always readable
- **Subtle animations** - Enhance, don't distract

---

*"With great augmentation comes great responsibility."*

