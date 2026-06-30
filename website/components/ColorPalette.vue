<template>
  <section id="colors" class="py-20 px-6 bg-jensen-dark/50">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl font-bold text-center mb-4">
        <span class="augmented-text">COLOR PALETTE</span>
      </h2>
      <p class="text-center text-jensen-comment mb-12">
        The eleven canonical hues of the Cyber Renaissance. Click any swatch or hex to copy.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="color in colors"
          :key="color.name"
          class="cyber-card p-6 relative"
        >
          <button
            type="button"
            class="w-full h-24 mb-4 rounded border border-jensen-comment/30 cursor-pointer transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-jensen-yellow"
            :style="{ backgroundColor: color.hex }"
            :aria-label="`Copy ${color.hex}`"
            @click="copy(color.hex)"
          ></button>
          <h3 class="text-lg font-bold mb-2" :style="{ color: color.swatchTextColor || color.hex }">
            {{ color.name }}
          </h3>
          <div class="space-y-1 text-sm font-mono">
            <p class="text-jensen-comment">
              HEX:
              <button
                type="button"
                class="text-jensen-fg hover:text-jensen-yellow focus:text-jensen-yellow focus:outline-none transition-colors"
                :aria-label="`Copy ${color.hex}`"
                @click="copy(color.hex)"
              >{{ color.hex }}</button>
            </p>
            <p class="text-jensen-comment">RGB: <span class="text-jensen-fg">{{ color.rgb }}</span></p>
            <p class="text-jensen-comment">HSL: <span class="text-jensen-fg">{{ color.hsl }}</span></p>
          </div>
          <p class="text-xs text-jensen-comment mt-3 italic">{{ color.purpose }}</p>

          <transition name="fade">
            <span
              v-if="copied === color.hex"
              class="absolute top-3 right-3 text-xs font-mono px-2 py-1 rounded bg-jensen-bg/90 text-jensen-yellow border border-jensen-yellow/60"
            >Copied!</span>
          </transition>
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
      copied: null,
      copyTimer: null,
      colors: [
        {
          name: 'Eerie Black',
          hex: '#141514',
          rgb: '20 21 20',
          hsl: '120° 2% 8%',
          purpose: 'Deep carbon background',
          swatchTextColor: '#FBFBFB'
        },
        {
          name: 'White',
          hex: '#FBFBFB',
          rgb: '251 251 251',
          hsl: '0° 0% 98%',
          purpose: 'Primary foreground text'
        },
        {
          name: 'Silver Sand',
          hex: '#C4C7C4',
          rgb: '196 199 196',
          hsl: '120° 3% 77%',
          purpose: 'Muted comments & secondary text'
        },
        {
          name: 'Marigold',
          hex: '#EDA622',
          rgb: '237 166 34',
          hsl: '39° 85% 53%',
          purpose: 'Signature gold. Primary accent'
        },
        {
          name: 'Electronic Copper',
          hex: '#E55D02',
          rgb: '229 93 2',
          hsl: '24° 98% 45%',
          purpose: 'Burnished copper. Secondary accent'
        },
        {
          name: 'Dutch White',
          hex: '#F2E2BA',
          rgb: '242 226 186',
          hsl: '42° 71% 84%',
          purpose: 'Soft gold highlight'
        },
        {
          name: 'Dark Goldenrod',
          hex: '#BB831B',
          rgb: '187 131 27',
          hsl: '40° 75% 42%',
          purpose: 'Mid-tone gold'
        },
        {
          name: 'Café Noir',
          hex: '#503A1D',
          rgb: '80 58 29',
          hsl: '34° 47% 21%',
          purpose: 'Deep gold shadow'
        },
        {
          name: 'French Lime',
          hex: '#A0FF33',
          rgb: '160 255 51',
          hsl: '88° 100% 60%',
          purpose: 'Success / safe state'
        },
        {
          name: 'Pacific Blue',
          hex: '#0EA2C9',
          rgb: '14 162 201',
          hsl: '193° 87% 42%',
          purpose: 'Information / link'
        },
        {
          name: 'Imperial Red',
          hex: '#ED333C',
          rgb: '237 51 60',
          hsl: '357° 84% 56%',
          purpose: 'Critical alert / danger'
        }
      ]
    }
  },
  methods: {
    async copy(value) {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(value)
        } else {
          const ta = document.createElement('textarea')
          ta.value = value
          ta.style.position = 'fixed'
          ta.style.opacity = '0'
          document.body.appendChild(ta)
          ta.select()
          document.execCommand('copy')
          document.body.removeChild(ta)
        }
        this.copied = value
        clearTimeout(this.copyTimer)
        this.copyTimer = setTimeout(() => { this.copied = null }, 1200)
      } catch (e) {
        console.error('Clipboard copy failed', e)
      }
    }
  },
  beforeUnmount() {
    clearTimeout(this.copyTimer)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
