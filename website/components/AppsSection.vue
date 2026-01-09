<template>
  <section id="apps" class="py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl font-bold text-center mb-4">
        <span class="augmented-text">AVAILABLE PLATFORMS</span>
      </h2>
      <p class="text-center text-jensen-comment mb-8">Jensen theme is available for multiple applications</p>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for an application..."
            class="cyber-input w-full pl-12"
          />
          <svg
            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-jensen-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <div v-if="searchQuery" class="mt-4 text-center text-jensen-comment">
          Found {{ filteredApps.length }} {{ filteredApps.length === 1 ? 'app' : 'apps' }}
        </div>
      </div>

      <!-- Apps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="app in filteredApps"
          :key="app.name"
          class="cyber-card group"
        >
          <div class="relative overflow-hidden bg-jensen-dark h-48">
            <img
              v-if="app.image"
              :src="app.image"
              :alt="app.name"
              class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <span class="text-6xl text-jensen-gold/20">{{ app.icon }}</span>
            </div>
            <div
              class="absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wider"
              :class="app.status === 'available' ? 'bg-jensen-green/20 text-jensen-green border border-jensen-green' : 'bg-jensen-comment/20 text-jensen-comment border border-jensen-comment'"
            >
              {{ app.status }}
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-jensen-gold">{{ app.name }}</h3>
            <p class="text-jensen-comment text-sm mb-4">{{ app.description }}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in app.tags"
                :key="tag"
                class="px-2 py-1 text-xs bg-jensen-panel border border-jensen-comment/30 text-jensen-comment rounded"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex gap-2">
              <a
                v-if="app.link && app.status === 'available'"
                :href="app.link"
                class="flex-1 px-4 py-2 text-center bg-transparent border border-jensen-gold text-jensen-gold text-sm font-semibold hover:bg-jensen-gold hover:text-jensen-bg transition-all"
              >
                Download
              </a>
              <a
                v-if="app.docs"
                :href="app.docs"
                class="flex-1 px-4 py-2 text-center bg-transparent border border-jensen-blue text-jensen-blue text-sm font-semibold hover:bg-jensen-blue hover:text-jensen-bg transition-all"
              >
                Docs
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredApps.length === 0" class="text-center py-12">
        <p class="text-jensen-comment text-lg">No applications found matching "{{ searchQuery }}"</p>
        <button
          @click="searchQuery = ''"
          class="mt-4 cyber-button"
        >
          Clear Search
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppsSection',
  data() {
    return {
      searchQuery: '',
      apps: [
        {
          name: 'IntelliJ IDEA',
          description: 'Full-featured theme for JetBrains IDEs including IntelliJ IDEA, WebStorm, PyCharm, and more.',
          status: 'available',
          link: 'https://github.com/tomaytotomato/jensen/tree/main/intellij',
          docs: './intellij',
          image: '/intellij-screenshot.png',
          icon: '💡',
          tags: ['IDE', 'Java', 'Kotlin', 'JetBrains']
        },
        {
          name: 'iTerm2',
          description: 'Cyber Renaissance color scheme for the popular macOS terminal emulator.',
          status: 'available',
          link: 'https://github.com/tomaytotomato/jensen/tree/main/iTerm',
          docs: './iTerm',
          icon: '🖥️',
          tags: ['Terminal', 'macOS', 'Shell']
        },
        {
          name: 'Terminal.app',
          description: 'Native macOS Terminal theme with Jensen color palette.',
          status: 'available',
          link: 'https://github.com/tomaytotomato/jensen/tree/main/terminal',
          docs: './terminal',
          icon: '⌨️',
          tags: ['Terminal', 'macOS', 'Native']
        },
        {
          name: 'Firefox',
          description: 'Browser theme bringing the augmented aesthetic to your web browsing experience.',
          status: 'available',
          link: 'https://github.com/tomaytotomato/jensen/tree/main/firefox',
          docs: './firefox',
          image: '/firefox-screenshot.png',
          icon: '🦊',
          tags: ['Browser', 'Firefox', 'Web']
        },
        {
          name: 'CSS Theme',
          description: 'Ready-to-use CSS color variables in hex, RGB, and HSL formats.',
          status: 'available',
          link: 'https://github.com/tomaytotomato/jensen/tree/main/css',
          docs: './css',
          icon: '🎨',
          tags: ['CSS', 'Web', 'Development']
        },
        {
          name: 'Tailwind CSS',
          description: 'Complete Tailwind v4 theme with Jensen colors in OKLCH format. Includes carbon neutrals, signature gold, and cyber lime utilities.',
          status: 'available',
          link: 'https://github.com/tomaytotomato/jensen/tree/main/tailwind',
          docs: './tailwind',
          icon: '🎐',
          tags: ['Tailwind', 'CSS', 'Framework', 'Utility-First']
        },
        {
          name: 'VS Code',
          description: 'Full theme for Visual Studio Code with syntax highlighting and UI customization.',
          status: 'coming soon',
          link: '',
          docs: '',
          icon: '📝',
          tags: ['Editor', 'VS Code', 'Microsoft']
        },
        {
          name: 'Vim',
          description: 'Color scheme for Vim and Neovim enthusiasts.',
          status: 'coming soon',
          link: '',
          docs: '',
          icon: '⚡',
          tags: ['Editor', 'Vim', 'Terminal']
        },
        {
          name: 'Sublime Text',
          description: 'Theme package for Sublime Text editor.',
          status: 'coming soon',
          link: '',
          docs: '',
          icon: '📄',
          tags: ['Editor', 'Sublime', 'Cross-platform']
        }
      ]
    }
  },
  computed: {
    filteredApps() {
      if (!this.searchQuery) {
        return this.apps
      }

      const query = this.searchQuery.toLowerCase()
      return this.apps.filter(app => {
        return app.name.toLowerCase().includes(query) ||
               app.description.toLowerCase().includes(query) ||
               app.tags.some(tag => tag.toLowerCase().includes(query))
      })
    }
  }
}
</script>

