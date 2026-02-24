<script setup lang="ts">
const team = [
  {
    name: 'Johan Michaux',
    role: 'Directeur',
    bio: 'Docteur en Sciences de l\'Université de Liège, directeur de recherches au FNRS. Spécialiste de l\'utilisation des outils génétiques pour l\'étude de la biodiversité depuis plus de 30 ans. Auteur de plus de 180 articles scientifiques internationaux. Membre des conseils scientifiques des plans nationaux d\'action pour le vison d\'Europe, le desman des Pyrénées et la loutre européenne.',
    photo: '/images/team/johan-michaux.png',
    initials: 'JM',
    color: '#0B3D2E',
  },
  {
    name: 'Adrien André',
    role: 'PhD — Coordinateur & Bio-informaticien',
    bio: 'Doctorat sur l\'expansion géographique de Peromyscus leucopus au Canada (McGill). Expert en séquençage nouvelle génération et détection de pathogènes (Borrelia). Responsable des pipelines bio-informatiques du laboratoire. Développe de nouveaux projets utilisant la technologie de PCR digitale.',
    photo: '/images/team/adrien-andre.jpg',
    initials: 'AA',
    color: '#1DAC78',
  },
  {
    name: 'Anaïs Beaumariage',
    role: 'Biologiste — Coordinatrice de projets',
    bio: 'A rejoint le GeCoLab en 2024. Coordonne des projets allant de l\'identification d\'espèces cryptiques au suivi de la dynamique des populations. Travaille sur le chat forestier, lynx, chauves-souris, castor, loutre, loup, desman des Pyrénées, triton crêté et gastéropodes. Engagée dans la vulgarisation scientifique.',
    photo: '/images/team/anais-beaumariage.jpg',
    initials: 'AB',
    color: '#2ee89e',
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
    color: '#0d5a3a',
  },
  {
    name: 'Pauline Van Leeuwen',
    role: 'Postdoctorale — Microbiome & One Health',
    bio: 'Chercheuse postdoctorale en écologie et sciences du microbiome, à l\'interface entre conservation de la biodiversité, interactions hôte-microbiome et approche One Health. Impliquée au GeCoLab depuis 2017. Ses travaux actuels combinent eDNA, métagénomique et écologie de terrain.',
    photo: '/images/team/pauline-van-leeuwen.jpg',
    initials: 'PVL',
    color: '#1a6b50',
  },
]

const partners = {
  institutions: [
    'Ministère de l\'Environnement (Luxembourg, Belgique, France)',
    'CIRAD',
    'Office Français de la Biodiversité',
    'MNHN Paris',
    'Gouvernement d\'Andorre',
    'Parc National du Mercantour',
    'Parc National des Écrins',
    'EID',
  ],
  bureaux: [
    'Biotope',
    'Aquascop',
    'Écosphère',
    'WWF',
    'Conservatoire des espaces naturels',
    'LPO',
    'Natagora',
    'GREGE',
    'Lutreola',
  ],
  private: [
    'EDF',
    'Institut Pasteur',
  ],
}
</script>

