<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

const { t } = useI18n()

const corsProxy = 'https://corsproxy.io/?'

const apiClient = axios.create()

const fetchWithCors = async (baseUrl: string, config: any = {}) => {
  const url = new URL(baseUrl)
  if (config.params) {
    for (const [key, value] of Object.entries(config.params)) {
      url.searchParams.append(key, String(value))
    }
  }
  return apiClient.get(corsProxy + encodeURIComponent(url.toString()))
}

const authorIds = [
  '2308923950',
  '46748684',
  '2242404194',
  '16761083',
  '107972122',
  '2272335363',
  '88411967'
]

const papers = ref<any[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const authorInfo = ref<any[]>([])

const searchQuery = ref('')
const searchExpanded = ref(false)
const contentRef = ref<HTMLElement | null>(null)

const scrollToContent = () => {
  contentRef.value?.scrollIntoView({ behavior: 'smooth' })
}

const expandedAbstracts = reactive(new Set<string>())
const copiedId = ref<string | null>(null)

const toggleAbstract = (id: string) => {
  if (expandedAbstracts.has(id)) {
    expandedAbstracts.delete(id)
  } else {
    expandedAbstracts.add(id)
  }
}

const copyCitation = async (pub: any) => {
  const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}. ${pub.doi ? 'DOI: ' + pub.doi : ''}`
  try {
    await navigator.clipboard.writeText(citation)
    copiedId.value = pub.id
    setTimeout(() => {
      if (copiedId.value === pub.id) copiedId.value = null
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const fetchAuthorInfo = async (authorId: string) => {
  try {
    const response = await fetchWithCors(`https://api.semanticscholar.org/graph/v1/author/${authorId}`, {
      params: { fields: 'name,paperCount,citationCount,hIndex' }
    })
    return response.data
  } catch (e) {
    console.error(`Error fetching author ${authorId}:`, e)
    return null
  }
}

const fetchPapersFromAuthor = async (authorId: string) => {
  let allPapers: any[] = []
  let offset = 0
  const limit = 100
  const maxPapersLimit = 5000

  while (offset < maxPapersLimit) {
    try {
      const papersResponse = await fetchWithCors(`https://api.semanticscholar.org/graph/v1/author/${authorId}/papers`, {
        params: {
          fields: 'title,year,citationCount,url,abstract,authors,venue,externalIds,paperId',
          limit: limit,
          offset: offset,
          sort: '-year'
        }
      })

      if (papersResponse.data.data && papersResponse.data.data.length > 0) {
        const newPapers = papersResponse.data.data.map((paper: any) => ({
          ...paper,
          _authorId: authorId
        }))
        allPapers = [...allPapers, ...newPapers]
        offset += limit

        if (papersResponse.data.data.length < limit) break
        await new Promise(resolve => setTimeout(resolve, 100))
      } else {
        break
      }
    } catch (e) {
      console.error(`Error fetching papers for author ${authorId}:`, e)
      break
    }
  }

  return allPapers
}

