<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visible = ref(false)

// Gestion de la pagination
const itemsPerPage = 9
const currentPage = ref(1)

// Liste des vidéos (votre liste originale)
const allVideos = [
  { id: 1, url: 'https://www.facebook.com/share/v/1CQMbCsrtF/?mibextid=wwXIfr', title: 'Vidéo 1', loaded: false },
  { id: 2, url: 'https://www.facebook.com/share/v/1D6Sy18bnr/?mibextid=wwXIfr', title: 'Vidéo 2', loaded: false },
  { id: 3, url: 'https://www.facebook.com/share/v/1CD3bkVnEw/?mibextid=wwXIfr', title: 'Comment observe-t-on la biodiversité 🔎 ?', loaded: false },
  { id: 4, url: 'https://www.facebook.com/share/v/1CRFUTDgej/?mibextid=wwXIfr', title: 'Le triton crêté', loaded: false },
  { id: 5, url: 'https://www.facebook.com/share/v/1CjqsqDtrt/?mibextid=wwXIfr', title: 'Le castor européen 🦫', loaded: false },
  { id: 6, url: 'https://www.facebook.com/share/v/18AuTgFCs7/?mibextid=wwXIfr', title: 'Le hibou grand-duc 🦉', loaded: false },
  { id: 7, url: 'https://www.facebook.com/share/v/17yNGzcumC/?mibextid=wwXIfr', title: 'Le moineau domestique', loaded: false },
  { id: 8, url: 'https://www.facebook.com/share/v/1NAifivRJq/?mibextid=wwXIfr', title: 'Des groupes de grues cendrées hivernent en Belgique 🇧🇪 ? ', loaded: false },
  { id: 9, url: 'https://www.facebook.com/share/v/1GFcXwpUuK/?mibextid=wwXIfr', title: 'Auparavant, le guêpier d\'Europe ne nichait pas en Belgique', loaded: false },
  { id: 10, url: 'https://www.facebook.com/share/v/1K3tpExui4/?mibextid=wwXIfr', title: 'Le martinet noir est un sacré aviateur !', loaded: false },
  { id: 11, url: 'https://www.facebook.com/share/v/1HnLZ6oBQD/?mibextid=wwXIfr', title: 'La cigogne noire est de retour !', loaded: false },
  { id: 12, url: 'https://www.facebook.com/share/v/18AUNWmPf1/?mibextid=wwXIfr', title: 'Les objectifs du réseau loup', loaded: false },
  { id: 13, url: 'https://www.facebook.com/share/v/1CcfFCRksn/?mibextid=wwXIfr', title: 'La Bernache du Canada', loaded: false },
  { id: 14, url: 'https://www.facebook.com/share/v/1E7GPzMcZV/?mibextid=wwXIfr', title: 'Le sonneur à ventre jaune', loaded: false },
  { id: 15, url: 'https://www.facebook.com/share/v/1CVrzX5efY/?mibextid=wwXIfr', title: 'Les xénopus ?', loaded: false },
  { id: 16, url: 'https://www.facebook.com/share/v/1HbLD8kNme/?mibextid=wwXIfr', title: 'Vidéo 16', loaded: false },
  { id: 17, url: 'https://www.facebook.com/share/v/1Qg8MronkA/?mibextid=wwXIfr', title: 'Vidéo 17', loaded: false },
  { id: 18, url: 'https://www.facebook.com/share/v/1G84yqvFoZ/?mibextid=wwXIfr', title: 'Vidéo 18', loaded: false },
  { id: 19, url: 'https://www.facebook.com/share/v/1J1tNG22NU/?mibextid=wwXIfr', title: 'Vidéo 19', loaded: false },
  { id: 20, url: 'https://www.facebook.com/share/v/1DiW3jJQaQ/?mibextid=wwXIfr', title: 'Vidéo 20', loaded: false },
  { id: 21, url: 'https://www.facebook.com/share/v/1bMaSp5cqM/?mibextid=wwXIfr', title: 'Vidéo 21', loaded: false },
  { id: 22, url: 'https://www.facebook.com/share/v/1SvrratmzH/?mibextid=wwXIfr', title: 'Vidéo 22', loaded: false },
  { id: 23, url: 'https://www.facebook.com/share/v/1DLYeR3pFm/?mibextid=wwXIfr', title: 'Vidéo 23', loaded: false },
  { id: 24, url: 'https://www.facebook.com/share/v/18By9XtbyU/?mibextid=wwXIfr', title: 'Vidéo 24', loaded: false },
  { id: 25, url: 'https://www.facebook.com/share/v/1Uj7fwnLev/?mibextid=wwXIfr', title: 'Vidéo 25', loaded: false },
  { id: 26, url: 'https://www.facebook.com/share/v/1BvCqVrs86/?mibextid=wwXIfr', title: 'Vidéo 26', loaded: false },
  { id: 27, url: 'https://www.facebook.com/share/v/1BXGNCaiHt/?mibextid=wwXIfr', title: 'Vidéo 27', loaded: false },
  { id: 28, url: 'https://www.facebook.com/share/v/1KtACRmvGY/?mibextid=wwXIfr', title: 'Vidéo 28', loaded: false },
  { id: 29, url: 'https://www.facebook.com/share/v/1AwyVimer2/?mibextid=wwXIfr', title: 'Vidéo 29', loaded: false },
  { id: 30, url: 'https://www.facebook.com/share/v/189pKAeWvx/?mibextid=wwXIfr', title: 'Vidéo 30', loaded: false },
  { id: 31, url: 'https://www.facebook.com/share/v/1ApbBg7qSt/?mibextid=wwXIfr', title: 'Vidéo 31', loaded: false },
]

