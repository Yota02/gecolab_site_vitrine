import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
    },
    {
      path: '/services/biodiversite',
      name: 'service-biodiversite',
      component: () => import('@/views/services/BiodiversiteView.vue'),
    },
    {
      path: '/services/pcr-digitale',
      name: 'service-pcr-digitale',
      component: () => import('@/views/services/PcrDigitaleView.vue'),
    },
    {
      path: '/services/regime',
      name: 'service-regime',
      component: () => import('@/views/services/RegimeView.vue'),
    },
    {
      path: '/services/hybridation',
      name: 'service-hybridation',
      component: () => import('@/views/services/HybridationView.vue'),
    },
    {
      path: '/services/effectifs',
      name: 'service-effectifs',
      component: () => import('@/views/services/EffectifsView.vue'),
    },
    {
      path: '/services/pathogenes',
      name: 'service-pathogenes',
      component: () => import('@/views/services/PathogenesView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/a-propos',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/partenaires',
      name: 'partners',
      component: () => import('@/views/PartnersView.vue'),
    },
    {
      path: '/presse',
      name: 'press',
      component: () => import('@/views/PressView.vue'),
    },
     {
       path: '/publications',
       name: 'publications',
       component: () => import('@/views/PublicationsView.vue'),
     },
     {
       path: '/vulgarisation',
       name: 'vulgarisation',
       component: () => import('@/views/VulgarisationView.vue'),
     },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
