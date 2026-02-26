<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <!-- Decorative top border -->
    <div class="footer__border">
      <svg viewBox="0 0 1200 3" preserveAspectRatio="none">
        <line x1="0" y1="1.5" x2="1200" y2="1.5" stroke="url(#footerGrad)" stroke-width="2"/>
        <defs>
          <linearGradient id="footerGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="transparent"/>
            <stop offset="30%" stop-color="#22C55E"/>
            <stop offset="70%" stop-color="#22C55E"/>
            <stop offset="100%" stop-color="transparent"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="footer__inner container">
      <div class="footer__grid">
        <!-- Brand col -->
        <div class="footer__brand">
          <div class="footer__logo-row">
            <span class="footer__name">
              <span class="ge">Ge</span><span class="co">Co</span><span class="lab">LAB</span>
            </span>
          </div>
          <p class="footer__tagline">{{ t('footer.tagline') }}</p>
          <p class="footer__affiliation">{{ t('footer.affiliation') }}</p>
          <div class="footer__social">
            <a href="https://www.linkedin.com/company/gecolab-be/posts/?feedView=all" class="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation col -->
        <div class="footer__col">
          <h4 class="footer__heading">{{ t('footer.navigation') }}</h4>
          <ul>
            <li><RouterLink to="/">{{ t('nav.home') }}</RouterLink></li>
            <li><RouterLink to="/services">{{ t('nav.services') }}</RouterLink></li>
            <li><RouterLink to="/a-propos">{{ t('nav.about') }}</RouterLink></li>
            <li><RouterLink to="/vulgarisation">{{ t('nav.vulgarisation') }}</RouterLink></li>
            <li><RouterLink to="/contact">{{ t('nav.contact') }}</RouterLink></li>
          </ul>
        </div>

        <!-- Services col -->
        <div class="footer__col">
          <h4 class="footer__heading">{{ t('footer.expertises') }}</h4>
          <ul>
            <li>{{ t('footer.expertisesList.edna') }}</li>
            <li>{{ t('footer.expertisesList.inventory') }}</li>
            <li>{{ t('footer.expertisesList.digitalPCR') }}</li>
            <li>{{ t('footer.expertisesList.diet') }}</li>
            <li>{{ t('footer.expertisesList.genetics') }}</li>
          </ul>
        </div>

        <!-- Contact col -->
        <div class="footer__col">
          <h4 class="footer__heading">{{ t('footer.contact') }}</h4>
          <ul>
            <li>Institut de Botanique (Bât. B22)</li>
            <li>Chemin de la vallée 4</li>
            <li>4000 Liège, Belgique</li>
            <li class="footer__phone">+32 4 366 21 30</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; {{ new Date().getFullYear() }} GeCoLAB — {{ t('footer.affiliation') }}. {{ t('footer.copyright') }}</p>
      </div>
    </div>

    <!-- Background texture -->
    <div class="footer__texture"></div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: var(--obsidian);
  color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
}

.footer__border {
  height: 2px;
}

.footer__border svg {
  width: 100%;
  height: 3px;
}

.footer__texture {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.footer__inner {
  position: relative;
  z-index: 1;
  padding-top: var(--space-3xl);
  padding-bottom: var(--space-xl);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.footer__name {
  font-family: var(--font-display);
  font-size: 1.5rem;
}

.footer__name .ge { color: var(--white); }
.footer__name .co { color: var(--canopy); }
.footer__name .lab {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8em;
  letter-spacing: 0.12em;
}

.footer__tagline {
  margin-top: var(--space-sm);
  font-style: italic;
  font-size: 0.9rem;
  color: var(--canopy);
  opacity: 0.8;
}

.footer__affiliation {
  margin-top: var(--space-xs);
  font-size: 0.8rem;
  opacity: 0.5;
}

.footer__social {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s ease;
  border-radius: 4px;
}

.footer__social-link:hover {
  color: var(--canopy);
}

.footer__social-link svg {
  width: 20px;
  height: 20px;
}

.footer__heading {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: var(--space-md);
}

.footer__col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer__col li {
  font-size: 0.875rem;
}

.footer__col a {
  transition: color 0.2s;
}

.footer__col a:hover {
  color: var(--canopy);
}

.footer__phone {
  margin-top: var(--space-sm);
  color: var(--canopy);
  font-weight: 500;
}

.footer__bottom {
  padding-top: var(--space-xl);
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.4;
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
  }
}

@media (max-width: 480px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>
