<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

function closeMobile() {
  mobileOpen.value = false
}

function toggleLanguage() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
  localStorage.setItem('locale', locale.value)
}

const currentLanguage = computed(() => locale.value.toUpperCase())

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  // Load saved language preference
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && (savedLocale === 'fr' || savedLocale === 'en')) {
    locale.value = savedLocale
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const links = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/services', label: t('nav.services') },
  { to: '/a-propos', label: t('nav.about') },
  { to: '/partenaires', label: t('nav.partners') },
  { to: '/presse', label: t('nav.press') },
  { to: '/contact', label: t('nav.contact') },
])
</script>

<template>
  <header class="navbar" :class="{ scrolled, 'mobile-open': mobileOpen }">
    <nav class="navbar__inner container">
      <RouterLink to="/" class="navbar__brand" @click="closeMobile">
        <svg class="navbar__logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
          <path d="M20 6C20 6 14 13 14 20C14 27 20 34 20 34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M20 6C20 6 26 13 26 20C26 27 20 34 20 34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="12" y1="15" x2="28" y2="15" stroke="currentColor" stroke-width="1" opacity="0.5"/>
          <line x1="11" y1="20" x2="29" y2="20" stroke="currentColor" stroke-width="1" opacity="0.5"/>
          <line x1="12" y1="25" x2="28" y2="25" stroke="currentColor" stroke-width="1" opacity="0.5"/>
        </svg>
        <span class="navbar__name">
          <span class="navbar__name-ge">Ge</span><span class="navbar__name-co">Co</span><span class="navbar__name-lab">LAB</span>
        </span>
      </RouterLink>

       <button
         class="navbar__hamburger"
         :class="{ active: mobileOpen }"
         @click="mobileOpen = !mobileOpen"
         aria-label="Menu"
       >
         <span></span>
         <span></span>
         <span></span>
       </button>

       <button
         class="navbar__lang-toggle"
         @click="toggleLanguage"
         :aria-label="t('common.language')"
       >
         <svg v-if="currentLanguage === 'FR'" class="flag-icon" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
           <!-- Drapeau français -->
           <rect width="8" height="18" fill="#002654"/>
           <rect x="8" width="8" height="18" fill="#FFFFFF"/>
           <rect x="16" width="8" height="18" fill="#ED2939"/>
         </svg>
         <svg v-else class="flag-icon" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
           <!-- Drapeau anglais -->
           <rect width="24" height="18" fill="#012169"/>
           <path d="M0 0L24 18M24 0L0 18" stroke="#FFFFFF" stroke-width="1.5"/>
           <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" stroke-width="1"/>
           <path d="M12 0V18M0 9H24" stroke="#FFFFFF" stroke-width="2"/>
           <path d="M12 0V18M0 9H24" stroke="#C8102E" stroke-width="1"/>
         </svg>
       </button>

      <ul class="navbar__links" :class="{ open: mobileOpen }">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="navbar__link"
            :class="{ active: route.path === link.to }"
            @click="closeMobile"
          >
            {{ link.label }}
            <span class="navbar__link-bar"></span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  transition: all 0.4s var(--ease-out);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(10, 15, 13, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(29, 172, 120, 0.1);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--white);
  z-index: 10;
}

.navbar__logo {
  width: 36px;
  height: 36px;
  color: var(--canopy);
  transition: transform 0.5s var(--ease-out);
}

.navbar__brand:hover .navbar__logo {
  transform: rotate(15deg) scale(1.05);
}

.navbar__name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  letter-spacing: -0.01em;
}

.navbar__name-ge { color: var(--white); }
.navbar__name-co { color: var(--canopy); }
.navbar__name-lab {
  color: var(--white);
  font-size: 0.85em;
  letter-spacing: 0.12em;
  opacity: 0.7;
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: var(--space-xs);
}

.navbar__link {
  position: relative;
  display: block;
  padding: var(--space-sm) var(--space-md);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color 0.3s var(--ease-out);
}

.navbar__link:hover,
.navbar__link.active {
  color: var(--white);
}

.navbar__link-bar {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 20px;
  height: 2px;
  background: var(--canopy);
  border-radius: 1px;
  transition: transform 0.3s var(--ease-out);
}

.navbar__link:hover .navbar__link-bar,
.navbar__link.active .navbar__link-bar {
  transform: translateX(-50%) scaleX(1);
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 10;
}

.navbar__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 1px;
  transition: all 0.3s var(--ease-out);
}

.navbar__hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

/* Language Toggle */
.navbar__lang-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s var(--ease-out);
  z-index: 10;
  padding: 4px;
}

.navbar__lang-toggle:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.flag-icon {
  width: 32px;
  height: 24px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .navbar__hamburger {
    display: flex;
  }

  .navbar__lang-toggle {
    display: none;
  }

  .navbar__links {
    position: fixed;
    inset: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-md);
    background: rgba(10, 15, 13, 0.97);
    backdrop-filter: blur(30px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s var(--ease-out);
  }

  .navbar__links.open {
    opacity: 1;
    visibility: visible;
  }

  .navbar__link {
    font-size: 1.25rem;
    padding: var(--space-md) var(--space-xl);
  }

  .navbar {
    background: rgba(10, 15, 13, 0.8);
    backdrop-filter: blur(10px);
  }
}
</style>
