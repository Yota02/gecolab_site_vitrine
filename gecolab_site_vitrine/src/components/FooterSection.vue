<script setup lang="ts">
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
            <stop offset="30%" stop-color="#1DAC78"/>
            <stop offset="70%" stop-color="#1DAC78"/>
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
          <p class="footer__tagline">Génétique et Conservation</p>
          <p class="footer__affiliation">Université de Liège</p>
        </div>

        <!-- Navigation col -->
        <div class="footer__col">
          <h4 class="footer__heading">Navigation</h4>
          <ul>
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/services">Services</RouterLink></li>
            <li><RouterLink to="/a-propos">À propos</RouterLink></li>
            <li><RouterLink to="/presse">Presse</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Services col -->
        <div class="footer__col">
          <h4 class="footer__heading">Expertises</h4>
          <ul>
            <li>ADN environnemental</li>
            <li>Inventaire de biodiversité</li>
            <li>PCR digitale</li>
            <li>Régime alimentaire</li>
            <li>Génétique des populations</li>
          </ul>
        </div>

        <!-- Contact col -->
        <div class="footer__col">
          <h4 class="footer__heading">Contact</h4>
          <ul>
            <li>Institut de Botanique (Bât. B22)</li>
            <li>Chemin de la vallée 4</li>
            <li>4000 Liège, Belgique</li>
            <li class="footer__phone">+32 4 366 21 30</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; {{ new Date().getFullYear() }} GeCoLAB — Université de Liège. Tous droits réservés.</p>
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