// Vidéos actuellement affichées (pagination)
const displayedVideos = computed(() => {
  return allVideos.slice(0, currentPage.value * itemsPerPage)
})

const hasMoreVideos = computed(() => {
  return displayedVideos.value.length < allVideos.length
})

const loadMore = () => {
  currentPage.value++
}

const loadVideo = (video: any) => {
  video.loaded = true
}

onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
})
</script>

<template>
  <div class="vulgarisation" :class="{ visible }">
    <section class="hero">
      <div class="hero__bg"></div>
      
      <div class="hero__content container">
        <span class="section-label section-label--light">Médiation Scientifique</span>
        <h1 class="hero__title">Comprendre le vivant</h1>
        <p class="hero__lead">
          Plongez au cœur de la génétique de la conservation et de l'écologie moléculaire à travers nos capsules vidéos et articles.
        </p>
      </div>
    </section>

    <section class="featured-article">
      <div class="container">
        <div class="article-card">
          <div class="article-card__image-wrapper">
            <img src="https://static-content.rtbf.be/article/image/770x433/6/4/a/f0d7f242d660afe4d2cbb48f04ed9139.jpg?webp=1" alt="Raton laveur" loading="lazy" class="article-card__img">
          </div>
          <div class="article-card__content">
            <div class="article-card__header">
              <span class="badge badge--rtbf">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"></path>
                  <line x1="16" y1="11.37" x2="16" y2="17.37"></line>
                  <line x1="12" y1="6.37" x2="12" y2="17.37"></line>
                  <line x1="8" y1="11.37" x2="8" y2="17.37"></line>
                </svg>
                Article RTBF
              </span>
              <span class="article-card__meta">Par Johan Michaux</span>
            </div>
            <h2 class="article-card__title">Le raton laveur : une espèce encombrante pour la biodiversité européenne</h2>
            <p class="article-card__excerpt">
              Johan Michaux évoque au travers du cas du raton laveur, les problématiques liées à l'introduction 
              d'espèces exotiques dans la préservation de la biodiversité locale.
            </p>
            <a 
              href="https://www.rtbf.be/article/le-raton-laveur-une-espece-encombrante-pour-la-biodiversite-europeenne-10928338" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--primary"
            >
              Lire l'article complet
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                <path d="M3 8h10M9 4l4 4-4 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="videos">
      <div class="container">
        <div class="videos__header">
          <h2 class="section-title">Vidéothèque</h2>
          <p class="section-subtitle">Découvrez nos dernières observations et analyses.</p>
        </div>
        
        <div class="videos__grid">
          <div 
            v-for="video in displayedVideos" 
            :key="video.id"
            class="video-card"
            :class="{ 'is-loaded': video.loaded }"
          >
            <div class="video-card__aspect-ratio">
              <div class="video-card__placeholder" v-if="!video.loaded" @click="loadVideo(video)">
                <div class="video-card__placeholder-bg"></div>
                <div class="video-card__play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span class="video-card__hint">Cliquez pour charger la vidéo</span>
              </div>

              <transition name="fade">
                <iframe 
                  v-if="video.loaded"
                  :src="`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=500&autoplay=true`"
                  style="border:none;overflow:hidden" 
                  scrolling="no" 
                  frameborder="0" 
                  allowfullscreen="true" 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  class="video-card__iframe"
                ></iframe>
              </transition>
            </div>

            <div class="video-card__body">
              <h3 class="video-card__title">{{ video.title }}</h3>
              <a :href="video.url" target="_blank" rel="noopener noreferrer" class="video-card__link">
                Voir sur Facebook 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="videos__pagination" v-if="hasMoreVideos">
          <button @click="loadMore" class="btn btn--outline">
            Voir plus de vidéos
            <span class="btn-count">({{ allVideos.length - displayedVideos.length }} restantes)</span>
          </button>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <div class="cta-box__content">
            <h2>Une question scientifique ?</h2>
            <p>Notre équipe est disponible pour échanger sur nos travaux de recherche.</p>
          </div>
          <RouterLink to="/contact" class="btn btn--white">
            Contactez-nous
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* VARIABLES (À adapter selon votre Design System) */
.vulgarisation {
  --color-primary: #106f4c; /* Vert forêt */
  --color-primary-dark: #0a4a33;
  --color-secondary: #e8f5e9;
  --color-text: #1f2937;
  --color-text-light: #6b7280;
  --color-bg-light: #f9fafb;
  --color-white: #ffffff;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
}

