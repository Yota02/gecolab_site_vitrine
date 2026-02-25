<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, te } = useI18n()
const router = useRouter()

const services: { id: string; route: string; image: string }[] = [
  {
    id: 'biodiversite',
    route: '/services/biodiversite',
    image: import.meta.env.BASE_URL + 'images/services/loutre.jpg'
  },
  {
    id: 'pcr-digitale',
    route: '/services/pcr-digitale',
    image: import.meta.env.BASE_URL + 'images/services/pompe.jpg'
  },
  {
    id: 'regime',
    route: '/services/regime',
    image: import.meta.env.BASE_URL + 'images/services/crotte-mammifere.png'
  },
  {
    id: 'hybridation',
    route: '/services/hybridation',
    image: import.meta.env.BASE_URL + 'images/services/lion.jpg'
  },
  {
    id: 'effectifs',
    route: '/services/effectifs',
    image: import.meta.env.BASE_URL + 'images/services/terrain-aquatique.jpg'
  },
  {
    id: 'pathogenes',
    route: '/services/pathogenes',
    image: import.meta.env.BASE_URL + 'images/services/tique.jpg'
  },
]

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
            :style="{ '--index': index }"
            @click="navigateToService(service.route)"
          >
            <div class="service-card__image-container">
              <img :src="service.image" :alt="t(`services.service${index + 1}.title`)" class="service-card__image">
              <div class="service-card__overlay"></div>
            </div>
            
            <div class="service-card__content">
              <span class="service-card__number">0{{ index + 1 }}</span>
              <h2 class="service-card__title">{{ t(`services.service${index + 1}.title`) }}</h2>
              <p class="service-card__description">
                {{ te(`services.service${index + 1}.lead`) ? t(`services.service${index + 1}.lead`) : t(`services.service${index + 1}.description`) }}
              </p>
              
              <div class="service-card__footer">
                <span class="service-card__more">{{ t('common.readMore') || 'Découvrir' }}</span>
                <div class="service-card__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="services-cta">
      <div class="container">
        <div class="services-cta__inner">
          <div class="services-cta__content">
            <h2>{{ t('services.cta.title') }}</h2>
            <p>{{ t('services.cta.text') }}</p>
          </div>
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
  padding: calc(var(--nav-height) + var(--space-4xl)) 0 var(--space-4xl);
  overflow: hidden;
  background: var(--obsidian);
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(29, 172, 120, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(29, 172, 120, 0.1) 0%, transparent 40%),
    linear-gradient(135deg, var(--obsidian) 0%, #0a1a14 100%);
}

.page-hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.page-hero__content {
  position: relative;
  z-index: 1;
}

.page-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 8vw, 5rem);
  color: var(--white);
  line-height: 0.95;
  margin-top: var(--space-md);
  letter-spacing: -0.02em;
  animation: fadeSlideUp 0.8s var(--ease-out) both;
}

.page-hero__lead {
  max-width: 600px;
  margin-top: var(--space-xl);
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.25rem;
  line-height: 1.6;
  animation: fadeSlideUp 0.8s var(--ease-out) both;
  animation-delay: 0.2s;
}

/* ═══ SERVICES GRID ═══ */
.services-grid {
  padding: var(--space-4xl) 0;
  background: var(--background);
  position: relative;
}

.services-grid__items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: var(--space-xl);
}

.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
  overflow: hidden;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--bone);
  opacity: 0;
  animation: fadeSlideUp 0.8s var(--ease-out) forwards;
  animation-delay: calc(0.1s * var(--index));
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
  border-color: var(--canopy-light);
}

.service-card__image-container {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.service-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-out);
}

.service-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.4));
  opacity: 0.6;
  transition: opacity 0.4s ease;
}

.service-card:hover .service-card__image {
  transform: scale(1.1);
}

.service-card:hover .service-card__overlay {
  opacity: 0.2;
}

.service-card__content {
  padding: var(--space-xl);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.service-card__number {
  position: absolute;
  top: -40px;
  right: var(--space-xl);
  font-family: var(--font-display);
  font-size: 5rem;
  color: var(--white);
  opacity: 0.2;
  line-height: 1;
  pointer-events: none;
  transition: all 0.4s ease;
}

.service-card:hover .service-card__number {
  transform: translateY(-10px);
  opacity: 0.4;
  color: var(--canopy);
}

.service-card__title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--ink);
  line-height: 1.2;
  margin-bottom: var(--space-md);
  transition: color 0.3s ease;
}

.service-card:hover .service-card__title {
  color: var(--forest);
}

.service-card__description {
  color: var(--ink-light);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: var(--space-xl);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.service-card__footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-md);
  border-top: 1px solid var(--bone);
}

.service-card__more {
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--canopy);
}

.service-card__arrow {
  width: 24px;
  height: 24px;
  color: var(--canopy);
  transform: translateX(-5px);
  transition: all 0.3s var(--ease-out);
}

.service-card:hover .service-card__arrow {
  transform: translateX(0);
}

/* ═══ CTA ═══ */
.services-cta {
  padding: var(--space-4xl) 0;
  background: var(--white);
}

.services-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2xl);
  padding: var(--space-3xl) var(--space-4xl);
  background: var(--obsidian);
  border-radius: 24px;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.services-cta__inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 100% 0%, rgba(29, 172, 120, 0.2) 0%, transparent 40%),
    radial-gradient(circle at 0% 100%, rgba(29, 172, 120, 0.1) 0%, transparent 40%);
}

.services-cta__content {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.services-cta__inner h2 {
  font-family: var(--font-display);
  font-size: 2.2rem;
  line-height: 1.1;
}

.services-cta__inner p {
  margin-top: var(--space-md);
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
}

.services-cta__inner .btn {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

/* ═══ ANIMATIONS ═══ */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 992px) {
  .services-cta__inner {
    flex-direction: column;
    text-align: center;
    padding: var(--space-3xl) var(--space-xl);
  }
  
  .services-cta__content {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .services-grid__items {
    grid-template-columns: 1fr;
  }
  
  .page-hero {
    padding: calc(var(--nav-height) + var(--space-2xl)) 0 var(--space-3xl);
  }
  
  .service-card__image-container {
    height: 200px;
  }
}
</style>
