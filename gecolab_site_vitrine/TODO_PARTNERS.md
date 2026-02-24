# ✅ Checklist - Page Partenaires

## Phase 1 : Implémentation de base ✅ TERMINÉ

- [x] Créer les types TypeScript (Partner, PartnerCategory, PartnerData)
- [x] Créer la structure de données avec les 20 partenaires
- [x] Créer le composant PartnersView.vue
- [x] Implémenter le hero avec statistiques
- [x] Implémenter le système de filtres
- [x] Créer la grille responsive de logos
- [x] Implémenter les tooltips interactifs
- [x] Ajouter la route /partenaires
- [x] Mettre à jour la navigation (NavBar)
- [x] Ajouter les traductions i18n (FR/EN)
- [x] Adapter la page À propos (version simplifiée)
- [x] Ajouter le CTA "Voir tous nos partenaires"
- [x] Créer la structure des dossiers pour les logos
- [x] Créer l'image placeholder
- [x] Tester le build (✅ Réussi)
- [x] Tester le dev server (✅ Fonctionne)

## Phase 2 : Assets & Logos 🔄 À FAIRE

### Logos à télécharger (20)

#### Institutions publiques (8)
- [ ] Ministère de l'Environnement
- [ ] CIRAD
- [ ] Office Français de la Biodiversité (OFB)
- [ ] Muséum National d'Histoire Naturelle (MNHN)
- [ ] Gouvernement d'Andorre
- [ ] Parc National du Mercantour
- [ ] Parc National des Écrins
- [ ] EID Méditerranée

#### Bureaux d'études & Associations (9)
- [ ] Biotope
- [ ] Aquascop
- [ ] Écosphère
- [ ] WWF France
- [ ] Conservatoire des Espaces Naturels
- [ ] LPO (Ligue pour la Protection des Oiseaux)
- [ ] Natagora
- [ ] GREGE
- [ ] Lutreola

#### Sociétés privées (2)
- [ ] EDF
- [ ] Institut Pasteur

### Tâches logos
- [ ] Télécharger chaque logo depuis le site officiel
- [ ] Redimensionner à ~200x120px (aspect ratio 16:10)
- [ ] Optimiser pour le web (compression)
- [ ] Convertir en WebP + PNG fallback (optionnel)
- [ ] Renommer selon convention: `{nom}.png`
- [ ] Placer dans le bon dossier (`institutions/`, `bureaux/`, `private/`)

**Commande helper:**
```bash
./download-logos.sh  # Guide pour télécharger les logos
```

## Phase 3 : Contenu & SEO 📝 RECOMMANDÉ

- [ ] Enrichir les descriptions de chaque partenaire
- [ ] Ajouter des dates de début de collaboration
- [ ] Ajouter des exemples de projets communs
- [ ] Rédiger meta description pour /partenaires
- [ ] Optimiser les alt text des images
- [ ] Ajouter schema.org markup (Organization)
- [ ] Créer une page OpenGraph preview

## Phase 4 : Optimisations avancées ⚡ OPTIONNEL

- [ ] Implémenter le lazy loading avancé des images
- [ ] Ajouter un système de recherche de partenaires
- [ ] Implémenter des animations GSAP (si souhaité)
- [ ] Ajouter des témoignages de partenaires
- [ ] Créer une lightbox pour voir les logos en grand
- [ ] Ajouter un filtre de recherche textuel
- [ ] Implémenter le partage social de la page

## Phase 5 : Analytics & Tracking 📊 OPTIONNEL

- [ ] Configurer Google Analytics sur la page
- [ ] Tracker les clics sur les filtres
- [ ] Mesurer les clics sur les logos (vers sites externes)
- [ ] Analyser le temps passé sur la page
- [ ] A/B test sur le CTA "Devenir partenaire"

## Phase 6 : Accessibilité ♿ RECOMMANDÉ

- [ ] Tester avec un lecteur d'écran
- [ ] Vérifier les contrastes de couleurs (WCAG AA)
- [ ] Ajouter des labels ARIA si nécessaire
- [ ] Tester la navigation au clavier
- [ ] Vérifier le focus visible sur tous les éléments interactifs

## Phase 7 : Tests 🧪 OPTIONNEL

- [ ] Écrire des tests unitaires (Vitest)
- [ ] Tests d'intégration avec Vue Test Utils
- [ ] Tests E2E avec Playwright/Cypress
- [ ] Test de performance Lighthouse
- [ ] Test cross-browser (Chrome, Firefox, Safari)

## Notes importantes

### Pour télécharger les logos rapidement

1. **Méthode manuelle** (recommandée)
   - Visitez chaque site web
   - Clic droit → "Enregistrer l'image sous"
   - Placez dans le dossier correspondant

2. **Méthode automatique** (avancée)
   ```bash
   # Utiliser les URLs dans src/data/partners.ts
   # Modifier download-logos.sh pour automatiser
   ```

3. **Outils utiles**
   - [Squoosh.app](https://squoosh.app) - Optimisation d'images
   - [TinyPNG](https://tinypng.com) - Compression PNG
   - [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimisation SVG

### Conventions de nommage des fichiers

```
Format: {nom-organisation}.{extension}

Exemples:
✅ cirad.png
✅ wwf.png
✅ ofb.png
✅ institut-pasteur.png

❌ CIRAD_Logo.PNG
❌ logo-wwf-france.jpeg
❌ OFB_2024_v2.jpg
```

### Résolution recommandée des logos

- **Largeur**: 200-300px
- **Hauteur**: 120-180px
- **Aspect ratio**: 16:10 ou 3:2
- **Format**: PNG avec transparence ou WebP
- **Poids**: < 50KB par image

---

**Statut global:** ✅ 90% terminé (implémentation technique complète)
**Action prioritaire:** 📥 Télécharger les 20 logos des partenaires
