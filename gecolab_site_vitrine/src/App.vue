<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'

const { locale } = useI18n()

// Update HTML lang attribute when locale changes
watch(locale, (newLocale) => {
  document.documentElement.setAttribute('lang', newLocale)
}, { immediate: true })
</script>

<template>
  <div class="app-root">
    <NavBar />
    <main>
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>

<style>
/* ═══════════════════════════════════════════
   GLOBAL DESIGN TOKENS — "Deep Ecology Lab"
   ═══════════════════════════════════════════ */
:root {
  /* Core palette */
  --obsidian: #0a0f0d;
  --forest: #0A4A2E;
  --forest-mid: #0e7a4a;
  --canopy: #22C55E;
  --canopy-light: #34D399;
  --canopy-glow: rgba(29, 172, 120, 0.15);
  --canopy-glow-strong: rgba(29, 172, 120, 0.3);
  --parchment: #F7F5F0;
  --bone: #EBE8E2;
  --ink: #1a1a2e;
  --ink-light: #3a3a52;
  --slate: #6b7280;
  --mist: #f0eeea;
  --white: #ffffff;

  /* Typography */
  --font-display: 'Source Serif Pro', Georgia, serif;
  --font-body: 'DM Sans', system-ui, -apple-system, sans-serif;

  /* Spacing scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2.5rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  --space-4xl: 8rem;

  /* Layout */
  --max-width: 1200px;
  --nav-height: 90px;

  /* Transitions */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(10, 15, 13, 0.06);
  --shadow-md: 0 4px 20px rgba(10, 15, 13, 0.08);
  --shadow-lg: 0 12px 40px rgba(10, 15, 13, 0.12);
  --shadow-glow: 0 0 40px rgba(29, 172, 120, 0.1);
}

/* Reset */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.7;
  color: var(--ink);
  background: var(--parchment);
  overflow-x: hidden;
  text-align: justify;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Global utilities */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

/* Stagger-in animation */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes dnaRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Page transition */
.app-root main {
  min-height: calc(100vh - var(--nav-height));
}

/* Selection color */
::selection {
  background: var(--canopy);
  color: var(--white);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--parchment);
}

::-webkit-scrollbar-thumb {
  background: var(--forest);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--canopy);
}
</style>
