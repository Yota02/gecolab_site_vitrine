<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useRandomLogo } from '@/composables/useRandomLogo'
import { getAllPartners } from '@/data/partners'

const { t } = useI18n()
const router = useRouter()

const visible = ref(false)
const parallaxOffset = ref(0)
const heroBgRef = ref<HTMLElement>()

const { currentLogo, changeLogo } = useRandomLogo()
const partners = getAllPartners()

// Helper pour obtenir les chemins d'images avec la base URL
const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`

onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
  
  // Parallax scroll handler
  const handleScroll = () => {
    if (heroBgRef.value) {
      const scrolled = window.pageYOffset
      // Parallax factor: move at 30% of scroll speed for subtle effect
      parallaxOffset.value = scrolled * 0.3
    }
  }
  
  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Store cleanup function
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  // Change logo on every route change
  router.afterEach(() => {
    changeLogo()
  })
})

const stats = computed(() => [
  { value: '180+', label: t('home.stats.publications') },
  { value: '25+', label: t('home.stats.experience') },
  { value: '10+', label: t('home.stats.species') },
])

const heroBgStyle = computed(() => ({
  '--parallax-y': `${parallaxOffset.value}px`,
  '--hero-bg-image': `url('${getImagePath('images/services/loutre2.jpg')}')`
}))

</script>

<template>
  <div class="home" :class="{ visible }">
    <!-- ═══ HERO ═══ -->
    <section class="hero">
      <div class="hero__bg" ref="heroBgRef" :style="heroBgStyle">
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
        
        <div class="hero__title-container">
          <img v-if="currentLogo" :src="currentLogo" alt="Logo animal" class="hero__animal-logo" />
          <h1 class="hero__title">
            <span class="hero__title-ge">Ge</span><span class="hero__title-co">Co</span><span class="hero__title-lab">Lab</span>
          </h1>
        </div>
        <p class="hero__subtitle">{{ t('home.hero.subtitle') }}</p>
        <div class="hero__affiliation">
          <div class="hero__affiliation-badge">
            <img :src="getImagePath('images/logos/liege.png')" alt="Logo Université de Liège" class="hero__logo">
            <div class="hero__affiliation-text">
              <span class="hero__affiliation-label">{{ t('home.hero.affiliation') }}</span>
              <span class="hero__affiliation-sub">Université de Liège</span>
            </div>
          </div>
        </div>
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
             
             <!-- Stats integrated into intro -->
             <div class="intro__stats">
               <div v-for="stat in stats" :key="stat.label" class="stat-item">
                 <span class="stat-value">{{ stat.value }}</span>
                 <span class="stat-label">{{ stat.label }}</span>
               </div>
             </div>
           </div>
           <div class="intro__highlight">
             <div class="intro__mosaic">
               <div class="intro__mosaic-item intro__mosaic-item--main">
                 <img :src="getImagePath('images/about/animal-portrait.jpg')" alt="Espèce étudiée">
               </div>
               <div class="intro__mosaic-item intro__mosaic-item--sub">
                 <img :src="getImagePath('images/hero/grenouille-rousse.jpg')" alt="Grenouille rousse">
               </div>
               <div class="intro__mosaic-item intro__mosaic-item--sub2">
                 <img :src="getImagePath('images/services/chat-forestier.jpg')" alt="Chat forestier">
               </div>
             </div>
             <div class="intro__highlight-card">
               <h3>{{ t('home.intro.highlightTitle') }}</h3>
               <p v-html="t('home.intro.highlightText')"></p>
             </div>
           </div>
         </div>
      </div>
    </section>

    <!-- ═══ SPECIALTY ═══ -->
    <section class="specialty">
      <div class="container">
        <div class="specialty__header">
          <span class="specialty__label">{{ t('home.specialty.sectionLabel') }}</span>
          <h2 class="specialty__title">
            <span class="specialty__title-main">Les analyses</span>
            <span class="specialty__highlight">non invasives</span>
          </h2>
          <p class="specialty__text">
            {{ t('home.specialty.text') }}
          </p>
        </div>

        <div class="specialty__cards">
          <!-- Service 1 -->
          <article class="specialty__card">
            <div class="specialty__card-number">01</div>
            <div class="specialty__card-visual">
              <img :src="getImagePath('images/services/riviere.jpg')"
                   alt="Milieux aquatiques"
                   class="specialty__card-image">
            </div>
            <div class="specialty__card-body">
              <h3 class="specialty__card-title">{{ t('home.specialty.aquaticTitle') }}</h3>
              <p class="specialty__card-description">{{ t('home.specialty.aquaticText') }}</p>
            </div>
          </article>

          <!-- Service 2 -->
          <article class="specialty__card">
            <div class="specialty__card-number">02</div>
            <div class="specialty__card-visual">
              <img :src="getImagePath('images/services/terrain-terrestre.jpg')"
                   alt="Milieux terrestres"
                   class="specialty__card-image">
            </div>
            <div class="specialty__card-body">
              <h3 class="specialty__card-title">{{ t('home.specialty.terrestrialTitle') }}</h3>
              <p class="specialty__card-description">{{ t('home.specialty.terrestrialText') }}</p>
            </div>
          </article>

          <!-- Service 3 -->
          <article class="specialty__card">
            <div class="specialty__card-number">03</div>
            <div class="specialty__card-visual">
              <img :src="getImagePath('images/hero/echantillon1.jpg')"
                   alt="ADN dégradé"
                   class="specialty__card-image">
            </div>
            <div class="specialty__card-body">
              <h3 class="specialty__card-title">{{ t('home.specialty.degradedTitle') }}</h3>
              <p class="specialty__card-description">{{ t('home.specialty.degradedText') }}</p>
            </div>
          </article>
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
  justify-content: flex-start;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero__bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--obsidian) var(--hero-bg-image, none) no-repeat center center / cover;
  will-change: transform;
  transform: translateY(var(--parallax-y, 0));
}

.hero__gradient {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    radial-gradient(ellipse 80% 60% at 50% 40%, rgba(11, 61, 46, 0.6) 0%, transparent 70%);
}

.hero__dna {
  position: absolute;
  left: 5%;
  top: 0;
  height: 100%;
  width: 120px;
  opacity: 0.4;
  animation: dnaFloat 20s linear infinite;
}

.hero__dna--right {
  left: auto;
  right: 5%;
  animation: dnaFloat 25s linear infinite reverse;
}

@keyframes dnaFloat {
  from { transform: translateY(0); }
  to { transform: translateY(-100px); }
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: left;
  padding-top: var(--nav-height);
  width: 100%;
}

.hero__title-container {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  margin-bottom: var(--space-md);
}

.hero__animal-logo {
  width: clamp(4rem, 10vw, 7rem);
  height: auto;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 12vw, 9rem);
  line-height: 0.9;
  font-weight: 700;
  text-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

.hero__title-ge { color: #fff; }
.hero__title-co { color: var(--canopy); }
.hero__title-lab { color: #fff; font-weight: 300; letter-spacing: 0.05em; }

.hero__subtitle {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  color: #fff;
  margin-top: var(--space-xs);
}

.hero__affiliation {
  display: flex;
  margin-top: var(--space-lg);
}

.hero__affiliation-badge {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  padding: var(--space-sm) var(--space-lg);
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero__logo {
  height: 40px;
  width: auto;
}

.hero__affiliation-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.hero__affiliation-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.02em;
}

.hero__affiliation-sub {
  font-size: 0.75rem;
  color: var(--canopy);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero__lead {
  max-width: 580px;
  margin: var(--space-xl) 0 0;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
}

.hero__scroll {
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  color: #fff;
  opacity: 0.6;
  animation: fadeIn 1s ease both 1.5s;
}

.hero__scroll-text {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.hero__scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--canopy), transparent);
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  50.1% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ═══ INTRO ═══ */
.intro {
  padding: var(--space-4xl) 0;
  background: linear-gradient(to bottom, var(--parchment), var(--white));
}

.intro__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--space-4xl);
  align-items: center;
}

.intro__text .section-label {
  text-align: left;
  padding-left: 0;
}

.intro__text .section-label::before {
  display: none;
}

.intro__text .section-title {
  text-align: left;
  margin: 0 0 var(--space-xl);
  max-width: none;
}

.intro__text p {
  margin-bottom: var(--space-lg);
  color: var(--slate);
  font-size: 1.125rem;
  line-height: 1.8;
}

.intro__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-3xl);
  padding-top: var(--space-2xl);
  border-top: 1px solid var(--bone);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--forest);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--slate);
  margin-top: var(--space-xs);
  line-height: 1.3;
}

.intro__highlight {
  position: relative;
}

.intro__mosaic {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: var(--space-md);
  height: 500px;
  margin-bottom: var(--space-2xl);
}

.intro__mosaic-item {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform 0.4s var(--ease-out);
}

.intro__mosaic-item:hover {
  transform: scale(1.02);
  z-index: 10;
}

.intro__mosaic-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro__mosaic-item--main {
  grid-column: 1 / 5;
  grid-row: 1 / 5;
}

.intro__mosaic-item--sub {
  grid-column: 4 / 7;
  grid-row: 4 / 7;
  border: 4px solid var(--white);
}

.intro__mosaic-item--sub2 {
  grid-column: 5 / 7;
  grid-row: 1 / 3;
}

.intro__highlight-card {
  position: absolute;
  bottom: -20px;
  left: -40px;
  right: 40px;
  background: var(--white);
  padding: var(--space-xl);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  border-left: 4px solid var(--canopy);
  z-index: 5;
}

/* ═══ SPECIALTY ═══ */
.specialty {
  padding: var(--space-4xl) 0;
  background: var(--mist);
}

.specialty__header {
  max-width: 720px;
  margin: 0 auto var(--space-3xl);
  text-align: center;
}

.specialty__label {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--canopy);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-xs);
  border-bottom: 2px solid var(--canopy);
}

.specialty__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
  margin-bottom: var(--space-lg);
  color: var(--ink);
}

.specialty__title-main {
  display: block;
  font-weight: 600;
}

.specialty__highlight {
  color: var(--canopy);
  font-style: normal;
  font-weight: 700;
}

.specialty__text {
  color: var(--slate);
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
  text-align: justify;
}

.specialty__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);
  max-width: 1200px;
  margin: 0 auto;
}

.specialty__card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--bone);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--ease-out);
}

.specialty__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(29, 172, 120, 0.3);
}

.specialty__card-number {
  position: absolute;
  top: var(--space-md);
  left: var(--space-md);
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(29, 172, 120, 0.1);
  line-height: 1;
  z-index: 1;
}

.specialty__card-visual {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--mist);
}

.specialty__card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s var(--ease-out);
}

.specialty__card:hover .specialty__card-image {
  transform: scale(1.05);
}

.specialty__card-body {
  padding: var(--space-xl);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.specialty__card-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: var(--space-md);
  line-height: 1.3;
}

.specialty__card-description {
  color: var(--slate);
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
}

/* ═══ PARTNERS STRIP ═══ */
.partners-strip {
  padding: var(--space-4xl) 0;
  background: var(--white);
  overflow: hidden;
}

.partners-strip .section-title {
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--slate);
  margin-bottom: var(--space-3xl);
  opacity: 0.7;
}

.partners-strip__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-2xl) var(--space-4xl);
}

.partner-logo {
  height: 45px;
  width: auto;
  filter: grayscale(1) opacity(0.5);
  transition: all 0.4s var(--ease-out);
}

.partner-logo:hover {
  filter: grayscale(0) opacity(1);
  transform: translateY(-2px);
}

.partner-logo img {
  height: 100%;
  width: auto;
  object-fit: contain;
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
    gap: var(--space-3xl);
  }

  .intro__text .section-title {
    text-align: center;
  }

  .intro__text p {
    text-align: justify;
  }

  .intro__stats {
    justify-items: center;
  }

  .intro__highlight-card {
    left: var(--space-md);
    right: var(--space-md);
    bottom: -var(--space-xl);
  }

  .specialty__cards {
    grid-template-columns: 1fr;
  }

  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .partners-strip__list {
    gap: var(--space-xl) var(--space-2xl);
  }
}

@media (max-width: 768px) {
  .hero__title-container {
    flex-direction: column;
    text-align: center;
    gap: var(--space-md);
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .intro__mosaic {
    height: 400px;
  }

  .intro__stats {
    grid-template-columns: 1fr;
    text-align: center;
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

  .specialty__cards {
    gap: var(--space-lg);
  }

  .partner-logo {
    height: 35px;
  }
}

/* ═══ ANIMATIONS ═══ */
.intro, .specialty, .partners-strip, .cta {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s var(--ease-out);
}

.home.visible .intro,
.home.visible .specialty,
.home.visible .partners-strip,
.home.visible .cta {
  opacity: 1;
  transform: translateY(0);
}

.home.visible .specialty {
  transition-delay: 0.2s;
}

.home.visible .partners-strip {
  transition-delay: 0.3s;
}

.home.visible .cta {
  transition-delay: 0.4s;
}
</style>
