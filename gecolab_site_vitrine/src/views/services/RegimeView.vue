<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ServiceLayout from '@/components/ServiceLayout.vue'

const { t } = useI18n()

const image = `${import.meta.env.BASE_URL}images/services/crotte-mammifere.png`
</script>

<template>
  <ServiceLayout
    serviceNumber="03"
    :title="t('services.service3.title')"
    :lead="t('services.service3.description')"
  >
    <div class="container">
      <div class="content-grid">
        <!-- Main Content -->
        <div class="main-column animate-fade-in">
          <div class="examples-card glass-card">
            <div class="card-header">
              <div class="header-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                  <line x1="16" y1="8" x2="2" y2="22"/>
                  <line x1="17.5" y1="15" x2="9" y2="15"/>
                </svg>
              </div>
              <h3 class="examples-label">{{ t('services.service3.examplesLabel') }}</h3>
            </div>
            <p class="examples-text">{{ t('services.service3.examples') }}</p>
          </div>

          <div class="feature-list animate-fade-in-delayed">
            <div class="feature-item">
              <div class="feature-dot"></div>
              <p>Identification précise des proies au niveau de l'espèce.</p>
            </div>
            <div class="feature-item">
              <div class="feature-dot"></div>
              <p>Analyse non invasive à partir de fèces ou de contenus stomacaux.</p>
            </div>
            <div class="feature-item">
              <div class="feature-dot"></div>
              <p>Protocoles NGS optimisés pour les échantillons dégradés.</p>
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="image-column animate-scale-in">
          <div class="image-wrapper">
            <img :src="image" alt="Analyse de régime alimentaire" loading="lazy">
            <div class="image-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </ServiceLayout>
</template>

<style scoped>
.content-grid {
  display: grid;
  margin-top: var(--space-2xl); ;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

/* Examples Card */
.glass-card {
  background: var(--white);
  padding: var(--space-2xl);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: var(--space-2xl);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.header-icon {
  width: 44px;
  height: 44px;
  background: var(--mist);
  color: var(--canopy);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-icon svg {
  width: 24px;
  height: 24px;
}

.examples-label {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--canopy);
  margin: 0;
}

.examples-text {
  font-size: 1.25rem;
  color: var(--ink-light);
  line-height: 1.6;
  font-style: italic;
  font-family: var(--font-display);
}

/* Feature List */
.feature-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  color: var(--slate);
  font-size: 1.25rem;
  font-weight: 500;
}

.feature-dot {
  width: 6px;
  height: 6px;
  background: var(--canopy);
  border-radius: 50%;
  flex-shrink: 0;
}

/* Image Section */
.image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  background: var(--white);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s var(--ease-out);
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.image-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, transparent 70%);
  pointer-events: none;
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

.animate-scale-in {
  opacity: 0;
  animation: scaleIn 1.2s var(--ease-out) 0.4s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
  
  .image-column {
    max-width: 400px;
    margin: 0 auto;
    order: -1;
  }
}
</style>
