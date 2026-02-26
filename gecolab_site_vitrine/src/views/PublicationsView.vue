<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
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
const sortBy = ref('yearDesc')
const selectedYear = ref('all')

const fetchAuthorInfo = async (authorId: string) => {
  try {
    const response = await fetchWithCors(`https://api.semanticscholar.org/graph/v1/author/${authorId}`, {
      params: { fields: 'name,paperCount,citationCount,hIndex' }
    })
    console.log('Author info fetched:', authorId, response.data)
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

    console.log('Total unique publications:', papers.value.length)
    console.log('Author info:', authorInfo.value)

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

// Helper pour construire l'URL DOI
const getDoiUrl = (doi: string) => {
  if (!doi) return '#'
  if (doi.startsWith('http')) return doi
  return `https://doi.org/${doi}`
}

// Stats combinées de tous les auteurs
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

// Publications filtrées et triées (parmi les résultats de l'API)
const filteredPublications = computed(() => {
  let filtered = papers.value.filter(pub => {
    const matchesSearch = searchQuery.value === '' ||
      pub.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesYear = selectedYear.value === 'all' || pub.year === selectedYear.value

    return matchesSearch && matchesYear
  })

  // Tri
  filtered.sort((a, b) => {
    if (sortBy.value === 'yearDesc') {
      return parseInt(b.year) - parseInt(a.year)
    } else if (sortBy.value === 'yearAsc') {
      return parseInt(a.year) - parseInt(b.year)
    } else if (sortBy.value === 'titleAsc') {
      return a.title.localeCompare(b.title)
    } else if (sortBy.value === 'titleDesc') {
      return b.title.localeCompare(a.title)
    }
    return 0
  })

  return filtered
})

// Liste des années disponibles (basée sur les résultats de l'API)
const availableYears = computed(() => {
  const years = [...new Set(papers.value.map(pub => pub.year))]
    .filter(y => y !== 'N/A')
    .sort((a, b) => parseInt(b) - parseInt(a))
  return years
})

// Fonction pour effacer les filtres
const clearFilters = () => {
  searchQuery.value = ''
  selectedYear.value = 'all'
  sortBy.value = 'yearDesc'
}

// Options de tri
const sortOptions = [
  { value: 'yearDesc', key: 'yearDesc' },
  { value: 'yearAsc', key: 'yearAsc' },
  { value: 'titleAsc', key: 'titleAsc' },
  { value: 'titleDesc', key: 'titleDesc' }
]
</script>

<template>
  <div class="publications-page">
    <!-- Hero Section -->
    <section class="publications-hero">
      <div class="container">
        <div class="publications-hero__content">
          <h1 class="section-title">{{ t('publications.hero.title') }}</h1>
          <p class="publications-hero__lead">{{ t('publications.hero.lead') }}</p>
          <div class="publications-stats" v-if="!loading && (papers.length > 0 || authorInfo.length > 0)">
            <span class="publications-stats__item" v-if="papers.length > 0">{{ papers.length }} {{ t('publications.stats.totalPublications') }}</span>
            <span class="publications-stats__item" v-if="totalStats">{{ totalStats.citations }} citations</span>
            <span class="publications-stats__item" v-if="availableYears.length > 0">
              {{ availableYears[availableYears.length - 1] }} - {{ availableYears[0] }}
            </span>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Publications -->
    <section class="publications">
      <div class="container">
        <!-- Local Filters -->
        <div class="publications-controls" v-if="papers.length > 0">
          <div class="search-bar">
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="t('publications.search.placeholder')"
              class="search-input"
            >
          </div>

          <div class="filters">
            <select v-model="sortBy" class="filter-select">
              <option v-for="option in sortOptions" :key="option.value" :value="option.value">
                {{ t(`publications.filters.sortOptions.${option.key}`) }}
              </option>
            </select>

            <select v-model="selectedYear" class="filter-select">
              <option value="all">{{ t('publications.filters.allYears') }}</option>
              <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
            </select>

            <button @click="clearFilters" class="clear-filters-btn">
              {{ t('publications.filters.clearFilters') }}
            </button>
          </div>
        </div>

        <!-- Loading & Error -->
        <div v-if="loading" class="loading-state">
          <div class="spinner"></div>
          <p>Récupération des articles depuis Semantic Scholar...</p>
        </div>

        <div v-else-if="error" class="error-message">
          <p>{{ error }}</p>
        </div>

        <!-- Results Info -->
        <div v-else-if="searchQuery || selectedYear !== 'all'" class="results-info">
          <p><span class="results-count">{{ filteredPublications.length }}</span> {{ t('publications.stats.resultsFound', filteredPublications.length) }}</p>
        </div>

        <!-- Publications List -->
        <div v-if="!loading && filteredPublications.length > 0" class="publications__list">
          <div v-for="pub in filteredPublications" :key="pub.id" class="publication-card">
            <div class="publication-card__content">
              <div class="publication-card__meta">
                <span class="publication-card__year-badge">{{ pub.year }}</span>
                <span class="publication-card__journal-name">{{ pub.journal }}</span>
                <span v-if="pub.citations" class="publication-card__citations">★ {{ pub.citations }} citations</span>
              </div>
              <h3 class="publication-card__title">
                <a v-if="pub.url" :href="pub.url" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>
                <span v-else>{{ pub.title }}</span>
              </h3>
              <p class="publication-card__authors" v-html="pub.authors.replace('Michaux J.R.', '<strong>Michaux J.R.</strong>').replace('Michaux J.', '<strong>Michaux J.</strong>').replace('Johan Michaux', '<strong>Johan Michaux</strong>').replace('Johan R. Michaux', '<strong>Johan R. Michaux</strong>')"></p>
              
              <p v-if="pub.abstract" class="publication-card__abstract">
                {{ pub.abstract.length > 200 ? pub.abstract.substring(0, 200) + '...' : pub.abstract }}
              </p>

              <div class="publication-card__footer">
                <p v-if="pub.doi" class="publication-card__doi">
                  <a :href="getDoiUrl(pub.doi)" target="_blank" rel="noopener noreferrer" class="doi-link">
                    <span class="doi-label">DOI</span> {{ pub.doi }}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-else-if="!loading" class="no-results">
          <p>{{ t('publications.search.noResults') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.publications-page {
  margin-top: 120px;
}

.publications-hero {
  padding: var(--space-5xl) 0 var(--space-2xl);
  background: var(--parchment);
  color: var(--ink);
}

.publications-hero__content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.publications-hero__lead {
  font-size: 1.25rem;
  margin-bottom: var(--space-xl);
  opacity: 0.9;
}

.publications-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.publications-stats__item {
  background: rgba(10, 15, 13, 0.1);
  padding: var(--space-sm) var(--space-lg);
  border-radius: 20px;
  font-weight: 600;
}

.author-profiles {
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 1px solid rgba(10, 15, 13, 0.1);
}

.author-profiles__label {
  font-size: 0.85rem;
  color: var(--slate);
  margin-bottom: var(--space-sm);
}

.author-profiles__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-sm);
}

.author-profile-badge {
  font-size: 0.75rem;
  background: rgba(10, 15, 13, 0.05);
  padding: 4px 10px;
  border-radius: 12px;
  color: var(--ink);
}

/* Controls */
.publications-controls {
  margin-bottom: var(--space-3xl);
  display: grid;
  gap: var(--space-lg);
}

.search-bar {
  position: relative;
}

.search-input {
  width: 100%;
  padding: var(--space-lg);
  border: 2px solid var(--bone);
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s var(--ease-out);
}

.search-input:focus {
  outline: none;
  border-color: var(--canopy);
}

.filters {
  display: flex;
  gap: var(--space-lg);
  align-items: center;
  flex-wrap: wrap;
}

.filter-select {
  padding: var(--space-md) var(--space-lg);
  border: 2px solid var(--bone);
  border-radius: 8px;
  background: var(--white);
  font-size: 0.9rem;
  min-width: 200px;
  cursor: pointer;
  transition: border-color 0.3s var(--ease-out);
}

.filter-select:focus {
  outline: none;
  border-color: var(--canopy);
}

.clear-filters-btn {
  padding: var(--space-md) var(--space-lg);
  background: var(--canopy-light);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s var(--ease-out);
}

.clear-filters-btn:hover {
  background: var(--canopy);
}

/* States */
.loading-state {
  text-align: center;
  padding: var(--space-5xl) 0;
  color: var(--slate);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--bone);
  border-top-color: var(--canopy);
  border-radius: 50%;
  margin: 0 auto var(--space-lg);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message {
  text-align: center;
  padding: var(--space-xl);
  background: #fff5f5;
  color: #c53030;
  border-radius: 8px;
  margin-bottom: var(--space-2xl);
}

/* Results Info */
.results-info {
  margin-bottom: var(--space-xl);
  text-align: center;
  color: var(--slate);
  font-weight: 600;
}

.results-count {
  color: var(--canopy);
  font-size: 1.2rem;
}

/* No Results */
.no-results {
  text-align: center;
  padding: var(--space-4xl) 0;
  color: var(--slate);
}

/* Publications List */
.publications {
  padding: var(--space-4xl) 0;
  background: var(--mist);
  min-height: 400px;
}

.publications__list {
  display: grid;
  gap: var(--space-xl);
}

/* Publication Card */
.publication-card {
  padding: var(--space-2xl);
  background: var(--white);
  border-radius: 4px;
  border-left: 4px solid var(--bone);
  transition: all 0.3s ease;
}

.publication-card:hover {
  border-left-color: var(--canopy);
  background: #fafafa;
  transform: translateX(8px);
}

.publication-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-sm);
  flex-wrap: wrap;
}