const searchScientificPapers = async () => {
  loading.value = true
  error.value = null
  papers.value = []
  authorInfo.value = []

  try {
    for (const authorId of authorIds) {
      const info = await fetchAuthorInfo(authorId)
      if (info) {
        authorInfo.value.push(info)
      }
    }

    const allAuthorsPapers: any[] = []
    
    for (const authorId of authorIds) {
      const authorPapers = await fetchPapersFromAuthor(authorId)
      allAuthorsPapers.push(...authorPapers)
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    const paperMap = new Map<string, any>()
    
    for (const paper of allAuthorsPapers) {
      const key = paper.paperId || paper.title?.toLowerCase()
      if (key && !paperMap.has(key)) {
        paperMap.set(key, {
          id: paper.paperId,
          title: paper.title,
          year: paper.year ? paper.year.toString() : 'N/A',
          authors: paper.authors ? paper.authors.map((a: any) => a.name).join(', ') : '',
          journal: paper.venue || 'Journal non spécifié',
          doi: paper.externalIds?.DOI || '',
          url: paper.url,
          citations: paper.citationCount || 0,
          abstract: paper.abstract
        })
      }
    }

    papers.value = Array.from(paperMap.values())

  } catch (err: any) {
    console.error('Erreur complète:', err.response?.data || err)
    if (err.response?.status === 429) {
      error.value = "Trop de requêtes. Veuillez réessayer plus tard."
    } else {
      error.value = "Erreur de connexion à l'API Semantic Scholar."
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  searchScientificPapers()
})

const getDoiUrl = (doi: string) => {
  if (!doi) return '#'
  if (doi.startsWith('http')) return doi
  return `https://doi.org/${doi}`
}

const totalStats = computed(() => {
  if (authorInfo.value.length === 0) return null
  
  const totalPapers = new Set(papers.value.map(p => p.id)).size
  const totalCitations = papers.value.reduce((sum, p) => sum + (p.citations || 0), 0)
  
  return {
    papers: totalPapers,
    citations: totalCitations,
    authors: authorInfo.value.length
  }
})

const filteredPublications = computed(() => {
  let filtered = papers.value.filter(pub => {
    return searchQuery.value === '' ||
      pub.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.value.toLowerCase())
  })

  filtered.sort((a, b) => {
    const yearA = a.year === 'N/A' || !a.year ? 0 : parseInt(a.year)
    const yearB = b.year === 'N/A' || !b.year ? 0 : parseInt(b.year)
    return yearB - yearA
  })

  return filtered
})

const availableYears = computed(() => {
  const years = [...new Set(papers.value.map(pub => pub.year))]
    .filter(y => y !== 'N/A')
    .sort((a, b) => parseInt(b) - parseInt(a))
  return years
})

const clearFilters = () => {
  searchQuery.value = ''
}
</script>

<template>
  <div class="publications-page">
    <!-- Hero Section -->
    <section class="publications-hero">
      <div class="hero-pattern"></div>
      <div class="search-expandable" :class="{ 'is-expanded': searchExpanded }">
        <button class="search-toggle" @click="searchExpanded = !searchExpanded" :aria-label="t('publications.search.placeholder')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
        <div class="search-dropdown">
          <svg class="search-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="t('publications.search.placeholder')"
            class="search-input"
            @keydown.esc="searchExpanded = false"
          >
        </div>
      </div>
      <div class="container">
        <div class="publications-hero__content">

          <h1 class="hero-title">{{ t('publications.hero.title') }}</h1>
          <p class="hero-lead">{{ t('publications.hero.lead') }}</p>
          
          <div class="publications-stats" v-if="!loading && papers.length > 0">
            <div class="stat-card">
              <span class="stat-value">{{ papers.length }}</span>
              <span class="stat-label">{{ t('publications.stats.totalPublications') }}</span>
            </div>
            <div class="stat-card" v-if="totalStats">
              <span class="stat-value">{{ totalStats.citations.toLocaleString() }}</span>
              <span class="stat-label">{{ t('publications.stats.citations') }}</span>
            </div>
            <div class="stat-card" v-if="availableYears.length > 0">
              <span class="stat-value">{{ availableYears[availableYears.length - 1] }} – {{ availableYears[0] }}</span>
              <span class="stat-label">{{ t('publications.stats.years') }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator" @click="scrollToContent">
        <span>{{ t('common.readMore') }}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>

    <!-- Main Content -->
    <section class="publications-content" ref="contentRef">
      <div class="container">
        <!-- Results Info -->
        <div v-if="!loading && searchQuery" class="results-info">
          <p>
            <span class="count-highlight">{{ filteredPublications.length }}</span> 
            {{ t('publications.stats.resultsFound', { n: filteredPublications.length }) }}
          </p>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="loading-grid">
          <div v-for="i in 5" :key="i" class="skeleton-card">
            <div class="skeleton-meta"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-authors"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-footer"></div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-container">
          <div class="error-card">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <p>{{ error }}</p>
            <button @click="searchScientificPapers" class="btn-retry">Réessayer</button>
          </div>
        </div>

        <!-- Publications List -->
        <div v-else-if="filteredPublications.length > 0" class="publications-list">
          <div v-for="pub in filteredPublications" :key="pub.id" class="pub-card" :class="{ 'is-expanded': expandedAbstracts.has(pub.id) }">
            <div class="pub-card__main">
              <div class="pub-card__meta">
                <span class="pub-year">{{ pub.year }}</span>
                <span class="pub-journal">{{ pub.journal }}</span>
                <span v-if="pub.citations" class="pub-citations">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  {{ pub.citations }} citations
                </span>
              </div>

              <h3 class="pub-title">
                <a v-if="pub.url" :href="pub.url" target="_blank" rel="noopener noreferrer">
                  {{ pub.title }}
                  <svg class="external-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <span v-else>{{ pub.title }}</span>
              </h3>

              <p class="pub-authors" v-html="pub.authors.replace(/Michaux J\.?R?\.?/g, '<strong>$&</strong>').replace(/Johan Michaux/g, '<strong>$&</strong>')"></p>
              
              <div v-if="pub.abstract" class="pub-abstract-wrapper">
                <p class="pub-abstract" :class="{ 'is-truncated': !expandedAbstracts.has(pub.id) }">
                  {{ pub.abstract }}
                </p>
                <button @click="toggleAbstract(pub.id)" class="btn-toggle-abstract">
                  {{ expandedAbstracts.has(pub.id) ? 'Voir moins' : 'Lire le résumé' }}
                </button>
              </div>

              <div class="pub-footer">
                <div class="pub-links">
                  <a v-if="pub.doi" :href="getDoiUrl(pub.doi)" target="_blank" rel="noopener noreferrer" class="link-doi">
                    <span class="doi-label">DOI</span>
                    {{ pub.doi }}
                  </a>
                </div>
                
                <div class="pub-actions">
                  <button @click="copyCitation(pub)" class="btn-action" title="Copier la citation">
                    <svg v-if="copiedId !== pub.id" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {{ copiedId === pub.id ? 'Copié !' : 'Citation' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-else class="no-results">
          <div class="no-results-card">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <h3>{{ t('publications.search.noResults') }}</h3>
            <p>Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.</p>
            <button @click="clearFilters" class="btn-retry">Réinitialiser les filtres</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.publications-page {
  background: var(--parchment);
  min-height: 100vh;
}

/* Hero Section */
.publications-hero {
  position: relative;
  height: calc(100vh - var(--nav-height));
  margin-top: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, var(--parchment), var(--bone));
  overflow: hidden;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(var(--forest) 0.5px, transparent 0.5px);
  background-size: 30px 30px;
  opacity: 0.03;
  pointer-events: none;
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  color: var(--slate);
  font-size: 0.85rem;
  font-weight: 600;
  animation: bounce 2s infinite;
  cursor: pointer;
}

.scroll-indicator svg {
  width: 24px;
  height: 24px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Search Expandable */
.search-expandable {
  position: absolute;
  top: var(--space-lg);
  left: var(--space-lg);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0;
}

.search-toggle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--bone);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ink);
  transition: all 0.3s var(--ease-out);
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}

.search-toggle:hover {
  background: var(--forest);
  border-color: var(--forest);
  color: var(--white);
}

.search-toggle svg {
  width: 20px;
  height: 20px;
}

.search-dropdown {
  position: absolute;
  left: 24px;
  top: 0;
  width: 0;
  overflow: hidden;
  transition: width 0.3s var(--ease-out);
}

.search-expandable.is-expanded .search-dropdown {
  width: 260px;
}

.search-expandable.is-expanded .search-toggle {
  border-radius: 50%;
  border-color: var(--forest);
  background: var(--forest);
  color: var(--white);
}

.search-dropdown .search-input {
  width: 260px;
  height: 48px;
  padding: 0 16px 0 48px;
  background: var(--white);
  border: 2px solid var(--forest);
  border-left: none;
  border-radius: 0 24px 24px 0;
  font-size: 1rem;
  transition: all 0.3s var(--ease-out);
  box-shadow: var(--shadow-md);
}

.search-dropdown .search-input:focus {
  outline: none;
  box-shadow: 0 0 0 4px var(--canopy-glow);
}

.search-dropdown .search-input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--slate);
  pointer-events: none;
  width: 20px;
  height: 20px;
}

