<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ServiceLayout from '@/components/ServiceLayout.vue'

const { t, tm } = useI18n()

const image = `${import.meta.env.BASE_URL}images/services/tique.jpg`
const pasteurLogo = `${import.meta.env.BASE_URL}images/partners/private/pasteur.jpg`
const liegeLogo = `${import.meta.env.BASE_URL}images/logos/liege.png`

const descriptionParagraphs = computed(() => {
  const raw = t('services.service6.description') as string
  return raw.split('\n\n').map(p => p.trim()).filter(Boolean)
})

const methodology = computed(() => tm('services.service6.methodology') as { step: string; title: string; text: string }[])
const whyChoose = computed(() => tm('services.service6.whyChoose') as { title: string; text: string }[])
</script>

<template>
  <ServiceLayout
    serviceNumber="06"
    :title="t('services.service6.title')"
    :lead="t('services.service6.lead')"
  >
    <div class="container content-wrapper">
      <!-- Background Decoration -->
      <div class="bg-decoration">
        <svg class="dna-helix" viewBox="0 0 100 600">
          <path d="M50 0C20 50 80 100 50 150C20 200 80 250 50 300C20 350 80 400 50 450C20 500 80 550 50 600" stroke="currentColor" fill="none" />
          <path d="M50 0C80 50 20 100 50 150C80 200 20 250 50 300C80 350 20 400 50 450C80 500 20 550 50 600" stroke="currentColor" fill="none" opacity="0.3" />
        </svg>
      </div>

      <div class="content-grid">
        <!-- Main Content -->
        <div class="main-column">
          <!-- Introduction & Expertise -->
          <div class="intro-section animate-fade-in">
            <div class="scientific-label">{{ t('services.service6.scientificLabel') }}</div>
            <h2 class="section-heading">{{ t('services.service6.sectionHeading') }}</h2>
            <p class="description-text--large">{{ descriptionParagraphs[0] }}</p>
            <p class="description-text">{{ descriptionParagraphs[1] }}</p>
          </div>

          <!-- Methodology Section -->
          <div class="methodology-grid animate-fade-in-delayed">
            <div v-for="item in methodology" :key="item.step" class="method-card">
              <span class="method-step">{{ item.step }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </div>

          <!-- Detection Scope -->
          <div class="scope-section glass-card animate-fade-in-delayed">
            <h3 class="card-title">{{ t('services.service6.methodologyTitle') }}</h3>
            <div class="scope-grid">
              <div class="scope-item">
                <div class="scope-icon bacteria">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>
                  </svg>
                </div>
                <div>
                  <h4>{{ t('services.service6.scopeBacteria') }}</h4>
                  <p>{{ t('services.service6.scopeBacteriaText') }}</p>
                </div>
              </div>
              <div class="scope-item">
                <div class="scope-icon fungi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 3v18M12 3C8 3 4 6 4 10s4 7 8 7 8-3 8-7-4-7-8-7z"/>
                  </svg>
                </div>
                <div>
                  <h4>{{ t('services.service6.scopeFungi') }}</h4>
                  <p>{{ t('services.service6.scopeFungiText') }}</p>
                </div>
              </div>
              <div class="scope-item">
                <div class="scope-icon parasites">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4>{{ t('services.service6.scopeParasites') }}</h4>
                  <p>{{ t('services.service6.scopeParasitesText') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Partners & Collaboration -->
          <div class="partnership-card glass-card animate-fade-in-delayed-2">
            <div class="partnership-header">
              <div class="partnership-info">
                <h4>{{ t('services.service6.partnershipTitle') }}</h4>
                <p>{{ descriptionParagraphs[2] }}</p>
              </div>
              <div class="partnership-logos">
                <div class="logo-wrapper-partner">
                  <img :src="pasteurLogo" alt="Institut Pasteur" class="partner-logo-img">
                </div>
                <div class="logo-wrapper-partner">
                  <img :src="liegeLogo" alt="Université de Liège" class="partner-logo-img">
                </div>
              </div>
            </div>
          </div>

          <!-- Secondary Insight -->
          <div class="insight-section animate-fade-in-delayed-2">
            <div class="insight-badge">{{ t('services.service6.insightBadge') }}</div>
            <p class="description-text">{{ descriptionParagraphs[3] }}</p>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="side-column">
          <div class="sticky-content">
            <div class="image-wrapper animate-scale-in">
              <img :src="image" alt="Analyse de pathogènes" loading="lazy">
              <div class="image-overlay"></div>
            </div>
            
            <div class="trust-panel glass-card animate-fade-in-delayed">
              <h3>{{ t('services.service6.whyChooseTitle') }}</h3>
              <ul class="trust-list">
                <li v-for="(item, index) in whyChoose" :key="index">
                  <div class="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <strong>{{ item.title }}</strong>
                    <span>{{ item.text }}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="service-stats glass-card animate-fade-in-delayed">
              <div class="stat-item">
                <span class="stat-label">{{ t('services.service6.sensitivity') }}</span>
                <span class="stat-value">{{ t('services.service6.sensitivityValue') }}</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-label">{{ t('services.service6.technology') }}</span>
                <span class="stat-value">{{ t('services.service6.technologyValue') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ServiceLayout>
</template>

<style scoped>
.content-wrapper {
  position: relative;
}

.bg-decoration {
  position: absolute;
  top: 0;
  right: -5%;
  bottom: 0;
  width: 300px;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  opacity: 0.15;
}

.dna-helix {
  width: 100%;
  height: 100%;
  color: var(--canopy);
}

.content-grid {
  display: grid;
  margin-top: var(--space-xl);
  grid-template-columns: 1.6fr 1fr;
  gap: var(--space-3xl);
  align-items: start;
}

/* Introduction */
.scientific-label {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(34, 197, 94, 0.1);
  color: var(--forest);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-lg);
}

.section-heading {
  font-family: var(--font-display);
  font-size: 2.25rem;
  color: var(--ink);
  margin-bottom: var(--space-xl);
  line-height: 1.2;
}

.description-text--large {
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--ink);
  font-weight: 500;
  margin-bottom: var(--space-xl);
  text-align: justify;
}

.description-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--ink-light);
  margin-bottom: var(--space-xl);
  text-align: justify;
}

/* Methodology Grid */
.methodology-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-3xl);
}

