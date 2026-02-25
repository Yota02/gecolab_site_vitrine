import { ref, computed } from 'vue'

const animalLogos = [
  `${import.meta.env.BASE_URL}images/logos/sanglier.png`,
  `${import.meta.env.BASE_URL}images/logos/loutre.png`,
  `${import.meta.env.BASE_URL}images/logos/loup.png`,
  `${import.meta.env.BASE_URL}images/logos/linx.png`,
  `${import.meta.env.BASE_URL}images/logos/gecko.png`,
  `${import.meta.env.BASE_URL}images/logos/dragon_komodo.png`
]

// État partagé du logo
const currentLogoRef = ref<string>('')

function setRandomLogo() {
  const randomIndex = Math.floor(Math.random() * animalLogos.length)
  const selectedLogo = animalLogos[randomIndex]
  currentLogoRef.value = selectedLogo
  localStorage.setItem('currentAnimalLogo', selectedLogo)
  return selectedLogo
}

function initializeLogo() {
  if (!currentLogoRef.value) {
    // Charger depuis localStorage ou générer un nouveau
    const saved = localStorage.getItem('currentAnimalLogo')
    if (saved && animalLogos.includes(saved)) {
      currentLogoRef.value = saved
    } else {
      setRandomLogo()
    }
  }
  return currentLogoRef.value
}

function changeLogo() {
  return setRandomLogo()
}

export function useRandomLogo() {
  // Initialiser au premier appel
  initializeLogo()

  return {
    currentLogo: computed(() => currentLogoRef.value),
    changeLogo
  }
}