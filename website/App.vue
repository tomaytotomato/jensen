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

      <!-- Code Editor Showcase -->
      <CodeShowcase />

      <!-- Terminal Showcase -->
      <TerminalShowcase />

      <!-- Color Palette Section -->
      <ColorPalette />

      <!-- Components Showcase -->
      <ComponentsShowcase />

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
import CodeShowcase from './components/CodeShowcase.vue'
import TerminalShowcase from './components/TerminalShowcase.vue'
import ColorPalette from './components/ColorPalette.vue'
import ComponentsShowcase from './components/ComponentsShowcase.vue'
import AppsSection from './components/AppsSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    CodeShowcase,
    TerminalShowcase,
    ColorPalette,
    ComponentsShowcase,
    AppsSection,
    Footer
  }
}
</script>

