<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'

const { t } = useI18n()

// Fix for default marker icons in Vite
// @ts-ignore
if (typeof L !== 'undefined' && L.Icon && L.Icon.Default) {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl

  // Use CDN URLs to avoid base path issues with GitHub Pages
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
}

const form = ref({
  name: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
})

const submitted = ref(false)
const isLoading = ref(false)
const error = ref('')
const zoom = ref(15)
const center: any = [50.5842, 5.5595]

async function handleSubmit() {
  isLoading.value = true
  error.value = ''
  
  try {
    const response = await fetch('https://formspree.io/f/xeelnpep', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        organization: form.value.organization,
        subject: form.value.subject,
        message: form.value.message
      })
    })
    
    if (response.ok) {
      submitted.value = true
    } else {
      const data = await response.json()
      error.value = data.error || 'Une erreur est survenue. Veuillez réessayer.'
    }
  } catch (e) {
    error.value = 'Une erreur de connexion est survenue. Veuillez réessayer.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="contact-page">
    
    <!-- Contact content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Info column -->
          

          <!-- Form column -->
          <div class="contact-form-wrapper">
            <div class="form-card" v-if="!submitted">
              <h3>{{ t('contact.form.title') }}</h3>
              <p class="form-card__subtitle">{{ t('contact.form.subtitle') }}</p>

              <form @submit.prevent="handleSubmit" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">{{ t('contact.form.name') }}</label>
                    <input id="name" v-model="form.name" type="text" required :placeholder="t('contact.form.namePlaceholder')">
                  </div>
                  <div class="form-group">
                    <label for="email">{{ t('contact.form.email') }}</label>
                    <input id="email" v-model="form.email" type="email" required :placeholder="t('contact.form.emailPlaceholder')">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="org">{{ t('contact.form.organization') }}</label>
                    <input id="org" v-model="form.organization" type="text" :placeholder="t('contact.form.organizationPlaceholder')">
                  </div>
                  <div class="form-group">
                    <label for="subject">{{ t('contact.form.subject') }}</label>
                    <select id="subject" v-model="form.subject" required>
                      <option value="" disabled>{{ t('contact.form.subjectPlaceholder') }}</option>
                      <option value="devis">{{ t('contact.form.subjectOptions.quote') }}</option>
                      <option value="info">{{ t('contact.form.subjectOptions.info') }}</option>
                      <option value="collaboration">{{ t('contact.form.subjectOptions.collaboration') }}</option>
                      <option value="autre">{{ t('contact.form.subjectOptions.other') }}</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">{{ t('contact.form.message') }}</label>
                  <textarea id="message" v-model="form.message" required rows="5" :placeholder="t('contact.form.messagePlaceholder')"></textarea>
                </div>

                <p v-if="error" class="form-error">{{ error }}</p>

                <button type="submit" class="btn btn--primary btn--lg btn--full" :disabled="isLoading">
                  <span v-if="isLoading">{{ t('contact.form.sending') || 'Envoi...' }}</span>
                  <span v-else>
                    {{ t('contact.form.submit') }}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
                </button>
              </form>
            </div>

            <!-- Success state -->
            <div class="form-success" v-else>
              <div class="form-success__icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M15 24l6 6 12-12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>{{ t('contact.form.successTitle') }}</h3>
              <p>{{ t('contact.form.successText') }}</p>
              <button @click="submitted = false" class="btn btn--ghost-dark">{{ t('contact.form.sendAnother') }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.page-hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-3xl)) 0 var(--space-3xl);
  overflow: hidden;
}

.contact-page {
  margin-top: var(--nav-height);
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--obsidian), var(--forest));
}

.page-hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 40% 60% at 20% 60%, rgba(29, 172, 120, 0.1) 0%, transparent 60%);
}

.page-hero__content { position: relative; z-index: 1; }

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
  font-size: 1.05rem;
  animation: fadeSlideUp 0.7s var(--ease-out) both;
  animation-delay: 0.15s;
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

.section-label--light { color: var(--canopy-light); }
.section-label--light::before { background: var(--canopy-light); }

/* Content */
.contact-content {
  padding: var(--space-3xl) 0 var(--space-4xl);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: var(--space-3xl);
  align-items: start;
}

/* Info cards */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.info-card {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
}

.info-card__icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  color: var(--canopy);
  padding: 6px;
  background: var(--canopy-glow);
  border-radius: 8px;
}

.info-card h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--ink);
  margin-bottom: 4px;
}

.info-card p {
  font-size: 0.87rem;
  color: var(--ink-light);
  line-height: 1.7;
}

.info-card strong {
  color: var(--ink);
}

.phone-number {
  font-size: 1.1rem !important;
  font-weight: 600;
  color: var(--forest) !important;
  font-family: var(--font-display);
}

/* Map */
.map-container {
  border-radius: 12px;
  overflow: hidden;
  background: var(--mist);
  border: 1px solid var(--bone);
}

/* Form */
.form-card {
  padding: var(--space-2xl);
  background: var(--white);
  border-radius: 16px;
  border: 1px solid var(--bone);
  box-shadow: var(--shadow-md);
}

.form-card h3 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  color: var(--ink);
}

.form-card__subtitle {
  margin-top: var(--space-xs);
  color: var(--slate);
  font-size: 0.9rem;
  margin-bottom: var(--space-xl);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.form-group label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: 0.02em;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1px solid var(--bone);
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--ink);
  background: var(--parchment);
  transition: all 0.2s var(--ease-out);
  outline: none;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--slate);
  opacity: 0.6;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--canopy);
  box-shadow: 0 0 0 3px var(--canopy-glow);
  background: var(--white);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-group select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

.form-error {
  color: #dc2626;
  font-size: 0.85rem;
  padding: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: 0.85rem 1.75rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 6px;
  cursor: pointer;
  border: none;
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

.btn--full {
  width: 100%;
}

.btn--ghost-dark {
  background: transparent;
  border: 1px solid var(--bone);
  color: var(--ink-light);
}

.btn--ghost-dark:hover {
  border-color: var(--canopy);
  color: var(--canopy);
}

/* Success */
.form-success {
  text-align: center;
  padding: var(--space-3xl) var(--space-2xl);
  background: var(--white);
  border-radius: 16px;
  border: 1px solid var(--bone);
  box-shadow: var(--shadow-md);
}

.form-success__icon {
  width: 56px;
  height: 56px;
  margin: 0 auto var(--space-lg);
  color: var(--canopy);
  animation: scaleIn 0.5s var(--ease-bounce) both;
}

.form-success h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--ink);
}

.form-success p {
  margin-top: var(--space-sm);
  color: var(--slate);
  margin-bottom: var(--space-xl);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
