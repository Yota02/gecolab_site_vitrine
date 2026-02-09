<script setup lang="ts">
const services = [
  {
    id: 'biodiversite',
    icon: 'search',
    title: 'Inventaire de biodiversité et identification d\'espèces',
    description: 'Effectuez des inventaires faunistiques précis ou identifiez la présence d\'espèces menacées ou invasives sur un site donné grâce à nos outils génétiques.',
    images: [
      { src: '/images/services/riviere.jpg', alt: 'Rivière - milieu aquatique' },
      { src: '/images/services/pompe.jpg', alt: 'Pompe péristaltique' },
      { src: '/images/services/terrain-aquatique.jpg', alt: 'Terrain aquatique' },
    ],
    images2: [
      { src: '/images/services/tube-poils.png', alt: 'Tube à poils' },
      { src: '/images/services/poils-piege.png', alt: 'Poils de piège' },
      { src: '/images/services/terrain-terrestre.jpg', alt: 'Terrain terrestre' },
    ],
    details: [
      {
        subtitle: 'Milieux aquatiques',
        text: 'Recherche de poissons, amphibiens, mammifères aquatiques et macro invertébrés à partir de prélèvements d\'eau via capsules filtrantes et pompes péristaltiques.'
      },
      {
        subtitle: 'Milieux terrestres',
        text: 'Collecte d\'échantillons de sol, poils, frottis, fèces, urine et salive grâce à des dispositifs non invasifs développés en collaboration avec le GREGE.'
      },
    ],
    markers: [
      { group: 'Poissons', markers: '3 marqueurs', reads: '1–2M reads/marqueur' },
      { group: 'Mammifères', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
      { group: 'Batraciens', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
      { group: 'Mollusques bivalves', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
      { group: 'Gastéropodes', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
      { group: 'Décapodes', markers: '2 marqueurs', reads: '1–2M reads/marqueur' },
      { group: 'Plantes', markers: '1 marqueur', reads: '2M reads' },
      { group: 'Invertébrés', markers: '1 marqueur', reads: '2M reads' },
      { group: 'Diatomées', markers: '1–3 marqueurs', reads: '1–2M reads/marqueur' },
    ]
  },
  {
    id: 'pcr-digitale',
    icon: 'target',
    title: 'Détection ultra sensible via PCR Digitale',
    description: 'Depuis 2024, nous développons des méthodes de détection ultra sensibles de certaines espèces via l\'utilisation de la PCR digitale.',
    species: [
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
  },
  {
    id: 'regime',
    icon: 'diet',
    title: 'Régime alimentaire',
    image: '/images/services/crotte-mammifere.png',
    description: 'Analyses de régime alimentaire précises à partir de fèces collectées de manière non invasive, via les techniques de séquençage nouvelle génération et de métabarcoding.',
    examples: 'Loutre européenne, loup européen, sanglier, vison d\'Europe, vison d\'Amérique, mangouste de Java, nombreuses espèces de chauves-souris (oreillards, murins, pipistrelles)…'
  },
  {
    id: 'hybridation',
    icon: 'hybrid',
    title: 'Étude des problèmes d\'hybridation',
    image: '/images/services/chat-forestier.jpg',
    description: 'Étude précise des phénomènes d\'hybridation existant entre espèces menacées et espèces domestiques ou invasives.',
    cases: [
      'Chat forestier européen × Chat domestique',
      'Sanglier européen × Cochon domestique',
      'Vison d\'Europe × Putois européen',
    ]
  },
  {
    id: 'effectifs',
    icon: 'population',
    title: 'Détermination d\'effectifs et génétique des populations',
    description: 'Évaluation de la taille des effectifs de populations, analyse de connectivité entre populations isolées, estimation du risque de consanguinité et de la diversité génétique.',
    galleryImages: [
      { src: '/images/services/lion.jpg', alt: 'Lion d\'Afrique' },
      { src: '/images/services/loutre.jpg', alt: 'Loutre européenne' },
      { src: '/images/services/hibou-grand-duc.jpg', alt: 'Hibou Grand Duc' },
    ],
    examples: 'Loutre européenne, loup européen, desman des Pyrénées, vison d\'Europe, cuivré de la bistorte, hibou Grand Duc, lion d\'Afrique, ours polaire…'
  },
  {
    id: 'pathogenes',
    icon: 'bacteria',
    title: 'Identification de pathogènes et microbiomes bactériens',
    image: '/images/services/tique.jpg',
    description: 'Estimation précise des microbiomes bactériens et détection de la présence potentielle d\'agents pathogènes avec une précision supérieure aux technologies classiques.',
    pathogens: 'Borrelia (maladie de Lyme), Bartonella, Yersinia, Bacillus, Leptospira…',
    partners: 'Développé avec l\'Institut Pasteur et l\'Hôpital Universitaire de l\'Université de Liège.'
  },
]

const iconPaths: Record<string, string> = {
  search: 'M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zM11 8v6M8 11h6',
  target: 'M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 4a6 6 0 106 6 6 6 0 00-6-6zm0 4a2 2 0 102 2 2 2 0 00-2-2z',
  diet: 'M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 3c1 0 2.5 1 3 3H9c.5-2 2-3 3-3zm-5 5h10M9 16h6',
  hybrid: 'M8 4a4 4 0 100 8 4 4 0 000-8zM16 4a4 4 0 100 8 4 4 0 000-8zM12 14v6M9 17l3 3 3-3',
  population: 'M12 2a3 3 0 100 6 3 3 0 000-6zM5 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM19 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 10c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4zM2 16c-1 0-2 1-2 2v1h5v-1.5C5 16.5 3.5 16 2 16zM22 16c1 0 2 1 2 2v1h-5v-1.5c0-1 1.5-1.5 3-1.5z',
  bacteria: 'M12 2a5 5 0 100 10 5 5 0 000-10zM12 14v4M8 7H4M20 7h-4M7 12l-3 3M17 12l3 3M12 18a2 2 0 100 4 2 2 0 000-4z',
}
</script>

<template>
  <div class="services-page">
    <!-- Hero banner -->
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__content container">
        <span class="section-label section-label--light">Nos expertises</span>
        <h1 class="page-hero__title">Services</h1>
        <p class="page-hero__lead">
          Des outils génétiques de pointe pour répondre à vos problématiques environnementales
        </p>
      </div>
    </section>

    <!-- Quality commitment banner -->
    <section class="quality">
      <div class="container">
        <div class="quality__card">
          <div class="quality__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div class="quality__text">
            <h3>Notre engagement qualité</h3>
            <p>Tous nos échantillons sont séquencés sur le <strong>NovaSeq d'Illumina</strong> ou l'<strong>Aviti d'Element Biosciences</strong>, permettant d'obtenir des millions de séquences par échantillon et de détecter l'ADN des espèces rares avec la sensibilité la plus fine.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services list -->
    <section class="services-list">
      <div class="container">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          :id="service.id"
          class="service-block"
          :class="{ 'service-block--alt': index % 2 === 1 }"
        >
          <div class="service-block__header">
            <div class="service-block__number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="service-block__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path :d="iconPaths[service.icon]"/>
              </svg>
            </div>
            <h2 class="service-block__title">{{ service.title }}</h2>
          </div>

          <p class="service-block__desc">{{ service.description }}</p>

          <!-- Single image -->
          <div v-if="service.image && !service.images" class="service-block__image">
            <img :src="service.image" :alt="service.title" loading="lazy">
          </div>

          <!-- Photo strip (biodiversity aquatic) -->
          <div v-if="service.images" class="service-block__photo-strip">
            <div v-for="img in service.images" :key="img.src" class="service-block__photo">
              <img :src="img.src" :alt="img.alt" loading="lazy">
            </div>
          </div>

          <!-- Biodiversity details -->
          <div v-if="service.details" class="service-block__details">
            <div v-for="detail in service.details" :key="detail.subtitle" class="detail-card">
              <h4>{{ detail.subtitle }}</h4>
              <p>{{ detail.text }}</p>
            </div>
          </div>

          <!-- Terrestrial photo strip -->
          <div v-if="service.images2" class="service-block__photo-strip service-block__photo-strip--sub">
            <div v-for="img in service.images2" :key="img.src" class="service-block__photo">
              <img :src="img.src" :alt="img.alt" loading="lazy">
            </div>
          </div>

          <!-- Gallery images (population) -->
          <div v-if="service.galleryImages" class="service-block__gallery">
            <div v-for="img in service.galleryImages" :key="img.src" class="service-block__gallery-item">
              <img :src="img.src" :alt="img.alt" loading="lazy">
              <span>{{ img.alt }}</span>
            </div>
          </div>

          <!-- Genetic markers table -->
          <div v-if="service.markers" class="service-block__markers">
            <h4 class="markers-title">Marqueurs génétiques par groupe</h4>
            <div class="markers-grid">
              <div v-for="m in service.markers" :key="m.group" class="marker-row">
                <span class="marker-group">{{ m.group }}</span>
                <span class="marker-value">{{ m.markers }}</span>
                <span class="marker-reads">{{ m.reads }}</span>
              </div>
            </div>
          </div>

          <!-- PCR species list -->
          <div v-if="service.species" class="service-block__species">
            <div class="species-grid">
              <span v-for="sp in service.species" :key="sp" class="species-tag">
                <em>{{ sp }}</em>
              </span>
            </div>
            <p class="species-note">D'autres espèces seront ajoutées prochainement. N'hésitez pas à nous contacter pour toute espèce d'intérêt.</p>
          </div>

          <!-- Hybridation cases -->
          <div v-if="service.cases" class="service-block__cases">
            <div v-for="c in service.cases" :key="c" class="case-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              {{ c }}
            </div>
          </div>

          <!-- Examples -->
          <div v-if="service.examples" class="service-block__examples">
            <p class="examples-label">Espèces étudiées :</p>
            <p class="examples-text">{{ service.examples }}</p>
          </div>

          <!-- Pathogens -->
          <div v-if="service.pathogens" class="service-block__pathogens">
            <p><strong>Pathogènes détectés :</strong> {{ service.pathogens }}</p>
            <p class="partner-note">{{ service.partners }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="services-cta">
      <div class="container">
        <div class="services-cta__inner">
          <h2>Besoin d'un devis personnalisé ?</h2>
          <p>Contactez-nous avec votre thématique, le nombre et type d'échantillons.</p>
          <RouterLink to="/contact" class="btn btn--primary btn--lg">
            Nous contacter
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </RouterLink>
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
  background:
    radial-gradient(ellipse 60% 80% at 70% 50%, rgba(29, 172, 120, 0.08) 0%, transparent 60%);
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

/* ═══ QUALITY ═══ */
.quality {
  padding: var(--space-2xl) 0;
  background: var(--mist);
}

.quality__card {
  display: flex;
  gap: var(--space-xl);
  align-items: flex-start;
  padding: var(--space-xl) var(--space-2xl);
  background: var(--white);
  border-radius: 12px;
  border: 1px solid var(--bone);
  box-shadow: var(--shadow-sm);
}

.quality__icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  color: var(--canopy);
}

.quality__text h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--ink);
}

.quality__text p {
  margin-top: var(--space-sm);
  color: var(--ink-light);
  font-size: 0.9rem;
}

.quality__text strong {
  color: var(--forest);
  font-weight: 600;
}

/* ═══ SERVICES LIST ═══ */
.services-list {
  padding: var(--space-3xl) 0;
}

.service-block {
  padding: var(--space-2xl) 0;
  border-bottom: 1px solid var(--bone);
}

.service-block:last-child {
  border-bottom: none;
}

.service-block__header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.service-block__number {
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--canopy);
  opacity: 0.6;
  flex-shrink: 0;
  padding-top: 4px;
}

.service-block__icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  color: var(--canopy);
  padding: 6px;
  background: var(--canopy-glow);
  border-radius: 8px;
}

.service-block__title {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 3vw, 1.6rem);
  color: var(--ink);
  line-height: 1.3;
}

