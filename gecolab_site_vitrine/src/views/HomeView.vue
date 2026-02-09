<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const visible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
})

const stats = computed(() => [
  { value: '180+', label: t('home.stats.publications') },
  { value: '25+', label: t('home.stats.experience') },
  { value: '7', label: t('home.stats.researchers') },
  { value: '10+', label: t('home.stats.species') },
])
</script>

<template>
  <div class="home" :class="{ visible }">
    <!-- ═══ HERO ═══ -->
    <section class="hero">
      <div class="hero__bg">
        <div class="hero__gradient"></div>
        <div class="hero__noise"></div>
        <!-- DNA decorative helix -->
        <svg class="hero__dna" viewBox="0 0 120 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 0C20 50 100 100 60 150C20 200 100 250 60 300C20 350 100 400 60 450C20 500 100 550 60 600" stroke="rgba(29,172,120,0.08)" stroke-width="1"/>
          <path d="M60 0C100 50 20 100 60 150C100 200 20 250 60 300C100 350 20 400 60 450C100 500 20 550 60 600" stroke="rgba(29,172,120,0.08)" stroke-width="1"/>
          <circle v-for="i in 12" :key="i" cx="60" :cy="i * 50" r="2" fill="rgba(29,172,120,0.12)"/>
        </svg>
        <svg class="hero__dna hero__dna--right" viewBox="0 0 120 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 0C20 50 100 100 60 150C20 200 100 250 60 300C20 350 100 400 60 450C20 500 100 550 60 600" stroke="rgba(29,172,120,0.05)" stroke-width="1"/>
          <path d="M60 0C100 50 20 100 60 150C100 200 20 250 60 300C100 350 20 400 60 450C100 500 20 550 60 600" stroke="rgba(29,172,120,0.05)" stroke-width="1"/>
        </svg>
      </div>

      <div class="hero__content container">
       
        <h1 class="hero__title">
          <span class="hero__title-ge">Ge</span><span class="hero__title-co">Co</span><span class="hero__title-lab">LAB</span>
        </h1>
        <p class="hero__subtitle">{{ t('home.hero.subtitle') }}</p>
        <p class="hero__lead">
          {{ t('home.hero.lead') }}
        </p>
        <div class="hero__actions">
          <RouterLink to="/services" class="btn btn--primary">
            {{ t('home.hero.discoverServices') }}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </RouterLink>
          <RouterLink to="/contact" class="btn btn--ghost">
            {{ t('home.hero.contactUs') }}
          </RouterLink>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hero__scroll">
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <!-- ═══ INTRODUCTION ═══ -->
    <section class="intro">
      <div class="container">
         <div class="intro__grid">
           <div class="intro__text">
             <span class="section-label">{{ t('home.intro.sectionLabel') }}</span>
             <h2 class="section-title">{{ t('home.intro.title') }}</h2>
             <p v-html="t('home.intro.paragraph1')"></p>
             <p v-html="t('home.intro.paragraph2')"></p>
           </div>
           <div class="intro__highlight">
             <div class="intro__photo-mosaic">
               <img src="/images/about/animal-portrait.jpg" alt="Espèce étudiée par GeCoLab" class="intro__mosaic-img">
             </div>
             <div class="intro__highlight-card">
               <div class="intro__highlight-icon">
                 <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M24 4L24 8M24 40L24 44M4 24H8M40 24H44M10 10L13 13M35 35L38 38M38 10L35 13M13 35L10 38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                   <circle cx="24" cy="24" r="10" stroke="currentColor" stroke-width="1.5"/>
                   <path d="M20 24C20 21.5 22 19 24 19C26 19 28 21.5 28 24C28 26.5 26 29 24 29C22 29 20 26.5 20 24Z" stroke="currentColor" stroke-width="1"/>
                 </svg>
               </div>
               <h3>{{ t('home.intro.highlightTitle') }}</h3>
               <p v-html="t('home.intro.highlightText')"></p>
             </div>
           </div>
         </div>
      </div>
    </section>

    <!-- ═══ SPECIALTY ═══ -->
    <section class="specialty">
      <div class="specialty__bg"></div>
      <div class="container">
         <div class="specialty__inner">
           <span class="section-label section-label--light">{{ t('home.specialty.sectionLabel') }}</span>
           <h2 class="section-title section-title--light">{{ t('home.specialty.title') }}</h2>
           <p class="specialty__text">
             {{ t('home.specialty.text') }}
           </p>
           <div class="specialty__methods">
             <div class="specialty__method">
               <div class="specialty__method-img">
                 <img src="/images/services/riviere.jpg" alt="Rivière - milieu aquatique" loading="lazy">
               </div>
               <h4>{{ t('home.specialty.aquaticTitle') }}</h4>
               <p>{{ t('home.specialty.aquaticText') }}</p>
             </div>
             <div class="specialty__method">
               <div class="specialty__method-img">
                 <img src="/images/services/terrain-terrestre.jpg" alt="Terrain terrestre" loading="lazy">
               </div>
               <h4>{{ t('home.specialty.terrestrialTitle') }}</h4>
               <p>{{ t('home.specialty.terrestrialText') }}</p>
             </div>
             <div class="specialty__method">
               <div class="specialty__method-img">
                 <img src="/images/hero/echantillon1.jpg" alt="Échantillon non invasif" loading="lazy">
               </div>
               <h4>{{ t('home.specialty.degradedTitle') }}</h4>
               <p>{{ t('home.specialty.degradedText') }}</p>
             </div>
           </div>
         </div>
      </div>
    </section>

    <!-- ═══ STATS ═══ -->
    <section class="stats">
      <div class="container">
        <div class="stats__grid">
          <div v-for="(stat, i) in stats" :key="i" class="stats__item" :style="{ animationDelay: `${i * 0.1 + 0.2}s` }">
            <span class="stats__value">{{ stat.value }}</span>
            <span class="stats__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="cta">
      <div class="container">
         <div class="cta__card">
           <div class="cta__content">
             <h2>{{ t('home.cta.title') }}</h2>
             <p>{{ t('home.cta.text') }}</p>
           </div>
           <RouterLink to="/contact" class="btn btn--primary btn--lg">
             {{ t('home.cta.quoteButton') }}
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
           </RouterLink>
         </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ═══ HERO ═══ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: var(--obsidian) url('/images/hero/banner.jpg') no-repeat center center / cover;
}