.publications-hero__content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding-top: var(--space-xs);
}

.label-badge {
  display: inline-block;
  padding: 4px 12px;
  background: var(--canopy-glow);
  color: var(--forest);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 20px;
  margin-bottom: var(--space-md);
  animation: fadeIn 0.8s ease-out;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--obsidian);
  margin-bottom: var(--space-md);
  line-height: 1.1;
  animation: fadeSlideUp 0.8s var(--ease-out);
}

.hero-lead {
  font-size: 1.25rem;
  color: var(--slate);
  margin-bottom: var(--space-4xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeSlideUp 0.8s var(--ease-out) 0.1s both;
}

.publications-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
  margin-bottom: var(--space-3xl);
  animation: fadeSlideUp 0.8s var(--ease-out) 0.2s both;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  padding: var(--space-lg) var(--space-xl);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  min-width: 160px;
  border: 1px solid rgba(10, 15, 13, 0.03);
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--forest);
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--slate);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

/* Controls */
.publications-content {
  padding: var(--space-4xl) 0 var(--space-5xl);
  background: var(--white);
}

.controls-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
  background: var(--parchment);
  padding: var(--space-md);
  border-radius: 20px;
  border: 1px solid var(--bone);
}

.filter-group {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

.select-wrapper {
  position: relative;
}

.filter-select {
  appearance: none;
  padding: 12px 36px 12px 16px;
  background: var(--white);
  border: 1px solid var(--bone);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink);
  cursor: pointer;
  min-width: 160px;
  transition: all 0.2s;
}

.select-wrapper::after {
  content: "";
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--slate);
  pointer-events: none;
}

.filter-select:hover {
  border-color: var(--slate);
}

