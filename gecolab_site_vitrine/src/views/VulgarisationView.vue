<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visible = ref(false)

// Liste des vidéos Facebook
const videos = [
  { id: 1, url: 'https://www.facebook.com/share/v/1CQMbCsrtF/?mibextid=wwXIfr', title: 'Vidéo 1', loaded: false },
  { id: 2, url: 'https://www.facebook.com/share/v/1D6Sy18bnr/?mibextid=wwXIfr', title: 'Vidéo 2', loaded: false },
  { id: 3, url: 'https://www.facebook.com/share/v/1CD3bkVnEw/?mibextid=wwXIfr', title: 'Comment observe-t-on la biodiversité 🔎 ? Les techniques ont-elles évolué ?', loaded: false },
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

const loadVideo = (video: any) => {
  video.loaded = true
}

onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
  
  // Ne charger aucun iframe par défaut pour éviter les problèmes de thumbnail
})
</script>

<template>
  <div class="vulgarisation" :class="{ visible }">
    <!-- HERO -->
    <section class="hero">
      <div class="hero__bg">
        <div class="hero__gradient"></div>
      </div>
      
      <div class="hero__content container">
        <span class="section-label section-label--light">Vulgarisation Scientifique</span>
        <h1 class="hero__title">Vidéos de Vulgarisation</h1>
        <p class="hero__lead">
          Découvrez nos vidéos de vulgarisation scientifique sur la génétique de la conservation et l'écologie moléculaire.
        </p>
      </div>
    </section>

    <!-- ARTICLE FEATURE -->
    <section class="featured-article">
      <div class="container">
        <div class="article-card">
          <div class="article-card__image">
            <img src="https://static-content.rtbf.be/article/image/770x433/6/4/a/f0d7f242d660afe4d2cbb48f04ed9139.jpg?webp=1" alt="Raton laveur" loading="lazy">
          </div>
          <div class="article-card__content">
            <div class="article-card__header">
              <span class="article-card__badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 3h12M2 8h12M2 13h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Article RTBF
              </span>
              <span class="article-card__author">Johan Michaux</span>
            </div>
            <h2>Le raton laveur : une espèce encombrante pour la biodiversité européenne</h2>
            <p>
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
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO GRID -->
    <section class="videos">
      <div class="container">
        <div class="videos__intro">
          <h2 class="section-title">Explorez notre bibliothèque vidéo</h2>
          <p>Cliquez sur une vidéo pour la visionner sur Facebook</p>
        </div>
        
        <div class="videos__grid">
          <div 
            v-for="video in videos" 
            :key="video.id"
            class="video-card"
          >
            <div class="video-card__thumbnail">
              <iframe 
                :src="`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=300&height=200&autoplay=false&mute=false`"
                width="100%" 
                height="200" 
                style="border:none;overflow:hidden" 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
              <div class="video-card__overlay" v-if="!video.loaded">
                <div class="video-card__play" @click="loadVideo(video)">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="24" fill="rgba(255, 255, 255, 0.9)"/>
                    <path d="M19 14v20l15-10z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="video-card__content">
              <h3>{{ video.title }}</h3>
              <div class="video-card__actions">
                <a 
                  :href="video.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="video-card__link"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                  Voir sur Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <div class="cta__card">
          <div class="cta__content">
            <h2>Vous avez des questions sur nos recherches ?</h2>
            <p>N'hésitez pas à nous contacter pour en savoir plus sur nos projets et nos services.</p>
          </div>
          <RouterLink to="/contact" class="btn btn--primary btn--lg">
            Contactez-nous
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* HERO */
.hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-4xl)) 0 var(--space-4xl);
  overflow: hidden;
  min-height: 50vh;
  display: flex;
  align-items: center;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--obsidian) 0%, var(--forest) 50%, #0A4A2E 100%);
}

.hero__gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 40%, rgba(11, 61, 46, 0.6) 0%, transparent 70%),
    radial-gradient(ellipse 40% 50% at 80% 60%, rgba(29, 172, 120, 0.15) 0%, transparent 60%);
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.section-label {
  display: inline-block;
  font-size: 0.9rem;
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

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.1;
  color: var(--white);
  margin-bottom: var(--space-lg);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.hero__lead {
  max-width: 640px;
  margin: 0 auto;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

/* FEATURED ARTICLE */
.featured-article {
  padding: var(--space-4xl) 0;
  background: var(--white);
}

.article-card {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-3xl);
  align-items: center;
  background: var(--mist);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--bone);
}

.article-card__image {
  width: 100%;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
}

.article-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}

