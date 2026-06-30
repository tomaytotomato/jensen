<template>
  <div class="cyber-card group flex flex-col">
    <!-- Media area -->
    <div class="relative overflow-hidden bg-jensen-dark h-48">
      <!-- Screenshot carousel -->
      <template v-if="screenshots.length">
        <img
          :src="screenshots[currentIndex]"
          :alt="`${app.name} screenshot ${currentIndex + 1}`"
          class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity cursor-zoom-in"
          @click="openLightbox(currentIndex)"
        />

        <!-- Prev / Next arrows (only if >1 screenshot) -->
        <template v-if="screenshots.length > 1">
          <button
            class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-jensen-bg/70 text-jensen-gold border border-jensen-gold/40 hover:bg-jensen-gold hover:text-jensen-bg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous screenshot"
            @click.stop="prev"
          >
            ‹
          </button>
          <button
            class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-jensen-bg/70 text-jensen-gold border border-jensen-gold/40 hover:bg-jensen-gold hover:text-jensen-bg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next screenshot"
            @click.stop="next"
          >
            ›
          </button>

          <!-- Dots -->
          <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            <button
              v-for="(_, i) in screenshots"
              :key="i"
              class="w-2 h-2 rounded-full border border-jensen-gold/60 transition-all"
              :class="i === currentIndex ? 'bg-jensen-gold scale-125' : 'bg-jensen-bg/50 hover:bg-jensen-gold/40'"
              :aria-label="`Screenshot ${i + 1}`"
              @click.stop="currentIndex = i"
            />
          </div>
        </template>
      </template>

      <!-- Icon fallback -->
      <div v-else-if="app.icon" class="w-full h-full flex items-center justify-center p-8 bg-jensen-bg/50">
        <img
          :src="app.icon"
          :alt="app.name"
          class="w-32 h-32 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <!-- Emoji fallback -->
      <div v-else class="w-full h-full flex items-center justify-center">
        <span class="text-6xl text-jensen-gold/20">{{ categories[app.category]?.icon || '📦' }}</span>
      </div>

      <!-- Status pill -->
      <div
        class="absolute top-3 right-3 px-3 py-1 text-xs font-bold uppercase tracking-wider z-10"
        :class="app.status === 'available' ? 'bg-jensen-green/20 text-jensen-green border border-jensen-green' : 'bg-jensen-comment/20 text-jensen-comment border border-jensen-comment'"
      >
        {{ app.status }}
      </div>

      <!-- Video play overlay -->
      <button
        v-if="app.video"
        class="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 bg-jensen-bg/80 text-jensen-gold border border-jensen-gold hover:bg-jensen-gold hover:text-jensen-bg transition-all text-xs font-bold uppercase tracking-wider z-10"
        aria-label="Play demo video"
        @click.stop="showVideo = true"
      >
        <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
        Demo
      </button>
    </div>

    <!-- Body -->
    <div class="p-6 flex flex-col flex-grow">
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

      <div class="flex gap-2 mt-auto">
        <a
          v-if="app.githubLink && app.status === 'available'"
          :href="app.githubLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DeusExButton variant="gold" size="sm">View on GitHub</DeusExButton>
        </a>
        <DeusExButton
          v-else-if="app.status !== 'available'"
          variant="copper"
          size="sm"
          class="btn-deus-ex-disabled"
          disabled
        >
          Coming Soon
        </DeusExButton>
      </div>
    </div>

    <!-- Video lightbox -->
    <Teleport to="body">
      <div
        v-if="showVideo"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
        @click.self="closeVideo"
        @keydown.esc="closeVideo"
      >
        <div class="relative max-w-5xl w-full">
          <div class="flex items-center justify-between mb-3">
            <span class="text-jensen-gold font-bold uppercase tracking-wider text-sm">
              {{ app.name }} — Demo
            </span>
            <button
              class="text-jensen-gold hover:text-jensen-copper text-2xl leading-none"
              aria-label="Close video"
              @click="closeVideo"
            >
              ✕
            </button>
          </div>
          <video
            ref="videoEl"
            :src="app.video"
            controls
            autoplay
            playsinline
            class="w-full max-h-[80vh] border-2 border-jensen-gold/60 bg-black"
          />
        </div>
      </div>
    </Teleport>

    <!-- Screenshot lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxIndex !== null"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        @click.self="lightboxIndex = null"
        @keydown.esc="lightboxIndex = null"
      >
        <div class="relative max-w-7xl w-full">
          <div class="flex items-center justify-between mb-3">
            <span class="text-jensen-gold font-bold uppercase tracking-wider text-sm">
              {{ app.name }} — {{ lightboxIndex + 1 }} / {{ screenshots.length }}
            </span>
            <button
              class="text-jensen-gold hover:text-jensen-copper text-2xl leading-none"
              aria-label="Close screenshot"
              @click="lightboxIndex = null"
            >
              ✕
            </button>
          </div>
          <img
            :src="screenshots[lightboxIndex]"
            :alt="`${app.name} screenshot ${lightboxIndex + 1}`"
            class="w-full max-h-[85vh] object-contain border-2 border-jensen-gold/60 bg-black"
          />
          <template v-if="screenshots.length > 1">
            <button
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-jensen-bg/80 text-jensen-gold border border-jensen-gold hover:bg-jensen-gold hover:text-jensen-bg text-2xl"
              aria-label="Previous"
              @click.stop="lightboxIndex = (lightboxIndex - 1 + screenshots.length) % screenshots.length"
            >‹</button>
            <button
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-jensen-bg/80 text-jensen-gold border border-jensen-gold hover:bg-jensen-gold hover:text-jensen-bg text-2xl"
              aria-label="Next"
              @click.stop="lightboxIndex = (lightboxIndex + 1) % screenshots.length"
            >›</button>
          </template>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import DeusExButton from './DeusExButton.vue'

export default {
  name: 'AppCard',
  components: { DeusExButton },
  props: {
    app: { type: Object, required: true },
    categories: { type: Object, required: true }
  },
  data() {
    return {
      currentIndex: 0,
      showVideo: false,
      lightboxIndex: null
    }
  },
  computed: {
    screenshots() {
      return this.app.screenshots || []
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.screenshots.length
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.screenshots.length) % this.screenshots.length
    },
    openLightbox(i) {
      this.lightboxIndex = i
    },
    closeVideo() {
      const v = this.$refs.videoEl
      if (v) { try { v.pause() } catch (_) {} }
      this.showVideo = false
    }
  }
}
</script>
