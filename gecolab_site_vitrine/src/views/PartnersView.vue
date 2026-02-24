<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { partnersData, getAllPartners, getPartnersByCategory, getPartnersCount } from '@/data/partners'
import type { Partner } from '@/types/partners'

const { t } = useI18n()
const activeFilter = ref<string>('all')
const displayedPartners = ref<Partner[]>(getAllPartners())
const hoveredPartner = ref<string | null>(null)
const tooltipPosition = ref({ x: 0, y: 0 })
const isAnimated = ref(false)
const counts = getPartnersCount()
const failedLogos = ref<Set<string>>(new Set())

// Computed filters to ensure they use the latest translation
const filters = computed(() => [
  { id: 'all', label: t('partners.filters.all'), count: counts.total },
  { id: 'institutions', label: t('partners.filters.institutions'), count: counts.institutions },
  { id: 'bureaux', label: t('partners.filters.bureaux'), count: counts.bureaux },
  { id: 'private', label: t('partners.filters.private'), count: counts.private }
])

const setFilter = (filterId: string) => {
  activeFilter.value = filterId
  displayedPartners.value = getPartnersByCategory(filterId)
}

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
          <div class="hero__stats">
            <div class="stat">
              <div class="stat__number">{{ counts.total }}+</div>
              <div class="stat__label">{{ t('partners.hero.partnersLabel') }}</div>
            </div>
            <div class="stat">
              <div class="stat__number">{{ counts.institutions }}</div>
              <div class="stat__label">{{ t('partners.hero.institutionsLabel') }}</div>
            </div>
            <div class="stat">
              <div class="stat__number">{{ counts.bureaux }}</div>
              <div class="stat__label">{{ t('partners.hero.associationsLabel') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="filters-section">
      <div class="container">
        <div class="filters">
          <button
            v-for="filter in filters"
            :key="filter.id"
            class="filter-btn"
            :class="{ active: activeFilter === filter.id }"
            @click="setFilter(filter.id)"
          >
            {{ filter.label }}
            <span class="filter-count">{{ filter.count }}</span>
          </button>
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

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-section__bg"></div>
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">{{ t('partners.cta.title') }}</h2>
          <p class="cta-text">
            {{ t('partners.cta.text') }}
          </p>
          <RouterLink to="/contact" class="cta-btn">
            {{ t('partners.cta.button') }}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="5" y1="12" x2="19" y2="12" stroke-width="2" stroke-linecap="round"/>
              <polyline points="12 5 19 12 12 19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>
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
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: var(--space-md) 0 var(--space-lg);
  line-height: 1.2;
}

.hero__subtitle {
  font-size: 1.125rem;
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
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--canopy);
  line-height: 1;
}

.stat__label {
  font-size: 0.875rem;
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
  font-size: 0.9375rem;
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
  font-size: 0.75rem;
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
  animation: breathe 8s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.005);
  }
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
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.partners-grid.animated .partner-card:nth-child(1) { animation-delay: 0.05s; }
.partners-grid.animated .partner-card:nth-child(2) { animation-delay: 0.1s; }
.partners-grid.animated .partner-card:nth-child(3) { animation-delay: 0.15s; }
.partners-grid.animated .partner-card:nth-child(4) { animation-delay: 0.2s; }
.partners-grid.animated .partner-card:nth-child(5) { animation-delay: 0.25s; }
.partners-grid.animated .partner-card:nth-child(6) { animation-delay: 0.3s; }
.partners-grid.animated .partner-card:nth-child(7) { animation-delay: 0.35s; }
.partners-grid.animated .partner-card:nth-child(8) { animation-delay: 0.4s; }
.partners-grid.animated .partner-card:nth-child(9) { animation-delay: 0.45s; }
.partners-grid.animated .partner-card:nth-child(10) { animation-delay: 0.5s; }

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
  font-size: 1rem;
  font-weight: 700;
  color: var(--canopy);
  margin: 0 0 var(--space-xs);
}

.tooltip__description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin: 0 0 var(--space-sm);
}

.tooltip__link {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.8125rem;
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

/* ═══ CTA SECTION ═══ */
.cta-section {
  position: relative;
  padding: var(--space-4xl) 0;
  overflow: hidden;
}

.cta-section__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--forest), var(--canopy));
}

.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 var(--space-md);
}

.cta-text {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin: 0 0 var(--space-xl);
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  background: white;
  color: var(--forest);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.cta-btn svg {
  stroke: var(--forest);
  transition: transform 0.3s ease;
}

.cta-btn:hover svg {
  transform: translateX(4px);
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1200px) {
  .partners-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 2rem;
  }

  .hero__subtitle {
    font-size: 1rem;
  }

  .hero__stats {
    gap: var(--space-lg);
  }

  .stat__number {
    font-size: 2rem;
  }

  .filters {
    gap: var(--space-sm);
  }

  .filter-btn {
    padding: var(--space-xs) var(--space-md);
    font-size: 0.875rem;
  }

  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-text {
    font-size: 1rem;
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
    font-size: 0.875rem;
  }
}
</style>
