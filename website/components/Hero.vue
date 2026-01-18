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
            class="inline-block"
          >
            <DeusExButton variant="gold" :glow="true">
              View on GitHub
            </DeusExButton>
          </a>
          <a
            href="#apps"
            class="inline-block"
          >
            <DeusExButton variant="copper">
              Browse Apps
            </DeusExButton>
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

      <!-- Deus Ex Ambient Music -->
      <div class="mt-16 max-w-4xl mx-auto">
        <div class="cyber-border bg-jensen-panel p-4">
          <h3 class="text-center text-jensen-gold font-semibold mb-4 uppercase tracking-wider">
            <span class="text-jensen-comment">◆</span> Cyber Renaissance Ambience <span class="text-jensen-comment">◆</span>
          </h3>
          <div class="relative" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <iframe
              class="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/bdqbW6MXzsI?autoplay=1&mute=0&loop=1&playlist=bdqbW6MXzsI"
              title="Deus Ex: Human Revolution - Jensen's Apartment (1 Hour of Music & Ambience)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p class="text-center text-jensen-comment text-xs mt-3 italic">
            Experience the atmosphere of Jensen's apartment while browsing themes
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DeusExButton from './DeusExButton.vue'

export default {
  name: 'Hero',
  components: {
    DeusExButton
  }
}
</script>