.hero__gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 40%, rgba(11, 61, 46, 0.6) 0%, transparent 70%),
    radial-gradient(ellipse 40% 50% at 80% 60%, rgba(29, 172, 120, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 20% 80%, rgba(12, 36, 96, 0.15) 0%, transparent 60%);
}

.hero__noise {
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 256px;
}

.hero__dna {
  position: absolute;
  left: 8%;
  top: 0;
  height: 100%;
  width: 120px;
  opacity: 0.5;
}

.hero__dna--right {
  left: auto;
  right: 8%;
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: var(--nav-height);
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  background: rgba(29, 172, 120, 0.08);
  border: 1px solid rgba(29, 172, 120, 0.15);
  border-radius: 100px;
  color: var(--canopy);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  animation: fadeSlideUp 0.8s var(--ease-out) both;
  animation-delay: 0.1s;
}

.hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--canopy);
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.5); }
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(4rem, 12vw, 9rem);
  line-height: 0.95;
  margin-top: var(--space-xl);
  animation: fadeSlideUp 0.8s var(--ease-out) both;
  animation-delay: 0.25s;
}

.hero__title-ge { color: #000; }
.hero__title-co { color: var(--canopy); }
.hero__title-lab {
  color: #333;
  font-size: 0.6em;
  letter-spacing: 0.15em;
}

.hero__subtitle {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  color: #333;
  margin-top: var(--space-md);
  animation: fadeSlideUp 0.8s var(--ease-out) both;
  animation-delay: 0.4s;
}

.hero__subtitle em {
  color: var(--canopy);
  font-style: italic;
}

.hero__lead {
  max-width: 540px;
  margin: var(--space-xl) auto 0;
  font-size: 1.05rem;
  color: #555;
  line-height: 1.8;
  animation: fadeSlideUp 0.8s var(--ease-out) both;
  animation-delay: 0.55s;
}

.hero__actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-2xl);
  animation: fadeSlideUp 0.8s var(--ease-out) both;
  animation-delay: 0.7s;
}

.hero__scroll {
  position: absolute;
  bottom: var(--space-2xl);
  left: 50%;
  transform: translateX(-50%);
  animation: fadeIn 1s var(--ease-out) both;
  animation-delay: 1.2s;
}

.hero__scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--canopy), transparent);
  animation: scrollPulse 2s ease infinite;
}

@keyframes scrollPulse {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  50.01% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

.hero__scroll {
  position: absolute;
  bottom: var(--space-2xl);
  left: 50%;
  transform: translateX(-50%);
  animation: fadeIn 1s var(--ease-out) both;
  animation-delay: 1.2s;
}

.hero__scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--canopy), transparent);
  animation: scrollPulse 2s ease infinite;
}

.hero__photo {
  position: relative;
  width: 140px;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(29, 172, 120, 0.2);
  transition: all 0.4s var(--ease-out);
}

.hero__photo:hover {
  transform: scale(1.08) translateY(-4px);
  border-color: var(--canopy);
  box-shadow: 0 12px 30px rgba(29, 172, 120, 0.2);
}

