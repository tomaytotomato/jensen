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
        <AppCard
          v-for="app in filteredApps"
          :key="app.id"
          :app="app"
          :categories="categories"
        />
      </div>

      <!-- No Results -->
      <div v-if="filteredApps.length === 0" class="text-center py-12">
        <p class="text-jensen-comment text-lg">No applications found matching "{{ searchQuery }}"</p>
        <div class="mt-4 flex justify-center">
          <DeusExButton variant="copper" @click="searchQuery = ''">
            Clear Search
          </DeusExButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import appsData from '../../apps.json'
import AppCard from './AppCard.vue'
import DeusExButton from './DeusExButton.vue'

// Vite bundles convention-named showcase assets that live one level deep
// under the repo root (e.g. `piAgent/screenshot_1.png`, `piAgent/preview.mp4`).
// Keys look like '../../piAgent/screenshot_1.png' and resolve to a hashed
// build URL we can drop into <img>/<video>.
const bundledAssets = {
  ...import.meta.glob('../../*/screenshot*.{png,jpg,jpeg,webp,gif}', { eager: true, query: '?url', import: 'default' }),
  ...import.meta.glob('../../*/preview.{mp4,webm}', { eager: true, query: '?url', import: 'default' })
}
const assetByRepoPath = {}
for (const [globPath, url] of Object.entries(bundledAssets)) {
  // strip leading '../../' to get the repo-relative path used in apps.json
  assetByRepoPath[globPath.replace(/^\.\.\/\.\.\//, '')] = url
}

function resolveAsset(path, base) {
  if (!path) return null
  if (/^https?:\/\//.test(path)) return path
  // Co-located asset bundled by Vite (e.g. piAgent/screenshot_1.png).
  if (assetByRepoPath[path]) return assetByRepoPath[path]
  // public/foo/bar.png is served at <base>foo/bar.png.
  if (path.startsWith('public/')) return `${base}${path.slice('public/'.length)}`
  // Last resort: assume already public-relative.
  return `${base}${path}`
}

export default {
  name: 'AppsSection',
  components: { AppCard, DeusExButton },
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      appsData
    }
  },
  computed: {
    apps() {
      const base = import.meta.env.BASE_URL || '/'
      return this.appsData.apps.map(app => {
        // Icons: existing convention is public/icons/foo.svg, served at /icons/foo.svg
        let icon = null
        if (app.icon) {
          icon = app.icon.startsWith('icons/')
            ? `${base}${app.icon}`
            : `${base}icons/${app.icon.split('/').pop()}`
        }
        // Screenshots: prefer array, fall back to single legacy field
        const rawShots = Array.isArray(app.screenshots) && app.screenshots.length
          ? app.screenshots
          : (app.screenshot ? [app.screenshot] : [])
        const screenshots = rawShots.map(p => resolveAsset(p, base)).filter(Boolean)
        const video = resolveAsset(app.video, base)

        return {
          id: app.id,
          name: app.name,
          description: app.description,
          status: app.status,
          githubLink: app.links.github,
          screenshots,
          video,
          icon,
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
      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(app => app.category === this.selectedCategory)
      }
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase()
        filtered = filtered.filter(app =>
          app.name.toLowerCase().includes(q) ||
          app.description.toLowerCase().includes(q) ||
          app.tags.some(tag => tag.toLowerCase().includes(q)) ||
          app.platform.some(p => p.toLowerCase().includes(q))
        )
      }
      return filtered
    }
  }
}
</script>