<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__content container">
        <span class="section-label section-label--light">Le laboratoire</span>
        <h1 class="page-hero__title">À propos</h1>
        <p class="page-hero__lead">
          Un laboratoire de l'Université de Liège au service de la biodiversité depuis plus de 25 ans
        </p>
      </div>
    </section>

    <!-- Who we are -->
    <section class="whoweare">
      <div class="container">
        <div class="whoweare__grid">
          <div class="whoweare__main">
            <span class="section-label">Notre histoire</span>
            <h2 class="section-title">Qui sommes-nous ?</h2>
            <p>
              GeCoLAB est un laboratoire de l'Université de Liège créé par le <strong>Dr Johan Michaux</strong> qui développe des recherches sur la biodiversité à partir d'outils génétiques depuis plus de 25 ans.
            </p>
            <p>
              Ses recherches ont eu comme objectif fondamental de mieux comprendre l'histoire évolutive et la taxonomie d'une série d'espèces de vertébrés. Elles ont également des objectifs appliqués tels que mieux comprendre la résistance des espèces face aux changements climatiques, étudier l'impact de la fragmentation des habitats sur la survie à long terme d'espèces menacées, ou mettre en place de nouvelles méthodes pour effectuer des inventaires faunistiques en milieu aquatique et terrestre.
            </p>
            <p>
              Ces recherches ont été développées sur un large spectre d'espèces, reprenant notamment de nombreux mammifères aquatiques ou semi-aquatiques (ours polaire, marsouin commun, vison d'Europe, castor européen, loutre européenne, desman des Pyrénées, musaraigne aquatique…) mais également des amphibiens ou des poissons.
            </p>
          </div>
          <div class="whoweare__side">
            <div class="whoweare__photo">
              <img src="/images/about/animal-portrait.jpg" alt="Espèce étudiée par GeCoLab" loading="lazy">
            </div>
            <div class="difference-card">
              <h3>Notre différence</h3>
              <p>
                Par notre expertise en génétique <em>et</em> en tant que naturalistes et écologues, nous ne proposons pas uniquement un travail de prestataire rendant une liste d'espèces — nous vous aidons dans <strong>l'interprétation des données</strong>, la mise en place des <strong>protocoles de collecte</strong> et le développement de <strong>projets concrets</strong>.
              </p>
              <div class="difference-card__highlight">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 11l-3-3 1.5-1.5L9 10l3.5-3.5L14 8l-5 5z" fill="currentColor"/></svg>
                <span>Base de données génétique de références <strong>privée et unique</strong>, développée avec Biotope et Aquascop</span>
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
          <span class="section-label">Les personnes</span>
          <h2 class="section-title">L'équipe</h2>
          <p class="team__intro">3 docteurs en biologie, 2 biologistes de niveau master, 1 technicienne de laboratoire et 1 chercheuse postdoctorale</p>
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

    <!-- Partners -->
    <section class="partners">
      <div class="partners__bg"></div>
      <div class="container">
        <div class="partners__inner">
          <span class="section-label section-label--light">Collaborations</span>
          <h2 class="section-title section-title--light">Nos partenaires de confiance</h2>
          <p class="partners__intro">
            Gecolab collabore avec plus de 20 institutions, associations et entreprises de premier plan.
          </p>

          <div class="partners__grid">
            <div class="partners__col">
              <h4>Institutions publiques</h4>
              <ul>
                <li v-for="p in partners.institutions.slice(0, 4)" :key="p">{{ p }}</li>
              </ul>
            </div>
            <div class="partners__col">
              <h4>Bureaux d'études & Associations</h4>
              <ul>
                <li v-for="p in partners.bureaux.slice(0, 4)" :key="p">{{ p }}</li>
              </ul>
            </div>
            <div class="partners__col">
              <h4>Sociétés privées</h4>
              <ul>
                <li v-for="p in partners.private" :key="p">{{ p }}</li>
              </ul>
            </div>
          </div>

          <div class="partners__cta">
            <RouterLink to="/partenaires" class="partners__link">
              Voir tous nos partenaires
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12" stroke-width="2" stroke-linecap="round"/>
                <polyline points="12 5 19 12 12 19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
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
  font-size: 1.05rem;
  line-height: 1.7;
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

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
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
  font-size: 0.95rem;
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
  font-size: 1.25rem;
  color: var(--ink);
  margin-bottom: var(--space-md);
}

.difference-card p {
  color: var(--ink-light);
  font-size: 0.9rem;
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
  font-size: 0.85rem;
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
  font-size: 0.95rem;
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
  font-size: 1.1rem;
  color: var(--ink);
}

.member-card__role {
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--canopy);
  margin-top: 2px;
  margin-bottom: var(--space-sm);
}

.member-card__info p {
  font-size: 0.83rem;
  color: var(--ink-light);
  line-height: 1.65;
}

/* ═══ PARTNERS ═══ */
.partners {
  position: relative;
  padding: var(--space-4xl) 0;
  overflow: hidden;
}

.partners__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--obsidian), var(--forest));
}

.partners__inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.partners__intro {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: var(--space-md);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.partners__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2xl);
  margin-top: var(--space-2xl);
  text-align: left;
}

.partners__col h4 {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--canopy);
  margin-bottom: var(--space-md);
}

.partners__col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.partners__col li {
  font-size: 0.87rem;
  color: rgba(255, 255, 255, 0.6);
  padding-left: var(--space-md);
  position: relative;
}

.partners__col li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--canopy);
  opacity: 0.5;
}

.partners__cta {
  margin-top: var(--space-2xl);
  text-align: center;
}

.partners__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  background: var(--canopy);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.partners__link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(29, 172, 120, 0.3);
  background: var(--forest);
}

.partners__link svg {
  transition: transform 0.3s ease;
}

.partners__link:hover svg {
  transform: translateX(4px);
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

  .partners__grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}

@media (max-width: 480px) {
  .member-card {
    flex-direction: column;
  }
}
</style>
