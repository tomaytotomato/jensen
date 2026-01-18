# Jensen Theme Website

This is the official website for the Jensen theme collection, built with Vue 3, Vite, and Tailwind CSS.

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see the site in development mode.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

The site uses a custom Tailwind CSS theme that implements the Jensen color palette. All theme colors are defined in `tailwind.config.js`:

- `jensen-bg` - Background (#141514)
- `jensen-fg` - Foreground (#FBFBFB)
- `jensen-comment` - Comment gray (#C4C7C4)
- `jensen-green` - Success green (#A0FF33)
- `jensen-blue` - Info blue (#0EA2C9)
- `jensen-red` - Alert red (#ED333C)
- `jensen-gold` - Signature gold (#EDA622)

Custom CSS classes with the "cyber" aesthetic are available in `website/assets/style.css`.

## 📁 Project Structure

```
/
├── index.html              # Entry HTML file
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config with Jensen theme
├── postcss.config.js       # PostCSS configuration
└── website/
    ├── main.js             # Vue app entry point
    ├── App.vue             # Root component
    ├── assets/
    │   └── style.css       # Global styles and custom classes
    └── components/
        ├── Header.vue      # Site header
        ├── Hero.vue        # Hero section
        ├── ColorPalette.vue # Color showcase
        ├── AppsSection.vue # Apps grid with search
        └── Footer.vue      # Site footer
```

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

The deployment workflow is defined in `.github/workflows/deploy.yml`.

## 📝 License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