/* BASE */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.vulgarisation {
  opacity: 0;
  transition: opacity 0.5s ease-out;
  background-color: var(--color-bg-light);
  font-family: 'Inter', system-ui, sans-serif;
  color: var(--color-text);
}

.vulgarisation.visible {
  opacity: 1;
}

/* HERO */
.hero {
  position: relative;
  background-color: var(--color-primary-dark);
  padding: 6rem 0 4rem;
  text-align: center;
  color: var(--color-white);
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 0%, #1d8f66 0%, var(--color-primary-dark) 70%);
  opacity: 0.8;
  z-index: 0;
}

.hero__content {
  position: relative;
  z-index: 1;
}

.section-label {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  font-weight: 600;
  opacity: 0.8;
  margin-bottom: 1rem;
  display: block;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero__lead {
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
}

/* FEATURED ARTICLE */
.featured-article {
  margin-top: -3rem; /* Chevauchement sur le hero */
  position: relative;
  z-index: 2;
  margin-bottom: 4rem;
}

.article-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}

@media (min-width: 768px) {
  .article-card {
    grid-template-columns: 1fr 1fr;
  }
}

.article-card__image-wrapper {
  height: 250px;
  overflow: hidden;
}

@media (min-width: 768px) {
  .article-card__image-wrapper {
    height: 100%;
    min-height: 350px;
  }
}

.article-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.article-card:hover .article-card__img {
  transform: scale(1.05);
}

.article-card__content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.article-card__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.badge--rtbf {
  background-color: #e6f0fa;
  color: #005bb6;
}

.article-card__meta {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.article-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
  color: #111827;
}

.article-card__excerpt {
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* VIDEOS SECTION */
.videos {
  padding: 2rem 0 5rem;
}

.videos__header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: var(--color-text-light);
}

.videos__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* VIDEO CARD */
.video-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.video-card__aspect-ratio {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  background: #000;
}

.video-card__placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  overflow: hidden;
}

/* Génération d'un fond abstrait pour les vidéos sans thumbnail */
.video-card__placeholder-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  opacity: 1;
}

/* On peut varier légèrement la couleur pour casser la monotonie via nth-child si on le voulait */
.video-card:nth-child(3n+1) .video-card__placeholder-bg { background: linear-gradient(135deg, #276749 0%, #22543d 100%); }
.video-card:nth-child(3n+2) .video-card__placeholder-bg { background: linear-gradient(135deg, #2c5282 0%, #2a4365 100%); }

.video-card__play-btn {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.2s ease, background 0.2s ease;
  z-index: 2;
  border: 2px solid rgba(255,255,255,0.4);
}

.video-card__placeholder:hover .video-card__play-btn {
  transform: scale(1.1);
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.video-card__hint {
  margin-top: 1rem;
  color: rgba(255,255,255,0.7);
  font-size: 0.8rem;
  z-index: 2;
  font-weight: 500;
}

.video-card__iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.video-card__body {
  padding: 1.25rem;
}

.video-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.75rem;
  color: #111827;
  /* Truncate text after 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #3b5998; /* Facebook blue */
  font-weight: 600;
  text-decoration: none;
}

.video-card__link:hover {
  text-decoration: underline;
}

/* PAGINATION */
.videos__pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.95rem;
}

.btn--primary {
  background-color: var(--color-primary);
  color: white;
  border: none;
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
}

.btn--outline {
  background: transparent;
  border: 2px solid #d1d5db;
  color: var(--color-text);
}

.btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn--white {
  background: white;
  color: var(--color-primary);
  border: none;
}

.btn--white:hover {
  background: #f0f0f0;
}

.btn-count {
  font-weight: 400;
  opacity: 0.7;
  margin-left: 0.25rem;
  font-size: 0.85em;
}

/* CTA BOX */
.cta-box {
  background: linear-gradient(to right, var(--color-primary-dark), var(--color-primary));
  border-radius: var(--radius-lg);
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .cta-box {
    flex-direction: row;
    text-align: left;
    padding: 4rem;
  }
}

.cta-box__content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.cta-box__content p {
  opacity: 0.9;
  font-size: 1.1rem;
}

/* Animations Vue */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>