.hero__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}

.hero__photo:hover img {
  transform: scale(1.1);
}

.hero__photo span {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 8px;
  background: linear-gradient(transparent, rgba(10, 15, 13, 0.85));
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-align: center;
}

/* ═══ BUTTONS ═══ */
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

.btn--ghost {
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.btn--ghost:hover {
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.btn--lg {
  padding: 1rem 2.25rem;
  font-size: 0.95rem;
}

/* ═══ SECTION PRIMITIVES ═══ */
.section-label {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--canopy);
  margin-bottom: var(--space-md);
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

.section-label--light {
  color: var(--canopy-light);
}

.section-label--light::before {
  background: var(--canopy-light);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.2;
  color: var(--ink);
  max-width: 600px;
}

.section-title--light {
  color: var(--white);
}

/* ═══ INTRO ═══ */
.intro {
  padding: var(--space-4xl) 0;
}

.intro__grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-3xl);
  align-items: start;
}

.intro__text p {
  margin-top: var(--space-lg);
  color: var(--ink-light);
  font-size: 0.95rem;
}

.intro__text strong {
  color: var(--ink);
  font-weight: 600;
}

.intro__photo-mosaic {
  margin-bottom: var(--space-xl);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.intro__mosaic-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s var(--ease-out);
}

.intro__photo-mosaic:hover .intro__mosaic-img {
  transform: scale(1.03);
}

.intro__highlight-card {
  background: var(--white);
  border-radius: 12px;
  padding: var(--space-2xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--bone);
  position: relative;
  overflow: hidden;
}

.intro__highlight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--canopy), var(--forest));
}

.intro__highlight-icon {
  width: 48px;
  height: 48px;
  color: var(--canopy);
  margin-bottom: var(--space-lg);
}

.intro__highlight-card h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--ink);
  margin-bottom: var(--space-md);
}

.intro__highlight-card p {
  color: var(--ink-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

.intro__highlight-card strong {
  color: var(--forest);
}

/* ═══ SPECIALTY ═══ */
.specialty {
  position: relative;
  padding: var(--space-4xl) 0;
  overflow: hidden;
}

.specialty__bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, var(--obsidian) 0%, var(--forest) 50%, #0a2a1e 100%);
}

.specialty__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231DAC78' fill-opacity='0.03'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E");
}

.specialty__inner {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.specialty__text {
  margin-top: var(--space-xl);
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.specialty__methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  margin-top: var(--space-3xl);
}

.specialty__method {
  text-align: center;
  padding: var(--space-xl) var(--space-lg);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(29, 172, 120, 0.1);
  transition: all 0.3s var(--ease-out);
}

.specialty__method:hover {
  background: rgba(29, 172, 120, 0.06);
  border-color: rgba(29, 172, 120, 0.2);
  transform: translateY(-4px);
}

.specialty__method-img {
  width: 100%;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: var(--space-md);
}

.specialty__method-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
  filter: brightness(0.85);
}

.specialty__method:hover .specialty__method-img img {
  transform: scale(1.08);
  filter: brightness(1);
}

.specialty__method h4 {
  font-family: var(--font-display);
  color: var(--white);
  font-size: 1.05rem;
  margin-bottom: var(--space-sm);
}

.specialty__method p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
}

/* ═══ STATS ═══ */
.stats {
  padding: var(--space-3xl) 0;
  background: var(--mist);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.stats__item {
  text-align: center;
  padding: var(--space-xl) var(--space-md);
}

.stats__value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--forest);
  line-height: 1;
}

.stats__label {
  display: block;
  margin-top: var(--space-sm);
  font-size: 0.85rem;
  color: var(--slate);
  font-weight: 500;
}

/* ═══ CTA ═══ */
.cta {
  padding: var(--space-3xl) 0 var(--space-4xl);
}

.cta__card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2xl);
  padding: var(--space-2xl) var(--space-3xl);
  background: var(--white);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--bone);
  position: relative;
  overflow: hidden;
}

.cta__card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--canopy), var(--forest));
}

.cta__content h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--ink);
}

.cta__content p {
  margin-top: var(--space-sm);
  color: var(--slate);
  max-width: 480px;
}

.cta .btn--primary {
  white-space: nowrap;
  flex-shrink: 0;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 968px) {
  .intro__grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .specialty__methods {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero__actions {
    flex-direction: column;
    align-items: center;
  }

  .cta__card {
    flex-direction: column;
    text-align: center;
    padding: var(--space-2xl);
  }

  .cta__card::before {
    left: 0;
    right: 0;
    bottom: auto;
    width: auto;
    height: 4px;
  }

  .cta__content p {
    max-width: none;
  }
}
</style>
