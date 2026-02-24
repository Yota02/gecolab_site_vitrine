# 📘 Guide : Ajouter un nouveau partenaire

## Étape 1 : Préparer le logo

1. Téléchargez le logo officiel depuis le site du partenaire
2. Redimensionnez-le à environ 200x120px (ratio 16:10)
3. Optimisez le fichier (< 50KB si possible)
4. Enregistrez au format PNG ou WebP avec transparence

## Étape 2 : Placer le logo

Placez le fichier dans le dossier approprié :

```bash
# Pour une institution publique
public/images/partners/institutions/nom-partenaire.png

# Pour un bureau d'études ou association
public/images/partners/bureaux/nom-partenaire.png

# Pour une société privée
public/images/partners/private/nom-partenaire.png
```

## Étape 3 : Ajouter les données

Ouvrez `src/data/partners.ts` et ajoutez l'entrée dans la bonne catégorie :

### Exemple : Ajouter une institution publique

```typescript
export const partnersData: PartnerData = {
  institutions: [
    // ... partenaires existants ...
    {
      id: 'nouvelle-institution',           // ID unique (kebab-case)
      name: 'Nom complet de l\'institution', // Nom officiel
      category: 'institutions',              // Catégorie
      logo: '/images/partners/institutions/nouvelle-institution.png', // Chemin
      website: 'https://www.site-partenaire.fr', // Site web (optionnel)
      description: 'Description courte de la collaboration', // Description
      logoUrl: 'https://www.site-partenaire.fr/logo.png' // URL externe (fallback)
    }
  ],
  // ... autres catégories ...
}
```

### Exemple : Ajouter une association

```typescript
bureaux: [
  // ... partenaires existants ...
  {
    id: 'nouvelle-asso',
    name: 'Nouvelle Association Nature',
    category: 'bureaux',
    logo: '/images/partners/bureaux/nouvelle-asso.png',
    website: 'https://www.nouvelle-asso.org',
    description: 'Partenariat pour la protection de la faune locale',
    logoUrl: 'https://www.nouvelle-asso.org/assets/logo.svg'
  }
]
```

### Exemple : Ajouter une société privée

```typescript
private: [
  // ... partenaires existants ...
  {
    id: 'nouvelle-entreprise',
    name: 'Nouvelle Entreprise SAS',
    category: 'private',
    logo: '/images/partners/private/nouvelle-entreprise.png',
    website: 'https://www.nouvelle-entreprise.com',
    description: 'Collaboration R&D en biotechnologie',
    logoUrl: 'https://www.nouvelle-entreprise.com/logo.png'
  }
]
```

## Étape 4 : Vérifier l'affichage

1. **Mode développement**
```bash
npm run dev
```

2. **Accéder à la page**
   - Ouvrez http://localhost:5173/partenaires
   - Vérifiez que le nouveau partenaire apparaît
   - Testez le filtre de sa catégorie
   - Vérifiez le tooltip au survol

3. **Tester le build**
```bash
npm run build
npm run preview
```

## Champs disponibles

### Obligatoires
- `id` : Identifiant unique (kebab-case, ex: "nouvelle-asso")
- `name` : Nom complet officiel
- `category` : 'institutions' | 'bureaux' | 'private'
- `logo` : Chemin relatif vers le logo local

### Optionnels
- `website` : URL du site web (s'ouvre dans nouvel onglet au clic)
- `description` : Description courte (~80 caractères max)
- `logoUrl` : URL externe du logo (utilisé comme fallback)

## Conseils

### Pour l'ID
```typescript
✅ Bon:  'institut-pasteur'
✅ Bon:  'wwf-france'
✅ Bon:  'parc-national-mercantour'

❌ Éviter: 'InstitutPasteur'
❌ Éviter: 'WWF France'
❌ Éviter: 'parc_national_mercantour'
```

### Pour la description
```typescript
✅ Bon (concis et informatif):
"Partenaire scientifique pour l'identification de pathogènes"
"Collaboration pour le suivi de la faune alpine"
"Bureau d'études environnement et biodiversité"

❌ Trop long:
"Partenaire de très longue date avec qui nous collaborons activement sur de nombreux projets variés dans le domaine de l'environnement et de la biodiversité en France et à l'international"

❌ Trop vague:
"Partenaire"
"Collaboration"
```

### Pour le logo
```
Format préféré: PNG avec transparence
Dimensions: 200x120px à 300x180px
Poids: < 50KB
Fond: Transparent ou blanc
```

## Exemple complet

Ajoutons "Réserve Naturelle des Hautes Fagnes" :

### 1. Logo téléchargé
```
public/images/partners/institutions/hautes-fagnes.png
```

### 2. Données ajoutées
```typescript
{
  id: 'hautes-fagnes',
  name: 'Réserve Naturelle des Hautes Fagnes',
  category: 'institutions',
  logo: '/images/partners/institutions/hautes-fagnes.png',
  website: 'https://www.hautes-fagnes.be',
  description: 'Partenariat pour l\'étude de la biodiversité en milieu tourbeux',
  logoUrl: 'https://www.hautes-fagnes.be/assets/logo.png'
}
```

### 3. Résultat
Le partenaire apparaît maintenant :
- Dans la grille "Tous" (20 → 21 partenaires)
- Dans le filtre "Institutions publiques" (8 → 9)
- Avec tooltip au survol montrant les infos
- Cliquable vers le site web

## Modifier un partenaire existant

Pour modifier les infos d'un partenaire, trouvez son entrée dans `src/data/partners.ts` :

```typescript
// AVANT
{
  id: 'wwf',
  name: 'WWF France',
  description: 'Ancienne description'
}

// APRÈS
{
  id: 'wwf',
  name: 'WWF France',
  description: 'Nouvelle description mise à jour'
}
```

## Supprimer un partenaire

Supprimez simplement l'objet complet de la liste dans `src/data/partners.ts`.

⚠️ **Attention** : Ne supprimez pas le logo du dossier si vous pensez le réutiliser.

## Ordre d'affichage

Les partenaires sont affichés dans l'ordre où ils apparaissent dans le tableau.
Pour réorganiser, changez simplement l'ordre dans `src/data/partners.ts`.

## Questions fréquentes

**Q : Le logo ne s'affiche pas, que faire ?**
- Vérifiez que le chemin est correct
- Vérifiez que le fichier existe bien
- Vérifiez l'extension (png/svg/jpg)
- Le placeholder s'affichera automatiquement si le logo est introuvable

**Q : Puis-je utiliser un logo SVG ?**
- Oui, changez juste l'extension : `.png` → `.svg`

**Q : Comment ajouter plusieurs lignes dans la description ?**
- Utilisez `\n` pour les sauts de ligne (affiché dans le tooltip)

**Q : Le compteur ne se met pas à jour ?**
- C'est automatique ! La fonction `getPartnersCount()` compte dynamiquement

---

**Besoin d'aide ?** Consultez `PARTNERS_PAGE.md` pour la documentation complète.
