<template>
  <section id="about" class="py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <div class="inline-block mb-6 p-8 cyber-border bg-jensen-panel">
          <img src="/jensen_large.png" alt="Jensen Theme" class="max-w-md w-full h-auto mx-auto" />
        </div>

        <h2 class="text-5xl md:text-6xl font-bold mb-6">
          <span class="augmented-text">AUGMENT</span> Your Development Environment
        </h2>

        <p class="text-xl text-jensen-comment max-w-3xl mx-auto mb-8">
          Jensen is a theme collection inspired by the iconic aesthetics of
          <span class="text-jensen-gold">Deus Ex: Human Revolution</span>.
          Bring the Cyber Renaissance to your machine with signature gold and copper tones
          against dark, refined backgrounds.
        </p>

        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://github.com/tomaytotomato/jensen"
            target="_blank"
            class="cyber-button"
          >
            <span>View on GitHub</span>
          </a>
          <a
            href="#apps"
            class="cyber-button"
          >
            <span>Browse Apps</span>
          </a>
        </div>

        <div class="flex flex-wrap justify-center gap-8 text-sm">
          <div class="flex items-center space-x-2">
            <span class="w-3 h-3 bg-jensen-green rounded-full animate-glow"></span>
            <span class="text-jensen-comment">MIT Licensed</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="w-3 h-3 bg-jensen-blue rounded-full animate-glow"></span>
            <span class="text-jensen-comment">Open Source</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="w-3 h-3 bg-jensen-gold rounded-full animate-glow"></span>
            <span class="text-jensen-comment">Multiple Platforms</span>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <blockquote class="text-2xl italic text-jensen-comment">
          <span class="text-jensen-gold">"</span>I never asked for this...<span class="text-jensen-gold">"</span>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