.btn-clear {
  padding: 12px 16px;
  background: var(--bone);
  color: var(--ink);
  border: none;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-clear:hover {
  background: #e2dfd9;
}

/* Results Info */
.results-info {
  margin-top: var(--space-xl);
  margin-bottom: var(--space-xl);
  color: var(--slate);
}

.count-highlight {
  color: var(--forest);
  font-weight: 800;
  font-size: 1.1rem;
}

/* Publications List */
.publications-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.pub-card {
  background: var(--white);
  border-radius: 20px;
  border: 1px solid var(--bone);
  padding: var(--space-xl);
  transition: all 0.3s var(--ease-out);
  position: relative;
  overflow: hidden;
}

.pub-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--canopy-light);
}

.pub-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
}

.pub-year {
  background: var(--forest);
  color: var(--white);
  padding: 2px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
}

.pub-journal {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--slate);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pub-citations {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  color: #d97706;
  font-weight: 700;
}

.pub-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--obsidian);
  margin-bottom: var(--space-sm);
  line-height: 1.3;
}

.pub-title a {
  color: inherit;
  transition: color 0.2s;
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
}

.pub-title a:hover {
  color: var(--forest-mid);
}

.external-link-icon {
  opacity: 0.3;
  transition: opacity 0.2s;
}

.pub-title a:hover .external-link-icon {
  opacity: 1;
}

.pub-authors {
  color: var(--ink-light);
  font-size: 1rem;
  margin-bottom: var(--space-lg);
  line-height: 1.6;
}

.pub-authors strong {
  color: var(--forest);
  font-weight: 700;
}

.pub-abstract-wrapper {
  background: var(--parchment);
  padding: var(--space-lg);
  border-radius: 12px;
  margin-bottom: var(--space-lg);
}

.pub-abstract {
  font-size: 0.95rem;
  color: var(--slate);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 8px;
}

.pub-abstract.is-truncated {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn-toggle-abstract {
  background: none;
  border: none;
  color: var(--forest);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
}

.pub-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-md);
  border-top: 1px solid var(--bone);
  gap: var(--space-md);
  flex-wrap: wrap;
}

.link-doi {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--slate);
  background: var(--bone);
  padding: 6px 12px;
  border-radius: 8px;
  transition: all 0.2s;
}

.link-doi:hover {
  background: var(--slate);
  color: var(--white);
}

.doi-label {
  font-weight: 800;
  font-size: 0.75rem;
  background: rgba(0,0,0,0.1);
  padding: 2px 6px;
  border-radius: 4px;
}

.pub-actions {
  display: flex;
  gap: var(--space-sm);
}

.btn-action {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--white);
  border: 1px solid var(--bone);
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.2s;
}

.btn-action:hover {
  background: var(--parchment);
  border-color: var(--slate);
}

.check-icon {
  color: var(--canopy);
}

/* Skeleton Loaders */
.loading-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.skeleton-card {
  background: var(--white);
  border-radius: 20px;
  border: 1px solid var(--bone);
  padding: var(--space-xl);
  overflow: hidden;
}

.skeleton-meta, .skeleton-title, .skeleton-authors, .skeleton-text, .skeleton-footer {
  background: linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-meta { width: 200px; height: 20px; margin-bottom: 20px; }
.skeleton-title { width: 80%; height: 32px; margin-bottom: 12px; }
.skeleton-authors { width: 60%; height: 20px; margin-bottom: 24px; }
.skeleton-text { width: 100%; height: 80px; margin-bottom: 24px; }
.skeleton-footer { width: 150px; height: 36px; }

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Error and No Results */
.error-container, .no-results {
  padding: var(--space-5xl) 0;
  text-align: center;
}

.error-card, .no-results-card {
  max-width: 500px;
  margin: 0 auto;
  padding: var(--space-3xl);
  background: var(--parchment);
  border-radius: 24px;
  border: 1px solid var(--bone);
}

.error-card svg { color: #ef4444; margin-bottom: var(--space-lg); }
.error-card p { font-weight: 600; margin-bottom: var(--space-xl); }

.no-results-card h3 { font-family: var(--font-display); font-size: 1.75rem; margin: var(--space-lg) 0 var(--space-sm); }
.no-results-card p { color: var(--slate); margin-bottom: var(--space-xl); }

.btn-retry {
  padding: 12px 24px;
  background: var(--forest);
  color: var(--white);
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-retry:hover { background: var(--forest-mid); }

/* Responsive */
@media (max-width: 1024px) {
  .controls-wrapper {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .publications-hero { padding: var(--space-3xl) 0; }
  .stat-card { min-width: 140px; padding: var(--space-md); }
  .pub-card { padding: var(--space-lg); }
  .pub-title { font-size: 1.25rem; }
  .filter-group { flex-wrap: wrap; }
  .filter-select { flex: 1; min-width: 120px; }
}
</style>