<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Helper pour obtenir les chemins d'images avec la base URL
const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`

const team = [
  {
    name: 'Johan Michaux',
    role: 'Directeur',
    bio: 'Docteur en Sciences de l\'Université de Liège, directeur de recherches au FNRS. Spécialiste de l\'utilisation des outils génétiques pour l\'étude de la biodiversité depuis plus de 30 ans. Auteur de plus de 180 articles scientifiques internationaux.',
    photo: getImagePath('images/team/johan-michaux.png'),
    initials: 'JM',
    color: '#0A4A2E',
  },
  {
    name: 'Adrien André',
    role: 'PhD — Coordinateur',
    bio: 'Doctorat sur l\'expansion géographique de Peromyscus leucopus au Canada (McGill). Expert en séquençage nouvelle génération et détection de pathogènes (Borrelia). Responsable des pipelines bio-informatiques.',
    photo: getImagePath('images/team/adrien-andre.jpg'),
    initials: 'AA',
    color: '#22C55E',
  },
  {
    name: 'Anaïs Beaumariage',
    role: 'Biologiste — Coordinatrice',
    bio: 'A rejoint le GeCoLab en 2024. Coordonne des projets allant de l\'identification d\'espèces cryptiques au suivi de la dynamique des populations (chat forestier, lynx, chauves-souris, loup, desman).',
    photo: getImagePath('images/team/anais-beaumariage.jpg'),
    initials: 'AB',
    color: '#34D399',
  },
  {
    name: 'Jonathan Drugmand',
    role: 'Biologiste — Bioinformaticien',
    bio: 'Master en biologie environnementale (UCLouvain). Poste hybride combinant manipulations en laboratoire et analyses bioinformatiques sur les microsatellites. Référent pour le suivi génétique du loup.',
    photo: getImagePath('images/team/jonathan-drugmand.jpg'),
    initials: 'JD',
    color: '#0C2460',
  },
  {
    name: 'Edeline Beine',
    role: 'Technicienne en biotechnologie',
    bio: 'Diplômée de la Haute École de Liège. Spécialisée dans la préparation d\'échantillons pour le NGS et les microsatellites. Rôle central dans les manipulations expérimentales du laboratoire.',
    photo: getImagePath('images/team/edeline-beine.jpg'),
    initials: 'EB',
    color: '#3a3a52',
  },
  {
    name: 'Jérôme Vandromme',
    role: 'Doctorant — Pathogènes',
    bio: 'Thèse sur les pathogènes zoonotiques. Spécialiste du sanglier et du raton-laveur. Utilise des approches métagénomiques pour étudier les prévalences bactériennes dans les populations sauvages.',
    photo: getImagePath('images/team/jerome-vandromme.jpg'),
    initials: 'JV',
    color: '#0e7a4a',
  },
  {
    name: 'Pauline Van Leeuwen',
    role: 'Postdoctorale — Microbiome',
    bio: 'Chercheuse en écologie et sciences du microbiome, à l\'interface entre conservation, interactions hôte-microbiome et approche One Health. Travaux combinant eDNA et métagénomique.',
    photo: getImagePath('images/team/pauline-van-leeuwen.jpg'),
    initials: 'PVL',
    color: '#1a8b5a',
  },
]
</script>

<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__pattern"></div>
      <div class="page-hero__content container">
        <span class="section-label section-label--light">{{ t('about.hero.sectionLabel') }}</span>
        <h1 class="page-hero__title">{{ t('about.hero.title') }}</h1>
        <p class="page-hero__lead">
          {{ t('about.hero.lead') }}
        </p>
      </div>
    </section>

    <!-- Who we are -->
    <section class="whoweare">
      <div class="container">
        <div class="whoweare__grid">
          <div class="whoweare__main">
            <header class="section-header">
              <span class="section-label">{{ t('about.whoWeAre.sectionLabel') }}</span>
              <h2 class="section-title">{{ t('about.whoWeAre.title') }}</h2>
            </header>
            <div class="whoweare__content">
              <p v-html="t('about.whoWeAre.paragraph1')"></p>
              <p>{{ t('about.whoWeAre.paragraph2') }}</p>
              <p>{{ t('about.whoWeAre.paragraph3') }}</p>
            </div>
          </div>
          <div class="whoweare__visual">
            <div class="image-wrapper">
              <img :src="getImagePath('images/about/animal-portrait.jpg')" alt="Espèce étudiée par GeCoLab" loading="lazy">
              <div class="image-accent"></div>
            </div>
            <div class="difference-card">
              <div class="difference-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div class="difference-card__body">
                <h3>{{ t('about.whoWeAre.differenceTitle') }}</h3>
                <p v-html="t('about.whoWeAre.differenceText')"></p>
                <div class="difference-card__footer">
                  <span v-html="t('about.whoWeAre.differenceHighlight')"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="team">
      <div class="container">
        <header class="team__header">
          <span class="section-label">{{ t('about.team.sectionLabel') }}</span>
          <h2 class="section-title">{{ t('about.team.title') }}</h2>
          <p class="team__intro">{{ t('about.team.intro') }}</p>
        </header>

        <div class="team__grid">
          <div v-for="(member, index) in team" :key="member.name" class="member-card" :style="{ '--delay': `${index * 0.1}s` }">
            <div class="member-card__avatar">
              <img v-if="member.photo" :src="member.photo" :alt="member.name" loading="lazy">
              <span v-else :style="{ background: member.color }">{{ member.initials }}</span>
            </div>
            <div class="member-card__info">
              <h3>{{ member.name }}</h3>
              <span class="member-card__role" :style="{ color: member.color }">{{ member.role }}</span>
              <p>{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ═══ PAGE HERO ═══ */
.page-hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-4xl)) 0 var(--space-4xl);
  overflow: hidden;
  background-color: var(--obsidian);
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--obsidian) 0%, var(--forest) 100%);
  opacity: 0.9;
}

.page-hero__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--canopy-light) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.1;
  mask-image: linear-gradient(to bottom, black, transparent);
}

.page-hero__content {
  position: relative;
  z-index: 1;
}

.page-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  color: var(--white);
  line-height: 1.1;
  margin-top: var(--space-md);
  animation: fadeSlideUp 0.8s var(--ease-out) both;
}

.page-hero__lead {
  max-width: 600px;
  margin-top: var(--space-xl);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.25rem;
  line-height: 1.6;
  animation: fadeSlideUp 0.8s var(--ease-out) both;
  animation-delay: 0.2s;
}

/* ═══ UTILITIES ═══ */
.section-label {
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--forest-mid);
  margin-bottom: var(--space-md);
}

.section-label::before {
  content: '';
  width: 24px;
  height: 2px;
  background: currentColor;
  margin-right: var(--space-sm);
}

.section-label--light { color: var(--canopy-light); }

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  line-height: 1.2;
  color: var(--ink);
  margin-bottom: var(--space-xl);
}

/* ═══ WHO WE ARE ═══ */
.whoweare {
  padding: var(--space-4xl) 0;
  background-color: var(--parchment);
}

.whoweare__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--space-4xl);
  align-items: center;
}

.whoweare__content p {
  margin-bottom: var(--space-lg);
  color: var(--ink-light);
  font-size: 1.125rem;
  max-width: 65ch;
}

.whoweare__content p :deep(strong) {
  color: var(--forest);
  font-weight: 600;
}

.whoweare__visual {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--space-2xl);
}

.image-wrapper img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  transition: transform 0.6s var(--ease-out);
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.image-accent {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 60px;
  height: 60px;
  background: var(--canopy-glow-strong);
  border-radius: 50%;
  z-index: -1;
}

.difference-card {
  background: var(--white);
  padding: var(--space-xl);
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--bone);
  display: flex;
  gap: var(--space-lg);
  transform: translateY(-40px);
  margin-left: -40px;
  position: relative;
  z-index: 2;
}

.difference-card__icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: var(--canopy-glow);
  color: var(--forest);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.difference-card h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  margin-bottom: var(--space-xs);
  color: var(--ink);
}

.difference-card p {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--ink-light);
  margin-bottom: var(--space-md);
}

.difference-card__footer {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--forest-mid);
  padding-top: var(--space-md);
  border-top: 1px solid var(--bone);
}

/* ═══ TEAM ═══ */
.team {
  padding: var(--space-4xl) 0;
  background-color: var(--mist);
}

.team__header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.team__header .section-label {
  justify-content: center;
}

.team__header .section-label::before {
  display: none;
}

.team__header .section-label::after {
  content: '';
  width: 24px;
  height: 2px;
  background: currentColor;
  margin-left: var(--space-sm);
}

.team__header .section-title {
  margin-left: auto;
  margin-right: auto;
}

.team__intro {
  font-size: 1.2rem;
  color: var(--slate);
  max-width: 600px;
  margin: 0 auto;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: var(--space-xl);
}

.member-card {
  background: var(--white);
  padding: var(--space-xl);
  border-radius: 20px;
  border: 1px solid var(--bone);
  box-shadow: var(--shadow-sm);
  transition: all 0.4s var(--ease-out);
  display: flex;
  flex-direction: column;
  animation: fadeSlideUp 0.8s var(--ease-out) both;
  animation-delay: var(--delay);
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
  border-color: var(--canopy-light);
}

.member-card__avatar {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: var(--space-lg);
  background: var(--mist);
  flex-shrink: 0;
}

.member-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-card__avatar span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
}

.member-card__info h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--ink);
  margin-bottom: 2px;
}

.member-card__role {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-md);
  display: block;
}

.member-card__info p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ink-light);
  flex-grow: 1;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1024px) {
  .whoweare__grid {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }

  .whoweare__visual {
    max-width: 600px;
    margin: 0 auto;
  }

  .difference-card {
    margin-left: 0;
    transform: translateY(-60px);
  }
}

@media (max-width: 768px) {
  .team__grid {
    grid-template-columns: 1fr;
  }

  .page-hero__title {
    font-size: 3.5rem;
  }
}

@media (max-width: 480px) {
  .difference-card {
    flex-direction: column;
    padding: var(--space-lg);
    gap: var(--space-md);
  }

  .member-card {
    padding: var(--space-lg);
  }
}
</style>

