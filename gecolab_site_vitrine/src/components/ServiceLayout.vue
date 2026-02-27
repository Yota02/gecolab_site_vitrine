<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  title: string
  lead: string
  ctaTitle?: string
  ctaButtonText?: string
}

const { t } = useI18n()

defineProps<Props>()
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
          {{ t('services.backToServices') || 'Retour aux services' }}
        </router-link>
        
        <div class="hero-main-content">
          <h1 class="service-hero__title animate-fade-in-up">{{ title }}</h1>
          <p class="service-hero__lead animate-fade-in-up-delayed">{{ lead }}</p>
        </div>
      </div>
      
      <!-- Decorative Element -->
      <div class="hero-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </section>

    <!-- Content Slot -->
    <div class="service-main-content">
      <slot></slot>
    </div>

    <!-- CTA -->
    <section class="service-cta">
      <div class="container">
        <div class="service-cta__inner animate-scale-in">
          <div class="cta-content">
            <h2>{{ ctaTitle || t('services.cta.title') }}</h2>
            <router-link to="/contact" class="btn btn--primary btn--lg">
              {{ ctaButtonText || t('services.cta.button') }}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="btn-icon">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ═══ SERVICE HERO ═══ */
.service-hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-2xl)) 0 var(--space-4xl);
  overflow: hidden;
  background-color: var(--obsidian);
}

.service-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(165deg, #0a0f0d 0%, #0d2e1f 100%);
  z-index: 0;
}

.service-hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%);
  opacity: 0.6;
}

.service-hero__content {
  position: relative;
  z-index: 2;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  margin-bottom: var(--space-xl);
  transition: all 0.4s var(--ease-out);
}

.back-link svg {
  width: 18px;
  height: 18px;
  transition: transform 0.4s var(--ease-out);
}

.back-link:hover {
  color: var(--canopy-light);
}

.back-link:hover svg {
  transform: translateX(-4px);
}

.hero-main-content {
  max-width: 850px;
}

.label-wrapper {
  margin-bottom: var(--space-md);
}

.service-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--white);
  line-height: 1.1;
  font-weight: 700;
  margin: 0;
  text-align: left;
}

.service-hero__lead {
  max-width: 650px;
  margin-top: var(--space-xl);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  line-height: 1.6;
  font-weight: 500;
  border-left: 2px solid var(--canopy);
  padding-left: var(--space-lg);
}

/* Hero Decoration */
.hero-decoration {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  pointer-events: none;
  z-index: 1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(34, 197, 94, 0.1);
}

.circle-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -50px;
}

.circle-2 {
  width: 600px;
  height: 600px;
  bottom: -200px;
  right: -150px;
}

/* ═══ CONTENT ═══ */
.service-main-content {
  position: relative;
  z-index: 5;
  margin-top: -var(--space-xl);
  padding-bottom: var(--space-4xl);
}

/* ═══ CTA ═══ */
.service-cta {
  padding: 0 0 var(--space-4xl);
}

.service-cta__inner {
  text-align: center;
  padding: var(--space-4xl) var(--space-xl);
  background: var(--obsidian);
  border-radius: 24px;
  color: var(--white);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.service-cta__inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--obsidian) 0%, #0d2e1f 100%);
  z-index: 0;
}

.service-cta__inner::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle at 70% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 60%);
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
}

.service-cta__inner h2 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: var(--space-2xl);
  line-height: 1.2;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-md);
  padding: 1rem 2.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.4s var(--ease-out);
}

.btn-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.4s var(--ease-out);
}

.btn--primary {
  background: var(--canopy);
  color: var(--white);
  box-shadow: 0 10px 25px rgba(34, 197, 94, 0.25);
}

.btn--primary:hover {
  background: var(--canopy-light);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(34, 197, 94, 0.4);
}

.btn--primary:hover .btn-icon {
  transform: translateX(5px);
}

.section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--canopy);
  padding: 0.5rem 1.25rem;
  background: rgba(34, 197, 94, 0.1);
  border-radius: 100px;
}

.section-label--light {
  color: var(--canopy-light);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Animations */
.animate-fade-in-up {
  animation: fadeSlideUp 0.8s var(--ease-out) forwards;
}

.animate-fade-in-up-delayed {
  opacity: 0;
  animation: fadeSlideUp 0.8s var(--ease-out) 0.2s forwards;
}

.animate-scale-in {
  opacity: 0;
  animation: scaleIn 1s var(--ease-out) 0.4s forwards;
}

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

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 768px) {
  .service-hero {
    padding-top: calc(var(--nav-height) + var(--space-xl));
  }
  
  .service-hero__lead {
    font-size: 1.1rem;
    padding-left: var(--space-md);
  }
  
  .service-main-content {
    margin-top: -var(--space-xl);
  }
}
</style>
