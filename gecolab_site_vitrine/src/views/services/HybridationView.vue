<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ServiceLayout from '@/components/ServiceLayout.vue'

const { t } = useI18n()

const image = `${import.meta.env.BASE_URL}images/services/chat-forestier_2.jpg`

const cases = [
  t('services.service4.case1'),
  t('services.service4.case2'),
  t('services.service4.case3'),
]
</script>

<template>
  <ServiceLayout
    serviceNumber="04"
    :title="t('services.service4.title')"
    :lead="t('services.service4.description')"
  >
    <div class="container">
      <div class="content-grid">
        <!-- Image Section -->
        <div class="image-column animate-scale-in">
          <div class="main-image">
            <img :src="image" alt="Chat forestier" loading="lazy">
            <div class="image-badge">Espèce parapluie</div>
          </div>
        </div>

        <!-- Cases Section -->
        <div class="cases-column">
          <div class="cases-card glass-card animate-fade-in-delayed">
            <div class="card-header">
              <div class="header-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </div>
              <h2 class="h3">Cas d'étude</h2>
            </div>

            <div class="case-list">
              <div v-for="(c, i) in cases" :key="i" class="case-item">
                <div class="case-num">0{{ i + 1 }}</div>
                <div class="case-content">
                  <p>{{ c }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="info-note animate-fade-in-delayed-2">
            <p>Le Deep Ecology Lab utilise des marqueurs génétiques de haute résolution pour distinguer les individus purs des hybrides avec une précision inégalée.</p>
          </div>
        </div>
      </div>
    </div>
  </ServiceLayout>
</template>

<style scoped>
.content-grid {
  display: grid;
  margin-top: var(--space-2xl);
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

/* Image Section */
.main-image {
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  aspect-ratio: 1;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-badge {
  position: absolute;
  top: var(--space-xl);
  right: var(--space-xl);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--forest);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Cases Card */
.glass-card {
  background: var(--white);
  padding: var(--space-2xl);
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
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

.case-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.case-item {
  display: flex;
  gap: var(--space-lg);
}

.case-num {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--canopy);
  opacity: 0.3;
  line-height: 1;
}

.case-content p {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--ink-light);
  margin: 0;
}

.info-note {
  margin-top: var(--space-xl);
  padding: var(--space-lg);
  background: var(--mist);
  border-radius: 16px;
  font-size: 1.25rem;
  color: var(--forest);
  line-height: 1.5;
  border-left: 3px solid var(--canopy);
  font-weight: 500;
}

/* Animations */
.animate-scale-in {
  opacity: 0;
  animation: scaleIn 1.2s var(--ease-out) 0.3s forwards;
}

.animate-fade-in-delayed {
  opacity: 0;
  animation: fadeIn 1s var(--ease-out) 0.5s forwards;
}

.animate-fade-in-delayed-2 {
  opacity: 0;
  animation: fadeIn 1s var(--ease-out) 0.7s forwards;
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
  
  .image-column {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .main-image {
    aspect-ratio: 16/9;
  }
}
</style>
