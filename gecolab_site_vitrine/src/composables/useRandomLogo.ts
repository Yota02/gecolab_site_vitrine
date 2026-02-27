import { ref, computed } from 'vue'

const logoModules = import.meta.glob('/public/images/logos/*.{png,jpg,jpeg,svg,webp}', {
  eager: true
}) as Record<string, { default: string }>

const animalLogos = Object.values(logoModules)
  .map((mod) => mod.default)
  .filter((logo) => !logo.includes('liege'))

// État partagé du logo
const currentLogoRef = ref<string>('')

function setRandomLogo() {
  const randomIndex = Math.floor(Math.random() * animalLogos.length)
  const selectedLogo = animalLogos[randomIndex]!
  currentLogoRef.value = selectedLogo
  return selectedLogo
}

function initializeLogo() {
  if (!currentLogoRef.value) {
    setRandomLogo()
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