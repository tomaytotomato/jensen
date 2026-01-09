<template>
  <header class="border-b border-jensen-gold/30 backdrop-blur-sm sticky top-0 z-50 bg-jensen-bg/80">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-jensen-gold/10 border border-jensen-gold flex items-center justify-center">
            <span class="text-jensen-gold text-2xl font-bold">J</span>
          </div>
          <div>
            <h1 class="text-2xl font-bold augmented-text">JENSEN</h1>
            <p class="text-xs text-jensen-comment uppercase tracking-wider">Cyber Renaissance Theme</p>
          </div>
        </div>

        <nav class="hidden md:flex space-x-8">
          <a href="#about" class="text-jensen-comment hover:text-jensen-gold transition-colors">About</a>
          <a href="#colors" class="text-jensen-comment hover:text-jensen-gold transition-colors">Colors</a>
          <a href="#apps" class="text-jensen-comment hover:text-jensen-gold transition-colors">Apps</a>
          <a href="https://github.com/tomaytotomato/jensen" target="_blank" class="text-jensen-comment hover:text-jensen-gold transition-colors">GitHub</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

