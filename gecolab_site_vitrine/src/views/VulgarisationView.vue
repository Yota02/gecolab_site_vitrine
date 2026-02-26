<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visible = ref(false)

// Liste de toutes les vidéos
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
]

// Sélection des 5 vidéos phares
const featuredIds = [3, 4, 5, 6, 11]
const featuredVideos = ref(allVideos.filter(v => featuredIds.includes(v.id)))

// Lien Facebook
const facebookUrl = 'https://www.facebook.com/profile.php?id=100083162784534'

const loadVideo = (video: any) => {
  video.loaded = true
}

const pressArticles = [
  {
    date: t('press.articles.article1.date'),
    category: t('press.articles.article1.category'),
    title: t('press.articles.article1.title'),
    description: t('press.articles.article1.description'),
    source: t('press.articles.article1.source'),
    tag: t('press.articles.article1.tag'),
    image: `${import.meta.env.BASE_URL}images/services/chat-forestier.jpg`,
  },
  {
    date: t('press.articles.article2.date'),
    category: t('press.articles.article2.category'),
    title: t('press.articles.article2.title'),
    description: t('press.articles.article2.description'),
    source: t('press.articles.article2.source'),
    tag: t('press.articles.article2.tag'),
    image: `${import.meta.env.BASE_URL}images/press/lalibre.jpg`,
  },
  {
    date: t('press.articles.article3.date'),
    category: t('press.articles.article3.category'),
    title: t('press.articles.article3.title'),
    description: t('press.articles.article3.description'),
    source: t('press.articles.article3.source'),
    tag: t('press.articles.article3.tag'),
    image: `${import.meta.env.BASE_URL}images/press/natagora.jpg`,
  },
]

onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
})
</script>

<template>
  <div class="vulgarisation" :class="{ visible }">
    <section class="hero">
      <div class="hero__bg"></div>
      
      <div class="hero__content container">
        <span class="section-label">Médiation Scientifique</span>
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
          <p class="section-subtitle">Découvrez nos dernières observations et capsules éducatives.</p>
        </div>
        
        <div class="videos__grid">
          <!-- Les 5 vidéos phares -->
          <div 
            v-for="video in featuredVideos" 
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

          <!-- La 6ème carte spéciale Facebook -->
          <div class="facebook-card">
            <div class="facebook-card__inner">
              <div class="facebook-card__icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 class="facebook-card__title">Plus de contenus ?</h3>
              <p class="facebook-card__text">
                Retrouvez l'intégralité de nos capsules vidéos et suivez notre actualité en direct sur notre page Facebook.
              </p>
              <a :href="facebookUrl" target="_blank" rel="noopener noreferrer" class="btn btn--outline-light">
                Rejoignez-nous
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="press-section">
      <div class="container">
        <div class="press-section__header">
          <h2 class="section-title">{{ t('press.hero.title') }}</h2>
          <p class="section-subtitle">{{ t('press.hero.lead') }}</p>
        </div>
        
        <div class="press-section__list">
          <article
            v-for="(article, i) in pressArticles"
            :key="i"
            class="press-card"
          >
            <div class="press-card__visual">
              <div class="press-card__image" v-if="article.image">
                <img :src="article.image" :alt="article.title" loading="lazy">
              </div>
            </div>
            <div class="press-card__content">
              <div class="press-card__header">
                <span class="press-card__tag">{{ article.tag }}</span>
                <span class="press-card__date">{{ article.date }}</span>
              </div>
              <span class="press-card__category">{{ article.category }}</span>
              <h2 class="press-card__title">{{ article.title }}</h2>
              <p class="press-card__description">{{ article.description }}</p>
              <span class="press-card__source">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 2.5h-3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 1.5h4.5V6M5.5 8.5L12.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                {{ article.source }}
              </span>
            </div>
          </article>
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
.vulgarisation {
  opacity: 0;
  transition: opacity 0.8s var(--ease-out);
  background-color: var(--parchment);
  color: var(--ink);
}

.vulgarisation.visible {
  opacity: 1;
}

/* HERO */
.hero {
  position: relative;
  background-color: var(--obsidian);
  padding: var(--space-4xl) 0 var(--space-3xl);
  text-align: center;
  color: var(--white);
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, var(--forest-mid) 0%, var(--obsidian) 70%);
  opacity: 0.6;
}

.hero__content {
  position: relative;
  z-index: 1;
}

.section-label {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: var(--canopy);
  margin-bottom: var(--space-md);
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  margin-bottom: var(--space-lg);
  line-height: 1.1;
  color: var(--white);
}

.hero__lead {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.8;
  line-height: 1.6;
}

/* FEATURED ARTICLE */
.featured-article {
  margin-top: -4rem;
  position: relative;
  z-index: 2;
  margin-bottom: var(--space-4xl);
}

.article-card {
  background: var(--white);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  border: 1px solid rgba(10, 15, 13, 0.05);
}

@media (min-width: 992px) {
  .article-card {
    grid-template-columns: 1fr 1fr;
  }
}

.article-card__image-wrapper {
  height: 300px;
}

@media (min-width: 992px) {
  .article-card__image-wrapper {
    height: 100%;
    min-height: 400px;
  }
}

.article-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-out);
}

