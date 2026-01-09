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
          purpose: 'Cyber lime (success/safe)'
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
          hex: '#F25244',
          rgb: '242 82 68',
          hsl: '5° 87% 61%',
          purpose: 'Alert red (danger/warning)'
        },
        {
          name: 'Yellow',
          hex: '#EDA622',
          rgb: '237 166 34',
          hsl: '39° 85% 53%',
          purpose: 'Signature gold (highlight)'
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

