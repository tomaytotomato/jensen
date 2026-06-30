<template>
  <component :is="as" :class="['deus-ex-frame', `deus-ex-frame--${variant}`, { 'deus-ex-frame--glow': glow, 'deus-ex-frame--image': image }]" ref="root">
    <svg
      class="deus-ex-frame__svg"
      :viewBox="`0 0 ${Math.max(width, 1)} ${Math.max(height, 1)}`"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath :id="clipId" clipPathUnits="userSpaceOnUse">
          <path :d="innerPath" />
        </clipPath>
      </defs>
      <path :d="innerPath" class="deus-ex-frame__fill" />
      <path :d="borderPath" class="deus-ex-frame__border" />
    </svg>
    <div class="deus-ex-frame__content" :style="{ '--deus-ex-clip': `url(#${clipId})` }">
      <slot />
    </div>
  </component>
</template>

<script>
let uidCounter = 0

export default {
  name: 'DeusExFrame',
  props: {
    as: { type: String, default: 'div' },
    variant: {
      type: String,
      default: 'gold',
      validator: v => ['gold', 'copper', 'lime', 'blue', 'red'].includes(v)
    },
    glow: { type: Boolean, default: false },
    image: { type: Boolean, default: false },
    // Geometry (in CSS pixels)
    cornerRadius: { type: Number, default: 8 },
    chamferX: { type: Number, default: 30 },
    chamferY: { type: Number, default: 24 },
    borderWidth: { type: Number, default: 2 },
    fillInset: { type: Number, default: 3 }
  },
  data() {
    return {
      width: 0,
      height: 0,
      clipId: `deus-ex-clip-${++uidCounter}`
    }
  },
  computed: {
    borderPath() {
      // Outer path traced inside by half the stroke so the stroke renders flush.
      const o = this.borderWidth / 2
      const r = this.cornerRadius
      const cx = this.chamferX
      const cy = this.chamferY
      const W = Math.max(this.width, cx + r + o + 1)
      const H = Math.max(this.height, cy + r + o + 1)
      return [
        `M${r + o},${o}`,
        `A${r},${r} 0 0,0 ${o},${r + o}`,
        `L${o},${H - cy} ${cx + o},${H - o} ${W - r - o},${H - o}`,
        `A${r},${r} 0 0,0 ${W - o},${H - r - o}`,
        `L${W - o},${cy} ${W - cx - o},${o} Z`
      ].join(' ')
    },
    innerPath() {
      // Same geometry inset by fillInset so a thin rim of the border colour
      // shows between fill and stroke.
      const i = this.fillInset
      const r = Math.max(this.cornerRadius - i, 1)
      const cx = Math.max(this.chamferX - i, 1)
      const cy = Math.max(this.chamferY - i, 1)
      const W = Math.max(this.width - i, cx + r + 2)
      const H = Math.max(this.height - i, cy + r + 2)
      return [
        `M${r + i},${i}`,
        `A${r},${r} 0 0,0 ${i},${r + i}`,
        `L${i},${H - cy + i} ${cx + i},${H} ${W - r},${H}`,
        `A${r},${r} 0 0,0 ${W},${H - r}`,
        `L${W},${cy + i} ${W - cx},${i} Z`
      ].join(' ')
    }
  },
  mounted() {
    // Initial synchronous measure so the SVG renders at the correct size on
    // first paint (ResizeObserver fires asynchronously).
    const rect = this.$refs.root.getBoundingClientRect()
    this.width = Math.round(rect.width)
    this.height = Math.round(rect.height)
    this.observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        this.width = Math.round(entry.contentRect.width)
        this.height = Math.round(entry.contentRect.height)
      }
    })
    this.observer.observe(this.$refs.root)
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
  }
}
</script>
