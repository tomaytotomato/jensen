<template>
  <footer class="border-t border-jensen-gold/30 py-12 px-6 mt-20">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- About -->
        <div>
          <h3 class="text-lg font-bold text-jensen-gold mb-4">About Jensen</h3>
          <p class="text-sm text-jensen-comment">
            A theme collection inspired by the iconic aesthetics of Deus Ex: Human Revolution.
            Created by <span class="text-jensen-gold">tomaytotomato</span>.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-lg font-bold text-jensen-gold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="https://github.com/tomaytotomato/jensen" target="_blank" class="text-jensen-comment hover:text-jensen-gold transition-colors">
                GitHub Repository
              </a>
            </li>
            <li>
              <a href="https://github.com/tomaytotomato/jensen/issues" target="_blank" class="text-jensen-comment hover:text-jensen-gold transition-colors">
                Report Issues
              </a>
            </li>
            <li>
              <a href="https://github.com/tomaytotomato/jensen/blob/main/LICENSE" target="_blank" class="text-jensen-comment hover:text-jensen-gold transition-colors">
                MIT License
              </a>
            </li>
            <li>
              <a href="https://themer.dev/?colors.dark.shade0=%23141514&colors.dark.shade7=%23FBFBFB&colors.dark.accent0=%23F25244&colors.dark.accent3=%23f48d4f&colors.dark.accent4=%23EDA622&colors.dark.accent1=%23A0FF33&colors.dark.accent2=%230EA2C9&colors.dark.accent5=%23C4C7C4&colors.dark.accent7=%23E8B456&colors.dark.accent6=%23EDA622&activeColorSet=dark" target="_blank" class="text-jensen-comment hover:text-jensen-gold transition-colors">
                Play on Themer.dev
              </a>
            </li>
          </ul>
        </div>

        <!-- Credits -->
        <div>
          <h3 class="text-lg font-bold text-jensen-gold mb-4">Credits</h3>
          <ul class="space-y-2 text-sm text-jensen-comment">
            <li>Deus Ex: Human Revolution by <span class="text-jensen-fg">Eidos Montreal</span></li>
            <li>UI Design by <span class="text-jensen-fg">Eric Bellefeuille</span></li>
            <li>Inspired by <span class="text-jensen-fg">Dracula Theme</span></li>
            <li>Built with <span class="text-jensen-fg">Themer.dev</span></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-jensen-comment/30 pt-8 text-center">
        <p class="text-sm text-jensen-comment mb-4">
          &copy; {{ currentYear }} Jensen Theme. Released under the MIT License.
        </p>
        <p class="text-jensen-comment italic">
          <span class="text-jensen-gold">"</span>I never asked for this...<span class="text-jensen-gold">"</span>
        </p>
        <div class="mt-6 flex justify-center items-center space-x-4">
          <div class="w-3 h-3 bg-jensen-gold rounded-full animate-glow"></div>
          <span class="text-xs text-jensen-comment uppercase tracking-wider">System Online</span>
          <div class="w-3 h-3 bg-jensen-green rounded-full animate-glow"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

