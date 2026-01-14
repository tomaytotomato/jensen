<template>
  <section id="components" class="py-20 px-6 bg-jensen-dark/30">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="augmented-text">AUGMENTED</span> Components
        </h2>
        <p class="text-xl text-jensen-comment max-w-2xl mx-auto">
          UI components styled with the Jensen theme aesthetic
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Alert Components -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-jensen-gold mb-4">System Alerts</h3>

          <!-- Success Alert -->
          <div class="cyber-border bg-jensen-panel p-4">
            <div class="flex items-start space-x-3">
              <span class="status-active text-2xl">✓</span>
              <div>
                <h4 class="font-semibold status-active">Augmentation Complete</h4>
                <p class="text-jensen-comment text-sm mt-1">
                  All systems operational. Neural enhancement active.
                </p>
              </div>
            </div>
          </div>

          <!-- Info Alert -->
          <div class="cyber-border bg-jensen-panel p-4">
            <div class="flex items-start space-x-3">
              <span class="status-info text-2xl">ℹ</span>
              <div>
                <h4 class="font-semibold status-info">System Update Available</h4>
                <p class="text-jensen-comment text-sm mt-1">
                  New firmware detected. Install to enhance capabilities.
                </p>
              </div>
            </div>
          </div>

          <!-- Warning Alert -->
          <div class="cyber-border bg-jensen-panel p-4" style="border-color: #ED333C; box-shadow: 0 0 10px rgba(237, 51, 60, 0.3);">
            <div class="flex items-start space-x-3">
              <span class="text-jensen-red text-2xl">⚠</span>
              <div>
                <h4 class="font-semibold text-jensen-red">Security Breach Detected</h4>
                <p class="text-jensen-comment text-sm mt-1">
                  Unauthorized access attempt. Initiating countermeasures.
                </p>
              </div>
            </div>
          </div>

          <!-- Quote Block -->
          <div class="cyber-border bg-jensen-panel p-6 mt-6">
            <blockquote class="text-jensen-comment italic">
              <span class="text-jensen-gold text-3xl leading-none">"</span>
              <p class="inline">It's not the end of the world, but you can see it from here.</p>
              <span class="text-jensen-gold text-3xl leading-none">"</span>
            </blockquote>
            <cite class="block text-right text-sm text-jensen-comment/70 mt-2">— David Sarif</cite>
          </div>
        </div>

        <!-- Interactive Components -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-jensen-gold mb-4">Interactive Elements</h3>

          <!-- Button Group -->
          <div class="cyber-border bg-jensen-panel p-6">
            <h4 class="font-semibold text-jensen-fg mb-4">Action Buttons</h4>
            <div class="space-y-3">
              <button class="cyber-button w-full">
                <span>Primary Action</span>
              </button>
              <button class="cyber-button w-full" style="border-color: #E55D02; color: #E55D02;">
                <span>Secondary Action</span>
              </button>
              <button class="cyber-button w-full" style="border-color: #A0FF33; color: #A0FF33;">
                <span>Confirm Action</span>
              </button>
            </div>
          </div>

          <!-- Input Field -->
          <div class="cyber-border bg-jensen-panel p-6">
            <h4 class="font-semibold text-jensen-fg mb-4">Data Input</h4>
            <input
              type="text"
              class="cyber-input w-full"
              placeholder="Enter security credentials..."
            />
            <p class="text-jensen-comment text-xs mt-2">
              <span class="text-jensen-gold">●</span> Encrypted connection active
            </p>
          </div>

          <!-- Status Panel -->
          <div class="cyber-border bg-jensen-panel p-6">
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
          </div>

          <!-- Quote Block -->
          <div class="cyber-border bg-jensen-panel p-6">
            <blockquote class="text-jensen-comment italic">
              <span class="text-jensen-gold text-3xl leading-none">"</span>
              <p class="inline">Everybody lies. No exceptions.</p>
              <span class="text-jensen-gold text-3xl leading-none">"</span>
            </blockquote>
            <cite class="block text-right text-sm text-jensen-comment/70 mt-2">— Adam Jensen</cite>
          </div>
        </div>
      </div>

      <!-- Additional Quotes Section -->
      <div class="mt-16 grid md:grid-cols-3 gap-6">
        <div class="cyber-border bg-jensen-panel p-6">
          <blockquote class="text-jensen-comment text-sm italic">
            <p>"I never had a choice in what happened to me."</p>
          </blockquote>
        </div>
        <div class="cyber-border bg-jensen-panel p-6">
          <blockquote class="text-jensen-comment text-sm italic">
            <p>"The future is already here, it's just not evenly distributed."</p>
          </blockquote>
        </div>
        <div class="cyber-border bg-jensen-panel p-6">
          <blockquote class="text-jensen-comment text-sm italic">
            <p>"Sometimes you have to take a leap of faith."</p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsShowcase'
}
</script>

<style scoped>
.text-jensen-red {
  color: #ED333C;
  text-shadow: 0 0 8px rgba(237, 51, 60, 0.5);
}

.text-jensen-copper {
  color: #E55D02;
  text-shadow: 0 0 8px rgba(229, 93, 2, 0.5);
}
</style>

