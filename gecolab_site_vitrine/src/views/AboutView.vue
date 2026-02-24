<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const team = [
  {
    name: 'Johan Michaux',
    role: 'Directeur',
    bio: 'Docteur en Sciences de l\'Université de Liège, directeur de recherches au FNRS. Spécialiste de l\'utilisation des outils génétiques pour l\'étude de la biodiversité depuis plus de 30 ans. Auteur de plus de 180 articles scientifiques internationaux. Membre des conseils scientifiques des plans nationaux d\'action pour le vison d\'Europe, le desman des Pyrénées et la loutre européenne.',
    photo: '/images/team/johan-michaux.png',
    initials: 'JM',
    color: '#0A4A2E',
  },
  {
    name: 'Adrien André',
    role: 'PhD — Coordinateur & Bio-informaticien',
    bio: 'Doctorat sur l\'expansion géographique de Peromyscus leucopus au Canada (McGill). Expert en séquençage nouvelle génération et détection de pathogènes (Borrelia). Responsable des pipelines bio-informatiques du laboratoire. Développe de nouveaux projets utilisant la technologie de PCR digitale.',
    photo: '/images/team/adrien-andre.jpg',
    initials: 'AA',
    color: '#22C55E',
  },
  {
    name: 'Anaïs Beaumariage',
    role: 'Biologiste — Coordinatrice de projets',
    bio: 'A rejoint le GeCoLab en 2024. Coordonne des projets allant de l\'identification d\'espèces cryptiques au suivi de la dynamique des populations. Travaille sur le chat forestier, lynx, chauves-souris, castor, loutre, loup, desman des Pyrénées, triton crêté et gastéropodes. Engagée dans la vulgarisation scientifique.',
    photo: '/images/team/anais-beaumariage.jpg',
    initials: 'AB',
    color: '#34D399',
  },
  {
    name: 'Jonathan Drugmand',
    role: 'Biologiste — Microsatellites & Loup',
    bio: 'Master en biologie environnementale (UCLouvain). Poste hybride combinant manipulations en laboratoire et analyses bioinformatiques sur les microsatellites. Référent pour le suivi génétique du loup en Wallonie. A voyagé plus d\'un an à vélo en Nouvelle-Zélande avant de rejoindre l\'équipe.',
    photo: '/images/team/jonathan-drugmand.jpg',
    initials: 'JD',
    color: '#0C2460',
  },
  {
    name: 'Edeline Beine',
    role: 'Technicienne en biotechnologie',
    bio: 'Diplômée de la Haute École de Liège. Après une première carrière en cancérologie, elle a rejoint le GeCoLab début 2025. Spécialisée dans la préparation d\'échantillons pour le NGS et les microsatellites. Joue un rôle central dans les manipulations expérimentales du laboratoire.',
    photo: '/images/team/edeline-beine.jpg',
    initials: 'EB',
    color: '#3a3a52',
  },
  {
    name: 'Jérôme Vandromme',
    role: 'Doctorant — Pathogènes zoonotiques',
    bio: 'Après un mémoire sur le sanglier en Wallonie, il réalise sa thèse au sein du laboratoire. Spécialiste du sanglier et du raton-laveur. Utilise des approches métagénomiques pour étudier les prévalences des pathogènes zoonotiques bactériens dans les populations.',
    photo: '/images/team/jerome-vandromme.jpg',
    initials: 'JV',
    color: '#0e7a4a',
  },
  {
    name: 'Pauline Van Leeuwen',
    role: 'Postdoctorale — Microbiome & One Health',
    bio: 'Chercheuse postdoctorale en écologie et sciences du microbiome, à l\'interface entre conservation de la biodiversité, interactions hôte-microbiome et approche One Health. Impliquée au GeCoLab depuis 2017. Ses travaux actuels combinent eDNA, métagénomique et écologie de terrain.',
    photo: '/images/team/pauline-van-leeuwen.jpg',
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
            <span class="section-label">{{ t('about.whoWeAre.sectionLabel') }}</span>
            <h2 class="section-title">{{ t('about.whoWeAre.title') }}</h2>
            <p v-html="t('about.whoWeAre.paragraph1')"></p>
            <p>{{ t('about.whoWeAre.paragraph2') }}</p>
            <p>{{ t('about.whoWeAre.paragraph3') }}</p>
          </div>
          <div class="whoweare__side">
            <div class="whoweare__photo">
              <img src="/images/about/animal-portrait.jpg" alt="Espèce étudiée par GeCoLab" loading="lazy">
            </div>
            <div class="difference-card">
              <h3>{{ t('about.whoWeAre.differenceTitle') }}</h3>
              <p v-html="t('about.whoWeAre.differenceText')"></p>
              <div class="difference-card__highlight">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 11l-3-3 1.5-1.5L9 10l3.5-3.5L14 8l-5 5z" fill="currentColor"/></svg>
                <span v-html="t('about.whoWeAre.differenceHighlight')"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="team">
      <div class="container">
        <div class="team__header">
          <span class="section-label">{{ t('about.team.sectionLabel') }}</span>
          <h2 class="section-title">{{ t('about.team.title') }}</h2>
          <p class="team__intro">{{ t('about.team.intro') }}</p>
        </div>

        <div class="team__grid">
          <div v-for="member in team" :key="member.name" class="member-card">
            <div class="member-card__avatar">
              <img v-if="member.photo" :src="member.photo" :alt="member.name" loading="lazy">
              <span v-else :style="{ background: member.color }">{{ member.initials }}</span>
            </div>
            <div class="member-card__info">
              <h3>{{ member.name }}</h3>
              <span class="member-card__role">{{ member.role }}</span>
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
  padding: calc(var(--nav-height) + var(--space-3xl)) 0 var(--space-3xl);
  overflow: hidden;
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--obsidian) 0%, var(--forest) 100%);
}

