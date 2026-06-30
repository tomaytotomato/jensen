<template>
  <section id="components" class="py-20 px-6 bg-jensen-dark/30">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="augmented-text">UI</span> Components
        </h2>
        <p class="text-xl text-jensen-comment max-w-2xl mx-auto">
          A preview of the Jensen aesthetic applied to common interface elements.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Alert Components -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-jensen-gold mb-4">System Alerts</h3>

          <!-- Success Alert -->
          <DeusExFrame variant="lime" class="p-4">
            <div class="flex items-start space-x-3">
              <span class="status-active text-2xl">✓</span>
              <div>
                <h4 class="font-semibold status-active">Augmentation Complete</h4>
                <p class="text-jensen-comment text-sm mt-1">
                  All systems operational. Neural enhancement active.
                </p>
              </div>
            </div>
          </DeusExFrame>

          <!-- Info Alert -->
          <DeusExFrame variant="blue" class="p-4">
            <div class="flex items-start space-x-3">
              <span class="status-info text-2xl">ℹ</span>
              <div>
                <h4 class="font-semibold status-info">System Update Available</h4>
                <p class="text-jensen-comment text-sm mt-1">
                  New firmware detected. Install to enhance capabilities.
                </p>
              </div>
            </div>
          </DeusExFrame>

          <!-- Warning Alert -->
          <DeusExFrame variant="red" class="p-4">
            <div class="flex items-start space-x-3">
              <span class="text-jensen-red text-2xl">⚠</span>
              <div>
                <h4 class="font-semibold text-jensen-red">Security Breach Detected</h4>
                <p class="text-jensen-comment text-sm mt-1">
                  Unauthorized access attempt. Initiating countermeasures.
                </p>
              </div>
            </div>
          </DeusExFrame>

          <!-- Quote Block -->
          <DeusExFrame variant="gold" class="p-6 mt-6">
            <blockquote class="text-jensen-comment italic">
              <span class="text-jensen-gold text-3xl leading-none">“</span>
              <p class="inline">It's not the end of the world, but you can see it from here.</p>
              <span class="text-jensen-gold text-3xl leading-none">”</span>
            </blockquote>
            <cite class="block text-right text-sm text-jensen-comment/70 mt-2">David Sarif</cite>
          </DeusExFrame>
        </div>

        <!-- Interactive Components -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-jensen-gold mb-4">Interactive Elements</h3>

          <!-- Button Group -->
          <DeusExFrame variant="gold" class="p-6">
            <h4 class="font-semibold text-jensen-fg mb-4">Action Buttons</h4>

            <p class="text-xs uppercase tracking-wider text-jensen-comment mb-3">Standard</p>
            <div class="flex flex-wrap gap-3 mb-6">
              <DeusExButton variant="gold"><span>Primary Action</span></DeusExButton>
              <DeusExButton variant="copper"><span>Secondary Action</span></DeusExButton>
              <DeusExButton variant="lime"><span>Confirm Action</span></DeusExButton>
              <DeusExButton variant="red"><span>Abort Sequence</span></DeusExButton>
            </div>

            <p class="text-xs uppercase tracking-wider text-jensen-comment mb-3">Glow</p>
            <div class="flex flex-wrap gap-3">
              <DeusExButton variant="gold" :glow="true"><span>Engage Augmentation</span></DeusExButton>
              <DeusExButton variant="blue"><span>Network Scan</span></DeusExButton>
            </div>
          </DeusExFrame>

          <!-- Input Field -->
          <DeusExFrame variant="gold" class="p-6">
            <h4 class="font-semibold text-jensen-fg mb-4">Data Input</h4>
            <input
              type="text"
              class="cyber-input w-full"
              placeholder="Enter security credentials..."
            />
            <p class="text-jensen-comment text-xs mt-2">
              <span class="text-jensen-gold">●</span> Encrypted connection active
            </p>
          </DeusExFrame>

          <!-- Status Panel -->
          <DeusExFrame variant="gold" class="p-6">
            <h4 class="font-semibold text-jensen-fg mb-4">System Status</h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-jensen-comment">Neural Interface</span>
                <span class="status-active">ONLINE</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-jensen-comment">Biometric Sensors</span>
                <span class="status-active">ACTIVE</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-jensen-comment">Power Level</span>
                <span class="text-jensen-gold">87%</span>
              </div>
            </div>
          </DeusExFrame>

          <!-- Quote Block -->
          <DeusExFrame variant="gold" class="p-6">
            <blockquote class="text-jensen-comment italic">
              <span class="text-jensen-gold text-3xl leading-none">“</span>
              <p class="inline">Everybody lies. No exceptions.</p>
              <span class="text-jensen-gold text-3xl leading-none">”</span>
            </blockquote>
            <cite class="block text-right text-sm text-jensen-comment/70 mt-2">Adam Jensen</cite>
          </DeusExFrame>
        </div>
      </div>

      <!-- Image Showcase -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-jensen-gold mb-4 text-center">Field Surveillance</h3>
        <figure class="max-w-4xl mx-auto">
          <DeusExFrame variant="gold" :image="true" as="div">
            <img
              :src="`${base}images/sarif-office.webp`"
              alt="David Sarif's office in Deus Ex: Human Revolution"
              loading="lazy"
            />
          </DeusExFrame>
          <figcaption class="text-center text-xs text-jensen-comment mt-3 italic">
            Sarif Industries CEO suite. Image courtesy of the Deus Ex Wiki (Fandom).
          </figcaption>
        </figure>
      </div>

      <!-- Linear Elements: rectangular HUD components for variety. -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-jensen-gold mb-2 text-center">Linear Readouts</h3>
        <p class="text-jensen-comment text-center mb-8 max-w-2xl mx-auto">
          Progress bars, diagnostic readouts, and corner-bracketed panels.
          The same vocabulary without the angled cuts.
        </p>

        <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <!-- Augmentation Power Bars -->
          <div class="cyber-border bg-jensen-panel p-6">
            <h4 class="font-semibold text-jensen-fg mb-1">Augmentation Power</h4>
            <p class="text-xs text-jensen-comment uppercase tracking-wider mb-5">Sarif Industries · Series-3 Implants</p>

            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-xs text-jensen-comment mb-1">
                  <span class="uppercase tracking-wider">Energy Cell</span>
                  <span class="text-jensen-gold">87%</span>
                </div>
                <div class="hud-bar" aria-label="Energy 87%">
                  <div class="hud-bar__cell" v-for="i in 9" :key="`e-${i}`"></div>
                  <div class="hud-bar__cell hud-bar__cell--empty"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs text-jensen-comment mb-1">
                  <span class="uppercase tracking-wider">Cybernetic Arm</span>
                  <span class="status-active">ONLINE</span>
                </div>
                <div class="hud-bar hud-bar--lime" aria-label="Arm fully online">
                  <div class="hud-bar__cell" v-for="i in 10" :key="`a-${i}`"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs text-jensen-comment mb-1">
                  <span class="uppercase tracking-wider">Network Uplink</span>
                  <span class="status-info">SECURE</span>
                </div>
                <div class="hud-bar hud-bar--blue" aria-label="Uplink 60%">
                  <div class="hud-bar__cell" v-for="i in 6" :key="`u-${i}`"></div>
                  <div class="hud-bar__cell hud-bar__cell--empty" v-for="i in 4" :key="`u-e-${i}`"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs text-jensen-comment mb-1">
                  <span class="uppercase tracking-wider">Threat Level</span>
                  <span class="text-jensen-red">CRITICAL</span>
                </div>
                <div class="hud-bar hud-bar--red" aria-label="Threat critical">
                  <div class="hud-bar__cell" v-for="i in 8" :key="`t-${i}`"></div>
                  <div class="hud-bar__cell hud-bar__cell--empty" v-for="i in 2" :key="`t-e-${i}`"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Diagnostics Grid -->
          <div class="cyber-border bg-jensen-panel p-6">
            <h4 class="font-semibold text-jensen-fg mb-1">Biometric Diagnostics</h4>
            <p class="text-xs text-jensen-comment uppercase tracking-wider mb-5">Real-time telemetry</p>

            <div class="grid grid-cols-2 gap-x-4 gap-y-4">
              <div class="hud-stat">
                <span class="hud-stat__label">Heart Rate</span>
                <span class="hud-stat__value">72 <span class="text-jensen-comment text-sm">bpm</span></span>
              </div>
              <div class="hud-stat">
                <span class="hud-stat__label">Core Temp</span>
                <span class="hud-stat__value">36.8 <span class="text-jensen-comment text-sm">°C</span></span>
              </div>
              <div class="hud-stat">
                <span class="hud-stat__label">Adrenaline</span>
                <span class="hud-stat__value">NOMINAL</span>
              </div>
              <div class="hud-stat">
                <span class="hud-stat__label">Optic Implant</span>
                <span class="hud-stat__value">ACTIVE</span>
              </div>
              <div class="hud-stat">
                <span class="hud-stat__label">Reflex Boost</span>
                <span class="hud-stat__value">READY</span>
              </div>
              <div class="hud-stat">
                <span class="hud-stat__label">Cloak Charge</span>
                <span class="hud-stat__value">62%</span>
              </div>
            </div>

            <div class="mt-5 pt-4 border-t border-jensen-gold/20 flex justify-between items-center text-xs">
              <span class="text-jensen-comment uppercase tracking-wider">Last sync</span>
              <span class="text-jensen-gold font-mono">2027.05.28 · 14:22:08</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DeusExButton from './DeusExButton.vue'
import DeusExFrame from './DeusExFrame.vue'

export default {
  name: 'ComponentsShowcase',
  components: {
    DeusExButton,
    DeusExFrame
  },
  computed: {
    base() {
      return import.meta.env.BASE_URL
    }
  },
  methods: {
    handleAction() {
      console.log('Button clicked - Augmentation activated')
    }
  }
}
</script>

<style scoped>
.text-jensen-red {
  color: #ED333C;
  text-shadow: 0 0 8px rgba(237, 51, 60, 0.5);
}
</style>

