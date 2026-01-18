<template>
  <button
    :class="['btn-deus-ex', variantClass, { 'btn-deus-ex-glow': glow }]"
    @click="$emit('click')"
  >
    <svg viewBox="0 0 300 50" preserveAspectRatio="none">
      <g>
        <path d="M9,1 A8,8 0 0,0 1,9 L1,25 30,49 292,49 A8,8 0 0,0 299,42 L299,25 270,1z" id="border" />
        <path d="M10,4 A7,7 0 0,0 4,8 L4,24 31,46 290,46 A5,5 0 0,0 296,43 L296,26 269,4z" id="inner-fill" />
      </g>
    </svg>
    <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: 'DeusExButton',
  props: {
    variant: {
      type: String,
      default: 'gold',
      validator: (value) => ['gold', 'copper', 'lime', 'blue', 'red'].includes(value)
    },
    glow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variantClass() {
      const variants = {
        gold: '',
        copper: 'btn-deus-ex-copper',
        lime: 'btn-deus-ex-lime',
        blue: 'btn-deus-ex-blue',
        red: 'btn-deus-ex-red'
      }
      return variants[this.variant] || ''
    }
  },
  emits: ['click']
}
</script>