.method-card {
  padding: var(--space-xl);
  background: var(--white);
  border-radius: 20px;
  border: 1px solid var(--bone);
  position: relative;
  transition: all 0.3s var(--ease-out);
}

.method-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--canopy-light);
}

.method-step {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: rgba(34, 197, 94, 0.1);
  position: absolute;
  top: 15px;
  right: 20px;
}

.method-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--forest);
  margin-bottom: var(--space-sm);
  position: relative;
}

.method-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ink-light);
  margin: 0;
}

/* Glass Card */
.glass-card {
  background: var(--white);
  padding: var(--space-2xl);
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: var(--space-2xl);
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: var(--space-xl);
}

/* Scope Grid */
.scope-grid {
  display: grid;
  gap: var(--space-xl);
}

.scope-item {
  display: flex;
  gap: var(--space-xl);
  align-items: center;
}

.scope-icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.scope-icon.bacteria { background: #f0fdf4; color: #16a34a; }
.scope-icon.fungi { background: #fefce8; color: #ca8a04; }
.scope-icon.parasites { background: #eff6ff; color: #2563eb; }

.scope-icon svg { width: 28px; height: 28px; }

.scope-item h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--ink);
}

.scope-item p {
  font-size: 1rem;
  color: var(--ink-light);
  margin: 0;
}

/* Partnerships */
.partnership-card {
  background: var(--obsidian);
  color: var(--white);
  border: none;
}

.partnership-header {
  display: flex;
  justify-content: space-between;
  gap: var(--space-2xl);
}

.partnership-info h4 {
  color: var(--canopy-light);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
}

.partnership-info p {
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.9;
  margin: 0;
}

.partnership-logos {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  flex-shrink: 0;
}

.logo-wrapper-partner {
  background: var(--white);
  padding: var(--space-md);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 140px;
}

.partner-logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Insight */
.insight-section {
  padding-left: var(--space-xl);
  border-left: 4px solid var(--canopy);
}

.insight-badge {
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--canopy);
  text-transform: uppercase;
  margin-bottom: var(--space-sm);
}

/* Sidebar */
.sticky-content {
  position: sticky;
  top: calc(var(--nav-height) + var(--space-lg));
}

.trust-panel {
  background: var(--mist);
}

.trust-panel h3 {
  font-size: 1.15rem;
  color: var(--forest);
  margin-bottom: var(--space-xl);
  font-weight: 700;
}

.trust-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.trust-list li {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.check-icon {
  width: 24px;
  height: 24px;
  background: var(--canopy);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.check-icon svg { width: 14px; height: 14px; }

.trust-list li strong {
  display: block;
  font-size: 1rem;
  color: var(--ink);
  margin-bottom: 2px;
}

.trust-list li span {
  font-size: 0.95rem;
  color: var(--ink-light);
}

.image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--space-lg);
  aspect-ratio: 16/10;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-stats {
  padding: var(--space-xl);
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--bone);
}

.stat-item {
  text-align: center;
}

.stat-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--slate);
  margin-bottom: 4px;
  display: block;
}

.stat-value {
  font-weight: 700;
  color: var(--forest);
  font-size: 1.1rem;
}

/* Animations */
.animate-fade-in { opacity: 0; animation: fadeIn 0.8s var(--ease-out) 0.2s forwards; }
.animate-fade-in-delayed { opacity: 0; animation: fadeIn 0.8s var(--ease-out) 0.4s forwards; }
.animate-fade-in-delayed-2 { opacity: 0; animation: fadeIn 0.8s var(--ease-out) 0.6s forwards; }
.animate-scale-in { opacity: 0; animation: scaleIn 0.8s var(--ease-out) 0.3s forwards; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

/* Responsive */
@media (max-width: 1024px) {
  .content-grid { grid-template-columns: 1fr; }
  .side-column { order: -1; }
  .methodology-grid { grid-template-columns: 1fr; }
  .partnership-header { flex-direction: column; }
  .partnership-logos { flex-direction: row; }
}

@media (max-width: 640px) {
  .partnership-logos { flex-direction: column; align-items: center; }
  .logo-wrapper-partner { width: 100%; max-width: 200px; }
}
</style>
