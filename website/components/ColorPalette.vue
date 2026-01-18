<template>
  <section id="colors" class="py-20 px-6 bg-jensen-dark/50">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl font-bold text-center mb-4">
        <span class="augmented-text">COLOR PALETTE</span>
      </h2>
      <p class="text-center text-jensen-comment mb-12">Official Jensen theme colors</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="color in colors"
          :key="color.name"
          class="cyber-card p-6"
        >
          <div
            class="w-full h-24 mb-4 rounded border border-jensen-comment/30"
            :style="{ backgroundColor: color.hex }"
          ></div>
          <h3 class="text-lg font-bold mb-2" :style="{ color: color.hex }">{{ color.name }}</h3>
          <div class="space-y-1 text-sm font-mono">
            <p class="text-jensen-comment">HEX: <span class="text-jensen-fg">{{ color.hex }}</span></p>
            <p class="text-jensen-comment">RGB: <span class="text-jensen-fg">{{ color.rgb }}</span></p>
            <p class="text-jensen-comment">HSL: <span class="text-jensen-fg">{{ color.hsl }}</span></p>
          </div>
          <p class="text-xs text-jensen-comment mt-3 italic">{{ color.purpose }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ColorPalette',
  data() {
    return {
      colors: [
        {
          name: 'Background',
          hex: '#141514',
          rgb: '20 21 20',
          hsl: '120° 2% 8%',
          purpose: 'Deep carbon black'
        },
        {
          name: 'Foreground',
          hex: '#FBFBFB',
          rgb: '251 251 251',
          hsl: '0° 0% 98%',
          purpose: 'Bright white text'
        },
        {
          name: 'Comment',
          hex: '#C4C7C4',
          rgb: '196 199 196',
          hsl: '120° 3% 77%',
          purpose: 'Muted gray for comments'
        },
        {
          name: 'Green',
          hex: '#A0FF33',
          rgb: '160 255 51',
          hsl: '88° 100% 60%',
          purpose: 'French lime (success/safe)'
        },
        {
          name: 'Blue',
          hex: '#0EA2C9',
          rgb: '14 162 201',
          hsl: '193° 87% 42%',
          purpose: 'Electric blue (info)'
        },
        {
          name: 'Red',
          hex: '#ED333C',
          rgb: '237 51 60',
          hsl: '357° 84% 56%',
          purpose: 'Imperial red (danger/warning)'
        },
        {
          name: 'Yellow',
          hex: '#EDA622',
          rgb: '237 166 34',
          hsl: '39° 85% 53%',
          purpose: 'Signature gold (highlight)'
        },
        {
          name: 'Copper',
          hex: '#E55D02',
          rgb: '229 93 2',
          hsl: '24° 98% 45%',
          purpose: 'Electronic copper (secondary accent)'
        },
        {
          name: 'Dutch White',
          hex: '#F2E2BA',
          rgb: '242 226 186',
          hsl: '43° 68% 84%',
          purpose: 'Light gold tone (subtle highlights)'
        },
        {
          name: 'Café Noir',
          hex: '#503A1D',
          rgb: '80 58 29',
          hsl: '34° 47% 21%',
          purpose: 'Dark gold shadows (depth layers)'
        },
        {
          name: 'Dark Goldenrod',
          hex: '#BB831B',
          rgb: '187 131 27',
          hsl: '39° 75% 42%',
          purpose: 'Medium gold (secondary highlights)'
        },
        {
          name: 'Panel',
          hex: '#1A1B1A',
          rgb: '26 27 26',
          hsl: '120° 2% 10%',
          purpose: 'Elevated surface'
        }
      ]
    }
  }
}
</script>