.article-card:hover .article-card__img {
  transform: scale(1.05);
}

.article-card__content {
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.article-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge--rtbf {
  background-color: #005bb6;
  color: white;
}

.article-card__meta {
  font-size: 0.875rem;
  color: var(--slate);
  font-weight: 500;
}

.article-card__title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--space-md);
  line-height: 1.2;
  color: var(--obsidian);
}

.article-card__excerpt {
  color: var(--ink-light);
  margin-bottom: var(--space-xl);
  line-height: 1.7;
}

/* VIDEOS SECTION */
.videos {
  padding: var(--space-2xl) 0 var(--space-4xl);
}

.videos__header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.section-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--obsidian);
  margin-bottom: var(--space-sm);
}

.section-subtitle {
  color: var(--slate);
  font-size: 1.1rem;
}

.videos__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-xl);
}

/* VIDEO CARD */
.video-card {
  background: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.4s var(--ease-out);
  border: 1px solid rgba(10, 15, 13, 0.05);
  display: flex;
  flex-direction: column;
}

.video-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.video-card__aspect-ratio {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: var(--obsidian);
}

.video-card__placeholder {
  position: absolute;
  inset: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.video-card__placeholder-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--forest) 0%, var(--obsidian) 100%);
  opacity: 0.9;
}

.video-card:nth-child(even) .video-card__placeholder-bg {
  background: linear-gradient(135deg, var(--forest-mid) 0%, var(--obsidian) 100%);
}

.video-card__play-btn {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s var(--ease-bounce);
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.video-card__placeholder:hover .video-card__play-btn {
  transform: scale(1.1);
  background: var(--canopy);
  border-color: var(--canopy);
  color: var(--obsidian);
}

.video-card__hint {
  margin-top: 1.5rem;
  color: white;
  font-size: 0.9rem;
  z-index: 2;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.7;
}

.video-card__iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.video-card__body {
  padding: var(--space-lg);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.video-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: var(--space-md);
  color: var(--obsidian);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-card__link {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #1877F2; /* FB Blue */
  font-weight: 700;
  transition: opacity 0.2s;
}

.video-card__link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* FACEBOOK CARD */
.facebook-card {
  background: linear-gradient(135deg, #1877F2 0%, #0C4D9F 100%);
  border-radius: 16px;
  color: white;
  padding: var(--space-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all 0.4s var(--ease-out);
}

.facebook-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.facebook-card__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.facebook-card__icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.facebook-card__icon svg {
  width: 32px;
  height: 32px;
}

.facebook-card__title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
}

.facebook-card__text {
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.6;
}

/* PRESS SECTION */
.press-section {
  padding: var(--space-4xl) 0;
  background-color: var(--bone);
}

.press-section__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.press-card {
  display: grid;
  grid-template-columns: 1fr;
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.4s var(--ease-out);
  border: 1px solid rgba(10, 15, 13, 0.05);
}

@media (min-width: 768px) {
  .press-card {
    grid-template-columns: 320px 1fr;
  }
}

.press-card:hover {
  transform: translateX(10px);
  box-shadow: var(--shadow-md);
}

.press-card__visual {
  height: 240px;
}

@media (min-width: 768px) {
  .press-card__visual {
    height: 100%;
  }
}

.press-card__image {
  height: 100%;
}

.press-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.press-card__content {
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
}

.press-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.press-card__tag {
  background: var(--canopy-glow);
  color: var(--forest);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.press-card__date {
  font-size: 0.875rem;
  color: var(--slate);
  font-weight: 600;
}

.press-card__category {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--canopy);
  margin-bottom: var(--space-xs);
}

.press-card__title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--obsidian);
  margin-bottom: var(--space-md);
  line-height: 1.3;
}

.press-card__description {
  color: var(--ink-light);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: var(--space-lg);
}

.press-card__source {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--slate);
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.8rem;
  font-weight: 700;
  border-radius: 100px;
  transition: all 0.3s var(--ease-out);
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
}

.btn--primary {
  background-color: var(--forest);
  color: var(--white);
  border: none;
}

.btn--primary:hover {
  background-color: var(--forest-mid);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(10, 74, 46, 0.3);
}

.btn--outline-light {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn--outline-light:hover {
  background: white;
  color: #1877F2;
}

.btn--white {
  background: var(--white);
  color: var(--forest);
  border: none;
}

.btn--white:hover {
  background: var(--parchment);
  transform: translateY(-2px);
}

/* CTA BOX */
.cta-box {
  background: var(--obsidian);
  border-radius: 24px;
  padding: var(--space-3xl) var(--space-2xl);
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xl);
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at bottom right, var(--forest) 0%, transparent 60%);
  opacity: 0.4;
}

@media (min-width: 992px) {
  .cta-box {
    flex-direction: row;
    text-align: left;
    padding: var(--space-3xl) var(--space-4xl);
  }
}

.cta-box__content {
  position: relative;
  z-index: 1;
}

.cta-box__content h2 {
  font-family: var(--font-display);
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.cta-box__content p {
  opacity: 0.8;
  font-size: 1.1rem;
}

/* Animations Vue */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s var(--ease-out);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .videos__grid {
    grid-template-columns: 1fr;
  }
  
  .hero__title {
    font-size: 2.5rem;
  }
}
</style>