.service-block__desc {
  color: var(--ink-light);
  font-size: 0.95rem;
  max-width: 750px;
  padding-left: 3.75rem;
  margin-left: 1.6rem;
}

/* Service images */
.service-block__image {
  margin-top: var(--space-lg);
  padding-left: 5.35rem;
  max-width: 320px;
}

.service-block__image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: var(--shadow-md);
  transition: transform 0.4s var(--ease-out);
}

.service-block__image:hover img {
  transform: scale(1.02);
}

.service-block__photo-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  margin-top: var(--space-lg);
  padding-left: 5.35rem;
}

.service-block__photo-strip--sub {
  margin-top: var(--space-xl);
}

.service-block__photo {
  border-radius: 10px;
  overflow: hidden;
  height: 140px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--ease-out);
}

.service-block__photo:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.service-block__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}

.service-block__photo:hover img {
  transform: scale(1.08);
}

.service-block__gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  margin-top: var(--space-xl);
  padding-left: 5.35rem;
}

.service-block__gallery-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 180px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--ease-out);
}

.service-block__gallery-item:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.service-block__gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}

.service-block__gallery-item:hover img {
  transform: scale(1.06);
}

.service-block__gallery-item span {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 12px;
  background: linear-gradient(transparent, rgba(10, 15, 13, 0.8));
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 500;
}

