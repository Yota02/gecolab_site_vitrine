<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ServiceLayout from '@/components/ServiceLayout.vue'

const { t } = useI18n()

const galleryImages = [
  { src: `${import.meta.env.BASE_URL}images/services/lion.jpg`, alt: 'Lion d\'Afrique' },
  { src: `${import.meta.env.BASE_URL}images/services/loutre.jpg`, alt: 'Loutre européenne' },
  { src: `${import.meta.env.BASE_URL}images/services/hibou-grand-duc.jpg`, alt: 'Hibou Grand Duc' },
  { src: `${import.meta.env.BASE_URL}images/services/chat-forestier_2_zoom.jpg`, alt: 'Chat forestier' },
  { src: `${import.meta.env.BASE_URL}images/services/desman-pyrenees.jpg`, alt: 'Desman des Pyrénées' },
  { src: `${import.meta.env.BASE_URL}images/services/ours-polaire.jpg`, alt: 'Ours polaire' },
  { src: `${import.meta.env.BASE_URL}images/services/lynx.jpg`, alt: 'Lynx' },
  { src: `${import.meta.env.BASE_URL}images/services/loup.jpg`, alt: 'Loup' },
]
</script>

<template>
  <ServiceLayout
    serviceNumber="05"
    :title="t('services.service5.title')"
    :lead="t('services.service5.description')"
  >
    <div class="container">
      <!-- Description Section -->
      <section class="content-section animate-fade-in">
        <div class="examples-card glass-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          </div>
          <div class="card-body">
            <h3 class="examples-label">{{ t('services.service5.examplesLabel') }}</h3>
            <p class="examples-text">{{ t('services.service5.examples') }}</p>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section class="content-section animate-fade-in-delayed">
        <div class="section-header">
          <h2 class="h4">{{ t('services.service5.speciesStudied') }}</h2>
          <div class="header-line"></div>
        </div>

        <div class="gallery-grid">
          <div v-for="(img, i) in galleryImages" :key="img.src" 
               class="gallery-card"
               :class="'delay-' + (i % 4 + 1)">
            <div class="image-box">
              <img :src="img.src" :alt="img.alt" loading="lazy">
              <div class="image-overlay">
                <span class="gallery-caption">{{ img.alt }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </ServiceLayout>
</template>

<style scoped>
.content-section {
  margin-top:  var(--space-2xl);
  margin-bottom: var(--space-2xl);
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.section-header h2 {
  font-family: var(--font-display);
  color: var(--forest);
  margin: 0;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.header-line {
  height: 1px;
  background: var(--canopy);
  flex-grow: 1;
  opacity: 0.2;
}

/* Examples Card */
.glass-card {
  background: var(--white);
  padding: var(--space-2xl);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  gap: var(--space-xl);
  align-items: center;
}

.card-icon {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  background: var(--mist);
  color: var(--forest);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon svg {
  width: 32px;
  height: 32px;
}

.examples-label {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--canopy);
  margin-bottom: var(--space-xs);
}

.examples-text {
  font-size: 1.25rem;
  color: var(--ink-light);
  line-height: 1.6;
  font-style: italic;
  font-family: var(--font-display);
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  margin-top: var(--space-2xl);
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.gallery-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.5s var(--ease-out);
}

.image-box {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s var(--ease-out);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10, 15, 13, 0.8) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: var(--space-lg);
  opacity: 0.8;
  transition: opacity 0.4s ease;
}

.gallery-caption {
  color: var(--white);
  font-size: 0.95rem;
  font-weight: 600;
  transform: translateY(10px);
  transition: transform 0.4s var(--ease-out);
}

.gallery-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.gallery-card:hover img {
  transform: scale(1.15);
}

.gallery-card:hover .image-overlay {
  opacity: 1;
}

.gallery-card:hover .gallery-caption {
  transform: translateY(0);
}

/* Animations */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s var(--ease-out) 0.3s forwards;
}

.animate-fade-in-delayed {
  opacity: 0;
  animation: fadeIn 1s var(--ease-out) 0.5s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.delay-1 { animation-delay: 0.5s; }
.delay-2 { animation-delay: 0.6s; }
.delay-3 { animation-delay: 0.7s; }
.delay-4 { animation-delay: 0.8s; }

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .glass-card {
    flex-direction: column;
    text-align: center;
    padding: var(--space-xl);
  }
}

@media (max-width: 576px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .image-box {
    height: 240px;
  }
}
</style>
