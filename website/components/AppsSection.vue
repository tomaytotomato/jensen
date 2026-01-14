<template>
  <section id="apps" class="py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl font-bold text-center mb-4">
        <span class="augmented-text">Applications and Tools</span>
      </h2>
      <p class="text-center text-jensen-comment mb-8">
        Jensen is available in <span class="text-jensen-gold font-semibold">{{ apps.length }}</span> apps and tools below
      </p>

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

      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          @click="selectedCategory = 'all'"
          class="px-4 py-2 text-sm font-semibold border transition-all"
          :class="selectedCategory === 'all'
            ? 'bg-jensen-gold text-jensen-bg border-jensen-gold'
            : 'bg-transparent text-jensen-comment border-jensen-comment/30 hover:border-jensen-gold hover:text-jensen-gold'"
        >
          All Apps
        </button>
        <button
          v-for="(category, key) in categories"
          :key="key"
          @click="selectedCategory = key"
          class="px-4 py-2 text-sm font-semibold border transition-all"
          :class="selectedCategory === key
            ? 'bg-jensen-gold text-jensen-bg border-jensen-gold'
            : 'bg-transparent text-jensen-comment border-jensen-comment/30 hover:border-jensen-gold hover:text-jensen-gold'"
        >
          {{ category.icon }} {{ category.name }}
        </button>
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
            <div v-else-if="app.icon" class="w-full h-full flex items-center justify-center p-8 bg-jensen-bg/50">
              <img
                :src="app.icon"
                :alt="app.name"
                class="w-32 h-32 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <div v-else class="w-full h-full flex items-center justify-center">
              <span class="text-6xl text-jensen-gold/20">{{ categories[app.category]?.icon || '📦' }}</span>
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
import appsData from '../../apps.json'

export default {
  name: 'AppsSection',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      appsData: appsData
    }
  },
  computed: {
    apps() {
      // Get base path from vite config (works in both dev and production)
      const base = import.meta.env.BASE_URL || '/'

      // Transform apps data to component format
      return this.appsData.apps.map(app => {
        let iconPath = null
        if (app.icon) {
          // Icons are now directly in public/icons/ with their actual names
          // If the path starts with "icons/", use it as-is
          // Otherwise, extract just the filename from the path
          if (app.icon.startsWith('icons/')) {
            iconPath = `${base}${app.icon}`
          } else {
            const iconFilename = app.icon.split('/').pop()
            iconPath = `${base}icons/${iconFilename}`
          }
        }

        return {
          id: app.id,
          name: app.name,
          description: app.description,
          status: app.status,
          link: app.links.github,
          docs: app.links.docs,
          image: app.screenshot ? `${base}${app.screenshot.split('/').pop()}` : null,
          icon: iconPath,
          tags: app.tags,
          category: app.category,
          platform: app.platform
        }
      })
    },
    categories() {
      return this.appsData.categories
    },
    filteredApps() {
      let filtered = this.apps

      // Filter by category
      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(app => app.category === this.selectedCategory)
      }

      // Filter by search query
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(app => {
          return app.name.toLowerCase().includes(query) ||
                 app.description.toLowerCase().includes(query) ||
                 app.tags.some(tag => tag.toLowerCase().includes(query)) ||
                 app.platform.some(p => p.toLowerCase().includes(query))
        })
      }

      return filtered
    }
  }
}
</script>