.page-hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 80% at 30% 50%, rgba(29, 172, 120, 0.08) 0%, transparent 60%);
}

.page-hero__content {
  position: relative;
  z-index: 1;
}

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
  font-size: 1.26rem;
  line-height: 1.7;
  animation: fadeSlideUp 0.7s var(--ease-out) both;
  animation-delay: 0.15s;
}

.section-label {
  display: inline-block;
  font-size: 0.84rem;
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

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 4.8vw, 3rem);
  line-height: 1.2;
  color: var(--ink);
  max-width: 600px;
}

.section-title--light { color: var(--white); }

/* ═══ WHO WE ARE ═══ */
.whoweare {
  padding: var(--space-4xl) 0;
}

.whoweare__grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--space-3xl);
  align-items: start;
}

.whoweare__main p {
  margin-top: var(--space-lg);
  color: var(--ink-light);
  font-size: 1.14rem;
}

.whoweare__main strong {
  color: var(--ink);
  font-weight: 600;
}

.whoweare__photo {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: var(--space-xl);
}

.whoweare__photo img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s var(--ease-out);
}

.whoweare__photo:hover img {
  transform: scale(1.03);
}

.difference-card {
  background: var(--white);
  border-radius: 12px;
  padding: var(--space-2xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--bone);
  position: relative;
}

.difference-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--canopy), var(--forest));
  border-radius: 12px 12px 0 0;
}

.difference-card h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--ink);
  margin-bottom: var(--space-md);
}

.difference-card p {
  color: var(--ink-light);
  font-size: 1.08rem;
  line-height: 1.7;
}

.difference-card em {
  color: var(--canopy);
  font-style: italic;
}

.difference-card strong {
  color: var(--ink);
}

.difference-card__highlight {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
  padding: var(--space-md);
  background: var(--canopy-glow);
  border-radius: 8px;
  font-size: 1.02rem;
  color: var(--forest);
  line-height: 1.6;
}

.difference-card__highlight svg {
  flex-shrink: 0;
  color: var(--canopy);
  margin-top: 2px;
}

.difference-card__highlight strong {
  color: var(--forest);
}

/* ═══ TEAM ═══ */
.team {
  padding: var(--space-4xl) 0;
  background: var(--mist);
}

.team__header {
  margin-bottom: var(--space-3xl);
}

.team__intro {
  margin-top: var(--space-md);
  color: var(--slate);
  font-size: 1.14rem;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.member-card {
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: var(--white);
  border-radius: 12px;
  border: 1px solid var(--bone);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--ease-out);
}

.member-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.member-card__avatar {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--mist);
}

.member-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s var(--ease-out);
}

.member-card:hover .member-card__avatar img {
  transform: scale(1.05);
}

.member-card__avatar span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-family: var(--font-display);
  font-size: 1.1rem;
  border-radius: 12px;
}

.member-card__info h3 {
  font-family: var(--font-display);
  font-size: 1.32rem;
  color: var(--ink);
}

.member-card__role {
  display: block;
  font-size: 0.936rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--canopy);
  margin-top: 2px;
  margin-bottom: var(--space-sm);
}

.member-card__info p {
  font-size: 1rem;
  color: var(--ink-light);
  line-height: 1.65;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 968px) {
  .whoweare__grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .team__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .member-card {
    flex-direction: column;
  }
}
</style>
