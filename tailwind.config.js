/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./website/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jensen-bg': '#141514',
        'jensen-fg': '#FBFBFB',
        'jensen-comment': '#C4C7C4',
        'jensen-green': '#A0FF33',
        'jensen-blue': '#0EA2C9',
        'jensen-red': '#ED333C',
        'jensen-gold': '#EDA622',
        'jensen-copper': '#E55D02',
        'jensen-dutch-white': '#F2E2BA',
        'jensen-cafe-noir': '#503A1D',
        'jensen-dark-goldenrod': '#BB831B',
        'jensen-dark': '#0A0B0A',
        'jensen-panel': '#1A1B1A',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Monaco', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'eurostile': ['Eurostile', 'EuroStyle', 'Arial Narrow', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(rgba(237, 166, 34, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(237, 166, 34, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}

