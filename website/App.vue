<template>
  <div class="min-h-screen bg-jensen-bg">
    <!-- Cyber Grid Background -->
    <div class="fixed inset-0 bg-cyber-grid bg-grid opacity-20 pointer-events-none"></div>

    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Header -->
      <Header />

      <!-- Hero Section -->
      <Hero />

      <!-- Color Palette Section -->
      <ColorPalette />

      <!-- Apps Section -->
      <AppsSection />

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ColorPalette from './components/ColorPalette.vue'
import AppsSection from './components/AppsSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    ColorPalette,
    AppsSection,
    Footer
  }
}
</script>

