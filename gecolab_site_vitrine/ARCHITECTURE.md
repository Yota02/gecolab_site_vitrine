# Architecture de la Page Partenaires

## 🏗️ Structure des composants

```
┌─────────────────────────────────────────────────────┐
│                   NavBar.vue                        │
│  ┌──────────────────────────────────────────────┐  │
│  │ Accueil│Services│À propos│[Partenaires]│... │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│              PartnersView.vue (/partenaires)        │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │         Hero Section                          │ │
│  │  - Titre "Nos partenaires de confiance"       │ │
│  │  - Sous-titre descriptif                      │ │
│  │  - Stats (20+ partenaires, 8 institutions...) │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │         Filters Section                       │ │
│  │  [Tous(20)] [Institutions(8)] [Bureaux(9)]   │ │
│  │             [Sociétés privées(2)]             │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │         Partners Grid (5 cols responsive)     │ │
│  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐         │ │
│  │  │Logo│ │Logo│ │Logo│ │Logo│ │Logo│  ...    │ │
│  │  └────┘ └────┘ └────┘ └────┘ └────┘         │ │
│  │    ↑ Hover → Tooltip avec infos               │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │         CTA Section                           │ │
│  │  "Intéressé par une collaboration ?"          │ │
│  │        [Nous contacter →]                     │ │
│  └───────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

## 📦 Flux de données

```
src/data/partners.ts
    ├── partnersData: PartnerData
    │   ├── institutions: Partner[]
    │   ├── bureaux: Partner[]
    │   └── private: Partner[]
    │
    ├── getAllPartners() → Partner[]
    ├── getPartnersByCategory(cat) → Partner[]
    └── getPartnersCount() → { total, institutions, bureaux, private }
           │
           ▼
    PartnersView.vue
    ├── activeFilter: Ref<string>
    ├── displayedPartners: Ref<Partner[]>
    ├── hoveredPartner: Ref<string | null>
    │
    └── Methods:
        ├── setFilter(id) → update displayedPartners
        ├── handleMouseMove(e, partner) → show tooltip
        └── handleMouseLeave() → hide tooltip
```

## 🎨 Système de styles

```
CSS Variables utilisées:
├── Colors
│   ├── --obsidian (Dark background)
│   ├── --forest (Primary dark)
│   ├── --canopy (Accent green)
│   └── --mist (Light gray)
│
├── Spacing
│   ├── --space-xs
│   ├── --space-sm
│   ├── --space-md
│   ├── --space-lg
│   ├── --space-xl
│   ├── --space-2xl
│   ├── --space-3xl
│   └── --space-4xl
│
└── Transitions
    └── --ease-out
```

## 🔄 Interactions utilisateur

```
User Actions:
│
├─ Scroll page
│  └─> IntersectionObserver → Fade-in logos progressif
│
├─ Click filtre
│  └─> setFilter(id) → Update displayedPartners → Transition
│
├─ Hover logo
│  ├─> translateY(-8px) + shadow
│  └─> Show tooltip (name + description + link)
│
└─ Click logo
   └─> Open partner website (new tab)
```

## 📱 Breakpoints responsive

```
Desktop (> 1200px)
├── Grid: 5 logos/ligne
├── Filtres: Horizontal inline
└── Tooltip: Above logo

Tablette (768px - 1200px)
├── Grid: 3-4 logos/ligne
└── Filtres: Horizontal compact

Mobile (< 768px)
├── Grid: 2 logos/ligne
├── Filtres: Column layout
├── Stats: Vertical stack
└── Tooltip: Bottom fixed
```

## 🔗 Routes & Navigation

```
Router Configuration:
/
├── / (HomeView)
├── /services (ServicesView)
├── /a-propos (AboutView)
│   └── Section partenaires simplifiée
│       └── [CTA: Voir tous nos partenaires →] 
│                      ↓
├── /partenaires (PartnersView) ← NOUVELLE PAGE
├── /presse (PressView)
└── /contact (ContactView)
```

## 🌐 Internationalisation (i18n)

```
FR: nav.partners → "Partenaires"
EN: nav.partners → "Partners"

Usage dans NavBar.vue:
<RouterLink to="/partenaires">
  {{ t('nav.partners') }}
</RouterLink>
```

## 🎯 État de filtrage

```
Initial State:
activeFilter = 'all'
displayedPartners = getAllPartners() (20 items)

User clicks "Institutions":
activeFilter = 'institutions'
displayedPartners = getPartnersByCategory('institutions') (8 items)
→ CSS transition on grid items
→ Counter badge updated
```

## 📊 Données d'exemple (Partner interface)

```typescript
interface Partner {
  id: 'wwf'
  name: 'WWF France'
  category: 'bureaux'
  logo: '/images/partners/bureaux/wwf.png'
  website: 'https://www.wwf.fr'
  description: 'Partenaire pour la conservation des espèces menacées'
  logoUrl: 'https://www.wwf.fr/sites/default/files/logo_wwf_0.png'
}
```
