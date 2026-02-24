<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const species = [
  'Austropotamobius pallipes',
  'Galemys pyrenaicus',
  'Lutra lutra',
  'Xenopus laevis',
  'Margaritifera margaritifera',
  'Neomys fodiens',
  'Mustela lutreola',
  'Borrelia sp.',
  'Batrachochytrium salamanderivorans',
  'Arvicola sapidus',
]
</script>

<template>
  <div class="service-detail">
    <!-- Hero -->
    <section class="service-hero">
      <div class="service-hero__bg"></div>
      <div class="service-hero__content container">
        <router-link to="/services" class="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Retour aux services
        </router-link>
        <span class="section-label section-label--light">Service 02</span>
        <h1 class="service-hero__title">{{ t('services.service2.title') }}</h1>
        <p class="service-hero__lead">{{ t('services.service2.description') }}</p>
      </div>
    </section>

    <!-- Content -->
    <section class="service-content">
      <div class="container">
        <!-- Species list -->
        <div class="species-section">
          <div class="species-grid">
            <span v-for="sp in species" :key="sp" class="species-tag">
              <em>{{ sp }}</em>
            </span>
          </div>
          <p class="species-note">{{ t('services.service2.note') }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="service-cta">
      <div class="container">
        <div class="service-cta__inner">
          <h2>{{ t('services.cta.title') }}</h2>
          <router-link to="/contact" class="btn btn--primary btn--lg">
            {{ t('services.cta.button') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ═══ SERVICE HERO ═══ */
.service-hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-2xl)) 0 var(--space-3xl);
  overflow: hidden;
}

.service-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--obsidian) 0%, var(--forest) 100%);
}

.service-hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 80% at 70% 50%, rgba(29, 172, 120, 0.08) 0%, transparent 60%);
}

.service-hero__content {
  position: relative;
  z-index: 1;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-decoration: none;
  margin-bottom: var(--space-md);
  transition: color 0.3s var(--ease-out);
}

.back-link svg {
  width: 20px;
  height: 20px;
}

.back-link:hover {
  color: var(--white);
}

.service-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--white);
  line-height: 1.2;
  margin-top: var(--space-sm);
  max-width: 800px;
}

.service-hero__lead {
  max-width: 650px;
  margin-top: var(--space-lg);
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.15rem;
  line-height: 1.7;
}

/* ═══ CONTENT ═══ */
.service-content {
  padding: var(--space-4xl) 0;
}

.species-section {
  max-width: 900px;
  margin: 0 auto;
}

.species-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.species-tag {
  display: inline-block;
  padding: var(--space-sm) var(--space-lg);
  background: var(--canopy-glow);
  border: 1px solid rgba(29, 172, 120, 0.15);
  border-radius: 100px;
  font-size: 1rem;
  color: var(--forest);
  transition: all 0.3s var(--ease-out);
}

.species-tag:hover {
  background: var(--canopy);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.species-tag em {
  font-style: italic;
}

.species-note {
  font-size: 1.05rem;
  color: var(--slate);
  font-style: italic;
  line-height: 1.6;
}

/* CTA */
.service-cta {
  padding: var(--space-3xl) 0;
  background: var(--mist);
}

.service-cta__inner {
  text-align: center;
  padding: var(--space-3xl);
  background: linear-gradient(135deg, var(--obsidian), var(--forest));
  border-radius: 16px;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.service-cta__inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 30%, rgba(29, 172, 120, 0.15) 0%, transparent 50%);
}

.service-cta__inner h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  position: relative;
  margin-bottom: var(--space-lg);
}

.service-cta__inner .btn {
  position: relative;
}

/* Buttons */
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
  margin-bottom: var(--space-sm);
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
  .species-grid {
    gap: var(--space-sm);
  }
}
</style>
