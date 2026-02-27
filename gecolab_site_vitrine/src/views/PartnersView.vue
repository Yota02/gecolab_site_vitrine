<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { getAllPartners, getPartnersCount } from '@/data/partners'
import type { Partner } from '@/types/partners'

const { t } = useI18n()
const displayedPartners = ref<Partner[]>(getAllPartners())
const hoveredPartner = ref<string | null>(null)
const tooltipPosition = ref({ x: 0, y: 0 })
const isAnimated = ref(false)
const counts = getPartnersCount()
const failedLogos = ref<Set<string>>(new Set())

const handleMouseMove = (event: MouseEvent, partner: Partner) => {
  hoveredPartner.value = partner.id
  tooltipPosition.value = {
    x: event.clientX,
    y: event.clientY
  }
}

const handleMouseLeave = () => {
  hoveredPartner.value = null
}

const handleImageError = (partnerId: string, event: Event) => {
  failedLogos.value.add(partnerId)
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}

const getTooltipPartner = computed(() => {
  if (!hoveredPartner.value) return null
  return displayedPartners.value.find(p => p.id === hoveredPartner.value)
})

// Animation au scroll
let observer: IntersectionObserver | null = null

onMounted(() => {
  setTimeout(() => {
    isAnimated.value = true
  }, 100)

  // Observer pour animations au scroll
  const elements = document.querySelectorAll('.partner-card')
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  elements.forEach((el) => observer?.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="partners-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__bg"></div>
      <div class="container">
        <div class="hero__content">
          <span class="section-label section-label--light">{{ t('partners.hero.sectionLabel') }}</span>
          <h1 class="hero__title">{{ t('partners.hero.title') }}</h1>
          <p class="hero__subtitle">
            {{ t('partners.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Partners Grid -->
    <section class="partners-grid-section">
      <div class="container">
        <div class="partners-grid" :class="{ animated: isAnimated }">
          <div
            v-for="partner in displayedPartners"
            :key="partner.id"
            class="partner-card"
            @mousemove="(e) => handleMouseMove(e, partner)"
            @mouseleave="handleMouseLeave"
          >
            <a
              :href="partner.website"
              target="_blank"
              rel="noopener noreferrer"
              class="partner-link"
              :aria-label="`Visiter le site de ${partner.name}`"
            >
              <div class="partner-logo-container" v-if="!failedLogos.has(partner.id)">
                <img
                  :src="partner.logo"
                  :alt="`Logo ${partner.name}`"
                  class="partner-logo"
                  loading="lazy"
                  @error="(e) => handleImageError(partner.id, e)"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Tooltip -->
    <Transition name="tooltip">
      <div
        v-if="hoveredPartner && getTooltipPartner"
        class="tooltip"
        :style="{
          left: `${tooltipPosition.x + 15}px`,
          top: `${tooltipPosition.y + 15}px`
        }"
      >
        <h4 class="tooltip__name">{{ getTooltipPartner.name }}</h4>
        <p v-if="getTooltipPartner.description" class="tooltip__description">
          {{ getTooltipPartner.description }}
        </p>
        <div v-if="getTooltipPartner.website" class="tooltip__link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="15 3 21 3 21 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="10" y1="14" x2="21" y2="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ t('partners.tooltip.visitWebsite') }}
        </div>
  </div>
</Transition>

  </div>
</template>

<style scoped>
/* ═══ HERO SECTION ═══ */
.hero {
  position: relative;
  padding: var(--space-4xl) 0 var(--space-3xl);
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--obsidian), var(--forest));
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero__title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: var(--space-md) 0 var(--space-lg);
  line-height: 1.2;
}

.hero__subtitle {
  font-size: 1.35rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: var(--space-2xl);
}

.hero__stats {
  display: flex;
  justify-content: center;
  gap: var(--space-2xl);
  margin-top: var(--space-2xl);
}

.stat {
  text-align: center;
}

.stat__number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--canopy);
  line-height: 1;
}

.stat__label {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: var(--space-xs);
}

/* ═══ FILTERS SECTION ═══ */
.filters-section {
  padding: var(--space-2xl) 0;
  background: var(--mist);
}

.filters {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  border: 2px solid var(--forest);
  background: white;
  color: var(--forest);
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: var(--forest);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.filter-btn.active {
  background: var(--canopy);
  border-color: var(--canopy);
  color: white;
}

.filter-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 var(--space-xs);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 700;
}

.filter-btn.active .filter-count {
  background: rgba(255, 255, 255, 0.3);
}

/* ═══ PARTNERS GRID ═══ */
.partners-grid-section {
  padding: var(--space-4xl) 0;
  background: white;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-xl);
}

.partner-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.partner-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.partners-grid.animated .partner-card {
  animation: appearWithWave 1s ease-out forwards;
}

@keyframes appearWithWave {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px);
  }
  80% {
    transform: translateY(3px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.partner-link {
  display: block;
  text-decoration: none;
}

.partner-logo-container {
  position: relative;
  aspect-ratio: 16 / 10;
  background: white;
  border-radius: 12px;
  padding: var(--space-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.partner-logo-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.partner-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.partner-logo-container:hover .partner-logo {
  transform: scale(1.05);
}

.partner-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--forest), var(--canopy));
  border-radius: 8px;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

/* ═══ TOOLTIP ═══ */
.tooltip {
  position: fixed;
  z-index: 1000;
  background: var(--obsidian);
  color: white;
  padding: var(--space-md) var(--space-lg);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  max-width: 320px;
  pointer-events: none;
}

.tooltip__name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--canopy);
  margin: 0 0 var(--space-xs);
}

.tooltip__description {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin: 0 0 var(--space-sm);
}

.tooltip__link {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.98rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
}

.tooltip__link svg {
  stroke: var(--canopy);
}

.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1200px) {
  .partners-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 2.4rem;
  }

  .hero__subtitle {
    font-size: 1.2rem;
  }

  .hero__stats {
    gap: var(--space-lg);
  }

  .stat__number {
    font-size: 2.4rem;
  }

  .filters {
    gap: var(--space-sm);
  }

  .filter-btn {
    padding: var(--space-xs) var(--space-md);
    font-size: 1.05rem;
  }

  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
  }
}

@media (max-width: 480px) {
  .hero__stats {
    flex-direction: column;
    gap: var(--space-md);
  }

  .filters {
    flex-direction: column;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tooltip {
    max-width: 280px;
    font-size: 1.05rem;
  }
}
</style>