.article-card:hover .article-card__image img {
  transform: scale(1.05);
}

.article-card__content {
  padding: var(--space-3xl);
}

.article-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.article-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(29, 172, 120, 0.1);
  color: var(--forest);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(29, 172, 120, 0.2);
}

.article-card__author {
  color: var(--slate);
  font-size: 0.9rem;
  font-weight: 500;
}

.article-card__content h2 {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.3;
  color: var(--ink);
  margin-bottom: var(--space-lg);
}

.article-card__content p {
  color: var(--slate);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: var(--space-xl);
}

/* VIDEOS SECTION */
.videos {
  padding: var(--space-4xl) 0;
  background: var(--mist);
}

.videos__intro {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.2;
  color: var(--ink);
  margin-bottom: var(--space-md);
}

.videos__intro p {
  color: var(--slate);
  font-size: 1.1rem;
}

.videos__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-xl);
}

/* EMPTY STATE */
.videos__empty {
  display: flex;
  justify-content: center;
  padding: var(--space-4xl) 0;
}

.empty-state {
  text-align: center;
  max-width: 500px;
}

.empty-state svg {
  color: var(--canopy);
  margin-bottom: var(--space-xl);
  opacity: 0.7;
}

.empty-state h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--ink);
  margin-bottom: var(--space-md);
}

.empty-state p {
  color: var(--slate);
  font-size: 1.1rem;
  line-height: 1.6;
}

/* VIDEO CARD */
.video-card {
  display: block;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--bone);
  transition: all 0.3s var(--ease-out);
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--canopy);
}

.video-card__thumbnail {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 ratio */
  background: linear-gradient(135deg, var(--forest) 0%, var(--canopy) 100%);
  overflow: hidden;
}

.video-card iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px 8px 0 0;
}

.video-card__overlay {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 100%),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3C/g%3E%3C/svg%3E");
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s var(--ease-out);
  cursor: pointer;
  z-index: 2;
}

.video-card:hover .video-card__overlay {
  opacity: 0;
}

.video-card__play {
  color: var(--forest);
  transition: all 0.3s var(--ease-out);
  cursor: pointer;
}

.video-card__play:hover {
  transform: scale(1.1);
}

.video-card__content {
  padding: var(--space-lg);
}

.video-card__content h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--ink);
  margin-bottom: var(--space-sm);
  transition: color 0.3s var(--ease-out);
}

.video-card:hover .video-card__content h3 {
  color: var(--forest);
}

.video-card__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.video-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(24, 119, 242, 0.1);
  color: #1877F2;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s var(--ease-out);
}

.video-card__link:hover {
  background: rgba(24, 119, 242, 0.15);
  transform: translateY(-1px);
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--canopy);
}

.video-card__thumbnail {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 ratio */
  background: linear-gradient(135deg, var(--forest) 0%, var(--canopy) 100%);
  overflow: hidden;
}

.video-card__overlay {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 100%),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3C/g%3E%3C/svg%3E");
  transition: opacity 0.3s var(--ease-out);
}

.video-card:hover .video-card__overlay {
  opacity: 0.7;
}

.video-card__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--forest);
  transition: all 0.3s var(--ease-out);
  z-index: 2;
}

.video-card:hover .video-card__play {
  transform: translate(-50%, -50%) scale(1.1);
}

.video-card__content {
  padding: var(--space-lg);
}

.video-card__content h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--ink);
  margin-bottom: var(--space-sm);
  transition: color 0.3s var(--ease-out);
}

.video-card:hover .video-card__content h3 {
  color: var(--forest);
}

.video-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: rgba(24, 119, 242, 0.1);
  color: #1877F2;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* CTA */
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
  margin-bottom: var(--space-sm);
}

.cta__content p {
  color: var(--slate);
  max-width: 480px;
}

/* BUTTON */
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
  text-decoration: none;
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

/* ANIMATIONS */
.vulgarisation {
  opacity: 0;
  transition: opacity 0.6s var(--ease-out);
}

.vulgarisation.visible {
  opacity: 1;
}

/* RESPONSIVE */
@media (max-width: 968px) {
  .article-card {
    grid-template-columns: 1fr;
  }
  
  .article-card__image {
    min-height: 300px;
  }
  
  .article-card__content {
    padding: var(--space-2xl);
  }
}

@media (max-width: 768px) {
  .videos__grid {
    grid-template-columns: 1fr;
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
  
  .article-card__header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }
}

@media (max-width: 480px) {
  .videos__grid {
    gap: var(--space-lg);
  }
  
  .article-card__content h2 {
    font-size: 1.5rem;
  }
}
</style>