/* Detail cards */
.service-block__details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-xl);
  padding-left: 5.35rem;
}

.detail-card {
  padding: var(--space-lg);
  background: var(--mist);
  border-radius: 8px;
  border-left: 3px solid var(--canopy);
}

.detail-card h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--forest);
  margin-bottom: var(--space-sm);
}

.detail-card p {
  font-size: 0.85rem;
  color: var(--ink-light);
}

/* Markers table */
.service-block__markers {
  margin-top: var(--space-xl);
  padding-left: 5.35rem;
}

.markers-title {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--slate);
  margin-bottom: var(--space-md);
}

.markers-grid {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.marker-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: var(--space-sm) var(--space-md);
  font-size: 0.85rem;
  background: var(--mist);
  border-radius: 4px;
}

.marker-row:nth-child(even) {
  background: var(--white);
}

.marker-group {
  font-weight: 600;
  color: var(--ink);
}

.marker-value {
  color: var(--forest);
}

.marker-reads {
  color: var(--slate);
  text-align: right;
}

/* Species tags */
.service-block__species {
  margin-top: var(--space-xl);
  padding-left: 5.35rem;
}

.species-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.species-tag {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background: var(--canopy-glow);
  border: 1px solid rgba(29, 172, 120, 0.15);
  border-radius: 100px;
  font-size: 0.82rem;
  color: var(--forest);
}