.publication-card__year-badge {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--canopy);
  letter-spacing: 0.05em;
}

.publication-card__journal-name {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--slate);
  letter-spacing: 0.02em;
}

.publication-card__citations {
  font-size: 0.8rem;
  color: #e67e22;
  font-weight: 600;
}

.publication-card__content {
  flex: 1;
}

.publication-card__title {
  font-family: var(--font-body);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: var(--space-md);
  line-height: 1.4;
}

.publication-card__title a {
  color: inherit;
  text-decoration: none;
}

.publication-card__title a:hover {
  color: var(--canopy);
  text-decoration: underline;
}

.publication-card__authors {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: var(--space-md);
  line-height: 1.5;
}

.publication-card__abstract {
  font-size: 0.85rem;
  color: var(--slate);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
  font-style: italic;
}

.publication-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.doi-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--canopy);
  font-size: 0.8rem;
  text-decoration: none;
  background: transparent;
  border: 1px solid var(--bone);
  padding: 4px 12px;
  border-radius: 4px;
  transition: all 0.2s;
}

.doi-label { font-weight: bold; font-size: 0.75rem; }

.doi-link:hover {
  background: var(--bone);
  color: var(--ink);
}

/* Responsive */
@media (max-width: 768px) {
  .publications-hero {
    padding: var(--space-3xl) 0 var(--space-xl);
  }

  .publications-hero__lead {
    font-size: 1.1rem;
  }

  .publications-controls {
    margin-bottom: var(--space-2xl);
  }

  .filters {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-select {
    min-width: auto;
  }

  .publication-card {
    padding: var(--space-lg);
    border-left-width: 3px;
    text-align: left;
  }

  .publication-card__title {
    font-size: 1.1rem;
  }
}
</style>