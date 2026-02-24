<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const services = [
  {
    id: 'biodiversite',
    icon: 'search',
    route: '/services/biodiversite'
  },
  {
    id: 'pcr-digitale',
    icon: 'target',
    route: '/services/pcr-digitale'
  },
  {
    id: 'regime',
    icon: 'diet',
    route: '/services/regime'
  },
  {
    id: 'hybridation',
    icon: 'hybrid',
    route: '/services/hybridation'
  },
  {
    id: 'effectifs',
    icon: 'population',
    route: '/services/effectifs'
  },
  {
    id: 'pathogenes',
    icon: 'bacteria',
    route: '/services/pathogenes'
  },
]

const iconPaths: Record<string, string> = {
  search: 'M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zM11 8v6M8 11h6',
  target: 'M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 4a6 6 0 106 6 6 6 0 00-6-6zm0 4a2 2 0 102 2 2 2 0 00-2-2z',
  diet: 'M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 3c1 0 2.5 1 3 3H9c.5-2 2-3 3-3zm-5 5h10M9 16h6',
  hybrid: 'M8 4a4 4 0 100 8 4 4 0 000-8zM16 4a4 4 0 100 8 4 4 0 000-8zM12 14v6M9 17l3 3 3-3',
  population: 'M12 2a3 3 0 100 6 3 3 0 000-6zM5 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM19 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 10c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4zM2 16c-1 0-2 1-2 2v1h5v-1.5C5 16.5 3.5 16 2 16zM22 16c1 0 2 1 2 2v1h-5v-1.5c0-1 1.5-1.5 3-1.5z',
  bacteria: 'M12 2a5 5 0 100 10 5 5 0 000-10zM12 14v4M8 7H4M20 7h-4M7 12l-3 3M17 12l3 3M12 18a2 2 0 100 4 2 2 0 000-4z',
}

const navigateToService = (route: string) => {
  router.push(route)
}
</script>

<template>
  <div class="services-page">
    <!-- Hero banner -->
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__content container">
        <span class="section-label section-label--light">{{ t('services.hero.sectionLabel') }}</span>
        <h1 class="page-hero__title">{{ t('services.hero.title') }}</h1>
        <p class="page-hero__lead">
          {{ t('services.hero.lead') }}
        </p>
      </div>
    </section>

    <!-- Services grid -->
    <section class="services-grid">
      <div class="container">
        <div class="services-grid__items">
          <article
            v-for="(service, index) in services"
            :key="service.id"
            class="service-card"
            @click="navigateToService(service.route)"
          >
            <div class="service-card__number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="service-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path :d="iconPaths[service.icon]"/>
              </svg>
            </div>
            <h2 class="service-card__title">{{ t(`services.service${index + 1}.title`) }}</h2>
            <p class="service-card__description">{{ t(`services.service${index + 1}.description`) }}</p>
            <div class="service-card__arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="services-cta">
      <div class="container">
        <div class="services-cta__inner">
          <h2>{{ t('services.cta.title') }}</h2>
          <p>{{ t('services.cta.text') }}</p>
          <router-link to="/contact" class="btn btn--primary btn--lg">
            {{ t('services.cta.button') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ═══ PAGE HERO ═══ */
.page-hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-3xl)) 0 var(--space-3xl);
  overflow: hidden;
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--obsidian) 0%, var(--forest) 100%);
}

.page-hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 80% at 70% 50%, rgba(29, 172, 120, 0.08) 0%, transparent 60%);
}

.page-hero__content {
  position: relative;
  z-index: 1;
}

.page-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  color: var(--white);
  line-height: 1;
  margin-top: var(--space-sm);
  animation: fadeSlideUp 0.7s var(--ease-out) both;
}

.page-hero__lead {
  max-width: 550px;
  margin-top: var(--space-lg);
  color: rgba(255, 255, 255, 0.55);
  font-size: 1.2rem;
  line-height: 1.7;
  animation: fadeSlideUp 0.7s var(--ease-out) both;
  animation-delay: 0.15s;
}

/* ═══ SERVICES GRID ═══ */
.services-grid {
  padding: var(--space-4xl) 0;
}

.services-grid__items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--space-xl);
}

.service-card {
  position: relative;
  padding: var(--space-2xl);
  background: var(--white);
  border: 2px solid var(--bone);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s var(--ease-out);
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--canopy), var(--forest));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--ease-out);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  border-color: var(--canopy);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.service-card__number {
  font-family: var(--font-display);
  font-size: 0.75rem;
  color: var(--canopy);
  opacity: 0.5;
  margin-bottom: var(--space-sm);
}

.service-card__icon {
  width: 48px;
  height: 48px;
  color: var(--canopy);
  padding: 10px;
  background: var(--canopy-glow);
  border-radius: 10px;
  margin-bottom: var(--space-md);
  transition: all 0.3s var(--ease-out);
}

.service-card:hover .service-card__icon {
  background: var(--canopy);
  color: var(--white);
  transform: scale(1.05);
}

.service-card__title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  color: var(--ink);
  line-height: 1.3;
  margin-bottom: var(--space-md);
  transition: color 0.3s var(--ease-out);
}

.service-card:hover .service-card__title {
  color: var(--forest);
}

.service-card__description {
  color: var(--ink-light);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: var(--space-lg);
}

.service-card__arrow {
  width: 24px;
  height: 24px;
  color: var(--canopy);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s var(--ease-out);
}

.service-card:hover .service-card__arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ═══ CTA ═══ */
.services-cta {
  padding: var(--space-3xl) 0 var(--space-4xl);
}

.services-cta__inner {
  text-align: center;
  padding: var(--space-3xl);
  background: linear-gradient(135deg, var(--obsidian), var(--forest));
  border-radius: 16px;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.services-cta__inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 30%, rgba(29, 172, 120, 0.15) 0%, transparent 50%);
}

.services-cta__inner h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  position: relative;
}

.services-cta__inner p {
  margin-top: var(--space-sm);
  color: rgba(255, 255, 255, 0.6);
  position: relative;
}

.services-cta__inner .btn {
  margin-top: var(--space-xl);
  position: relative;
}

/* ═══ BUTTONS ═══ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.85rem 1.75rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.3s var(--ease-out);
}

.btn--primary {
  background: var(--canopy);
  color: var(--white);
}

.btn--primary:hover {
  background: var(--canopy-light);
  transform: translateY(-1px);
  box-shadow: 0 8px 30px rgba(29, 172, 120, 0.3);
}

.btn--lg {
  padding: 1rem 2.25rem;
  font-size: 0.95rem;
}

.section-label {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--canopy);
  position: relative;
  padding-left: 24px;
}

.section-label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 1px;
  background: var(--canopy);
}

.section-label--light { 
  color: var(--canopy-light); 
}

.section-label--light::before { 
  background: var(--canopy-light); 
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 768px) {
  .services-grid__items {
    grid-template-columns: 1fr;
  }

  .services-cta__inner {
    padding: var(--space-2xl) var(--space-lg);
  }
}
</style>