.species-tag em {
  font-style: italic;
}

.species-note {
  margin-top: var(--space-md);
  font-size: 0.85rem;
  color: var(--slate);
  font-style: italic;
}

/* Cases */
.service-block__cases {
  margin-top: var(--space-xl);
  padding-left: 5.35rem;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.case-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--ink-light);
  font-size: 0.9rem;
}

.case-item svg {
  color: var(--canopy);
  flex-shrink: 0;
}

/* Examples */
.service-block__examples {
  margin-top: var(--space-lg);
  padding-left: 5.35rem;
}

.examples-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--slate);
}

.examples-text {
  margin-top: var(--space-xs);
  font-size: 0.9rem;
  color: var(--ink-light);
  font-style: italic;
}

/* Pathogens */
.service-block__pathogens {
  margin-top: var(--space-lg);
  padding-left: 5.35rem;
}

.service-block__pathogens p {
  font-size: 0.9rem;
  color: var(--ink-light);
}

.service-block__pathogens strong {
  color: var(--ink);
}

.partner-note {
  margin-top: var(--space-sm);
  font-size: 0.85rem;
  color: var(--canopy);
  font-weight: 500;
}

/* CTA */
.services-cta {
  padding: var(--space-3xl) 0 var(--space-4xl);
}

.services-cta__inner {
  text-align: center;
  padding: var(--space-3xl);
  background: linear-gradient(135deg, var(--obsidian), var(--forest));
  border-radius: 16px;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.services-cta__inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 30%, rgba(29, 172, 120, 0.15) 0%, transparent 50%);
}

.services-cta__inner h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  position: relative;
}

.services-cta__inner p {
  margin-top: var(--space-sm);
  color: rgba(255, 255, 255, 0.6);
  position: relative;
}

.services-cta__inner .btn {
  margin-top: var(--space-xl);
  position: relative;
}

/* ═══ BUTTONS (scoped repeat) ═══ */
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

/* ═══ RESPONSIVE ═══ */
@media (max-width: 768px) {
  .service-block__desc,
  .service-block__details,
  .service-block__markers,
  .service-block__species,
  .service-block__cases,
  .service-block__examples,
  .service-block__pathogens,
  .service-block__image,
  .service-block__photo-strip,
  .service-block__gallery {
    padding-left: 0;
    margin-left: 0;
  }

  .service-block__photo-strip,
  .service-block__gallery {
    grid-template-columns: 1fr;
  }

  .service-block__details {
    grid-template-columns: 1fr;
  }

  .service-block__header {
    flex-wrap: wrap;
  }

  .marker-row {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  .marker-reads {
    text-align: left;
  }

  .quality__card {
    flex-direction: column;
    padding: var(--space-lg);
  }
}
</style>
