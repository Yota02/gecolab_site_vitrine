<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ServiceLayout from '@/components/ServiceLayout.vue'

const { t } = useI18n()

const images = [
  { src: `${import.meta.env.BASE_URL}images/services/riviere.jpg`, alt: 'Rivière - milieu aquatique' },
  { src: `${import.meta.env.BASE_URL}images/services/pompe.jpg`, alt: 'Pompe péristaltique' },
  { src: `${import.meta.env.BASE_URL}images/services/terrain-aquatique.jpg`, alt: 'Terrain aquatique' },
]

const images2 = [
  { src: `${import.meta.env.BASE_URL}images/services/tube-poils.png`, alt: 'Tube à poils' },
  { src: `${import.meta.env.BASE_URL}images/services/poils-piege.png`, alt: 'Poils de piège' },
  { src: `${import.meta.env.BASE_URL}images/services/terrain-terrestre.jpg`, alt: 'Terrain terrestre' },
]

const markers = [
  { group: 'Poissons', markers: '3 marqueurs', reads: '1–2M reads/marqueur' },
  { group: 'Mammifères', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
  { group: 'Batraciens', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
  { group: 'Mollusques bivalves', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
  { group: 'Gastéropodes', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
  { group: 'Décapodes', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
  { group: 'Plantes', markers: '1 marqueur', reads: '2M reads' },
  { group: 'Invertébrés', markers: '1 marqueur', reads: '2M reads' },
  { group: 'Diatomées', markers: '1–3 marqueurs', reads: '1–2M reads/marqueur' },
]
</script>

<template>
  <ServiceLayout
    serviceNumber="01"
    :title="t('services.service1.title')"
    :lead="t('services.service1.description')"
  >
    <div class="container">
      <!-- Aquatic Section -->
      <section class="content-section animate-fade-in">
        <div class="section-header">
          <h2 class="h3">{{ t('services.service1.aquatic') }}</h2>
          <div class="header-line"></div>
        </div>
        
        <p class="section-text">{{ t('services.service1.aquaticText') }}</p>

        <div class="photo-grid">
          <div v-for="(img, i) in images" :key="img.src" 
               class="photo-item" 
               :class="'delay-' + (i + 1)">
            <img :src="img.src" :alt="img.alt" loading="lazy">
            <div class="photo-caption">{{ img.alt }}</div>
          </div>
        </div>
      </section>

      <!-- Terrestrial Section -->
      <section class="content-section animate-fade-in-delayed">
        <div class="section-header">
          <h2 class="h3">{{ t('services.service1.terrestrial') }}</h2>
          <div class="header-line"></div>
        </div>
        
        <p class="section-text">{{ t('services.service1.terrestrialText') }}</p>

        <div class="photo-grid">
          <div v-for="(img, i) in images2" :key="img.src" 
               class="photo-item"
               :class="'delay-' + (i + 1)">
            <img :src="img.src" :alt="img.alt" loading="lazy">
            <div class="photo-caption">{{ img.alt }}</div>
          </div>
        </div>
      </section>

      <!-- Markers Section -->
      <section class="content-section animate-fade-in-delayed-2">
        <div class="markers-card glass-card">
          <div class="markers-card__header">
            <h3>{{ t('services.service1.markersTitle') }}</h3>
            <p>Aperçu des protocoles standardisés</p>
          </div>
          
          <div class="markers-table">
            <div class="table-head">
              <span>Groupe taxonomique</span>
              <span>Marqueurs</span>
              <span>Reads recommandés</span>
            </div>
            <div v-for="m in markers" :key="m.group" class="table-row">
              <span class="m-group">{{ m.group }}</span>
              <span class="m-value">{{ m.markers }}</span>
              <span class="m-reads">{{ m.reads }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </ServiceLayout>
</template>

<style scoped>
.content-section {
  margin-bottom: var(--space-2xl);
  margin-top: var(--space-2xl);
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.section-header h2 {
  font-family: var(--font-display);
  color: var(--forest);
  margin: 0;
  white-space: nowrap;
}

.header-line {
  height: 1px;
  background: var(--canopy);
  flex-grow: 1;
  opacity: 0.3;
}

.section-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--ink-light);
  max-width: 900px;
  margin-bottom: var(--space-xl);
}

/* Photo Grid */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.photo-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 280px;
  box-shadow: var(--shadow-md);
  transition: all 0.5s var(--ease-out);
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-out);
}

.photo-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.photo-item:hover img {
  transform: scale(1.1);
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-md);
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: var(--white);
  font-size: 0.85rem;
  opacity: 0;
  transition: opacity 0.3s var(--ease-out);
}

.photo-item:hover .photo-caption {
  opacity: 1;
}

/* Markers Card */
.glass-card {
  background: var(--white);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.markers-card__header {
  padding: var(--space-xl) var(--space-2xl);
  background: var(--mist);
  border-bottom: 1px solid var(--bone);
}

.markers-card__header h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--forest);
  margin: 0;
}

.markers-card__header p {
  font-size: 0.9rem;
  color: var(--slate);
  margin: var(--space-xs) 0 0;
}

.markers-table {
  padding: var(--space-lg) var(--space-2xl);
}

.table-head {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  padding: var(--space-md) 0;
  border-bottom: 2px solid var(--bone);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--slate);
}

.table-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--mist);
  font-size: 1.05rem;
  transition: background 0.2s ease;
}

.table-row:last-child {
  border-bottom: none;
}

.table-row:hover {
  background: rgba(34, 197, 94, 0.02);
}

.m-group {
  font-weight: 600;
  color: var(--ink);
}

.m-value {
  color: var(--forest-mid);
}

.m-reads {
  color: var(--slate);
  font-size: 0.95rem;
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

.animate-fade-in-delayed-2 {
  opacity: 0;
  animation: fadeIn 1s var(--ease-out) 0.7s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.delay-1 { animation-delay: 0.4s; }
.delay-2 { animation-delay: 0.5s; }
.delay-3 { animation-delay: 0.6s; }

/* ═══ RESPONSIVE ═══ */
@media (max-width: 992px) {
  .photo-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .photo-grid {
    grid-template-columns: 1fr;
  }
  
  .photo-item {
    height: 240px;
  }
  
  .table-head {
    display: none;
  }
  
  .table-row {
    grid-template-columns: 1fr;
    gap: 4px;
    padding: var(--space-md) 0;
  }
}
</style>
