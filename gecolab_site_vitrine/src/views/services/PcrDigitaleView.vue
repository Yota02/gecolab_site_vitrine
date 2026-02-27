<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ServiceLayout from '@/components/ServiceLayout.vue'
import { pcrSpecies as species } from '@/data/pcrSpecies'

const { t } = useI18n()
</script>

<template>
  <ServiceLayout
    serviceNumber="02"
    :title="t('services.service2.title')"
    :lead="t('services.service2.description')"
  >
    <div class="container">
      <div class="content-wrapper">
        <!-- Intro Section -->
        <section class="intro-section animate-fade-in">
          <p class="species-intro">{{ t('services.service2.intro') }}</p>
          <div class="species-counter">
            <span class="count-num">{{ species.length }}</span>
            <span class="count-label">espèces disponibles</span>
          </div>
        </section>

        <!-- Species Grid -->
        <section class="grid-section animate-fade-in-delayed">
          <div class="species-grid">
            <div v-for="(sp, i) in species" :key="sp.name" 
                 class="species-card"
                 :class="'delay-' + (i % 5 + 1)">
              <img v-if="sp.logoSlug" 
                   :src="`/gecolab_site_vitrine/images/logos/${sp.logoSlug}.png`" 
                   :alt="sp.name"
                   class="species-logo">
              <div class="card-bullet"></div>
              <span class="species-name"><em>{{ sp.name }}</em></span>
            </div>
          </div>
        </section>

        <!-- Note Section -->
        <section class="note-section animate-fade-in-delayed-2">
          <div class="note-card glass-card">
            <div class="note-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                <polyline points="13 2 13 9 20 9"/>
              </svg>
            </div>
            <p class="species-note">{{ t('services.service2.note') }}</p>
          </div>
        </section>
      </div>
    </div>
  </ServiceLayout>
</template>

<style scoped>
.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

/* Intro Section */
.intro-section {
  text-align: center;
  margin-top: var(--space-2xl); ;
  margin-bottom: var(--space-2xl);
}

.species-intro {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  color: var(--forest);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: var(--space-xl);
}

.species-counter {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-lg) var(--space-2xl);
  background: var(--obsidian);
  color: var(--white);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.count-num {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--canopy-light);
  line-height: 1;
}

.count-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-top: var(--space-xs);
  opacity: 0.7;
}

/* Species Grid */
.species-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-3xl);
}

.species-card {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-lg) var(--space-xl);
  background: var(--white);
  border-radius: 16px;
  border: 1px solid var(--bone);
  transition: all 0.4s var(--ease-out);
}

.card-bullet {
  width: 12px;
  height: 12px;
  background: var(--canopy);
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
}

.species-name {
  font-size: 1.25rem;
  color: var(--ink);
}

.species-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.species-card:hover {
  background: var(--mist);
  border-color: var(--canopy);
  transform: translateX(10px);
}

.species-card:hover .card-bullet {
  transform: scale(1.5);
}

.species-card:hover .species-logo {
  transform: scale(1.2);
}

/* Note Section */
.glass-card {
  background: var(--white);
  padding: var(--space-2xl);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  gap: var(--space-xl);
  align-items: flex-start;
}

.note-icon {
  flex-shrink: 0;
  width: 54px;
  height: 54px;
  background: var(--mist);
  color: var(--forest);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.note-icon svg {
  width: 28px;
  height: 28px;
}

.species-note {
  font-size: 1.25rem;
  color: var(--slate);
  line-height: 1.6;
  font-style: italic;
  margin: 0;
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

.delay-1 { animation-delay: 0.5s; }
.delay-2 { animation-delay: 0.55s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.65s; }
.delay-5 { animation-delay: 0.7s; }

/* ═══ RESPONSIVE ═══ */
@media (max-width: 768px) {
  .species-grid {
    grid-template-columns: 1fr;
  }
  
  .glass-card {
    flex-direction: column;
    padding: var(--space-xl);
    gap: var(--space-lg);
    text-align: center;
    align-items: center;
  }
  
  .species-name {
    font-size: 1.1rem;
  }
}
</style>
