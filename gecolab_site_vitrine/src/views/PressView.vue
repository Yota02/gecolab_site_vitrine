<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const articles = [
  {
    date: t('press.articles.article1.date'),
    category: t('press.articles.article1.category'),
    title: t('press.articles.article1.title'),
    description: t('press.articles.article1.description'),
    source: t('press.articles.article1.source'),
    tag: t('press.articles.article1.tag'),
    image: '/images/services/chat-forestier.jpg',
  },
  {
    date: t('press.articles.article2.date'),
    category: t('press.articles.article2.category'),
    title: t('press.articles.article2.title'),
    description: t('press.articles.article2.description'),
    source: t('press.articles.article2.source'),
    tag: t('press.articles.article2.tag'),
    image: '/images/press/lalibre.jpg',
  },
  {
    date: t('press.articles.article3.date'),
    category: t('press.articles.article3.category'),
    title: t('press.articles.article3.title'),
    description: t('press.articles.article3.description'),
    source: t('press.articles.article3.source'),
    tag: t('press.articles.article3.tag'),
    image: '/images/press/natagora.jpg',
  },
]
</script>

<template>
  <div class="press-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__content container">
        <span class="section-label section-label--light">{{ t('press.hero.sectionLabel') }}</span>
        <h1 class="page-hero__title">{{ t('press.hero.title') }}</h1>
        <p class="page-hero__lead">
          {{ t('press.hero.lead') }}
        </p>
      </div>
    </section>

    <!-- Articles -->
    <section class="articles">
      <div class="container">
        <div class="articles__list">
          <article
            v-for="(article, i) in articles"
            :key="i"
            class="press-card"
          >
            <div class="press-card__visual">
              <div class="press-card__image" v-if="article.image">
                <img :src="article.image" :alt="article.title" loading="lazy">
              </div>
              <div class="press-card__meta">
                <span class="press-card__date">{{ article.date }}</span>
                <span class="press-card__tag">{{ article.tag }}</span>
              </div>
            </div>
            <div class="press-card__content">
              <span class="press-card__category">{{ article.category }}</span>
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
              <span class="press-card__source">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 2.5h-3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-3" stroke="currentColor" stroke-width="1" stroke-linecap="round"/><path d="M8 1.5h4.5V6M5.5 8.5L12.5 1.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                {{ article.source }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Highlight box -->
    <section class="highlight-section">
      <div class="container">
        <div class="highlight-box">
          <div class="highlight-box__icon">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M24 4v8M24 36v8M4 24h8M36 24h8M10 10l5.5 5.5M32.5 32.5L38 38M38 10l-5.5 5.5M10 38l5.5-5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <h3>{{ t('press.highlight.title') }}</h3>
          <p>
            {{ t('press.highlight.text') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.page-hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-2xl)) 0 var(--space-2xl);
  overflow: hidden;
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
  background: radial-gradient(ellipse 50% 70% at 80% 40%, rgba(29, 172, 120, 0.08) 0%, transparent 60%);
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

/* Articles */
.articles {
  padding: var(--space-3xl) 0;
}

.articles__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.press-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-2xl);
  padding: var(--space-2xl);
  background: var(--white);
  border-radius: 12px;
  border: 1px solid var(--bone);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--ease-out);
}

.press-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.press-card__visual {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.press-card__image {
  border-radius: 8px;
  overflow: hidden;
  height: 160px;
}

.press-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}

.press-card:hover .press-card__image img {
  transform: scale(1.05);
}

.press-card__meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.press-card__date {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--forest);
  line-height: 1;
}

.press-card__tag {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background: var(--canopy-glow);
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--forest);
  width: fit-content;
}

.press-card__category {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--canopy);
  margin-bottom: var(--space-sm);
}

.press-card__content h2 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--ink);
  line-height: 1.3;
}

.press-card__content p {
  margin-top: var(--space-md);
  color: var(--ink-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

.press-card__source {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  margin-top: var(--space-md);
  font-size: 0.8rem;
  color: var(--canopy);
  font-weight: 500;
}

/* Highlight */
.highlight-section {
  padding: 0 0 var(--space-4xl);
}

.highlight-box {
  text-align: center;
  padding: var(--space-3xl);
  background: var(--mist);
  border-radius: 16px;
  max-width: 700px;
  margin: 0 auto;
}

.highlight-box__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto var(--space-lg);
  color: var(--canopy);
}

.highlight-box h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--ink);
}

.highlight-box p {
  margin-top: var(--space-md);
  color: var(--ink-light);
  font-size: 0.95rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .press-card {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .press-card__meta {
    flex-direction: row;
    align-items: center;
  }

  .press-card__date {
    font-size: 1.5rem;
  }

  .press-card__image {
    height: 200px;
  }
}
</style>
