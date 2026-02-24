#!/bin/bash

# Script pour télécharger les logos des partenaires
# Usage: ./download-logos.sh

echo "🔍 Script de téléchargement des logos partenaires"
echo "================================================="
echo ""
echo "Ce script va tenter de télécharger les logos depuis les URLs configurées"
echo "dans src/data/partners.ts"
echo ""

PARTNERS_DIR="public/images/partners"

# Fonction pour télécharger un logo
download_logo() {
    local url=$1
    local output=$2
    local name=$3
    
    echo "📥 Téléchargement: $name"
    
    if curl -s -L -o "$output" "$url" --max-time 10; then
        echo "   ✅ Succès: $output"
    else
        echo "   ❌ Échec: $url"
    fi
}

# Exemples de téléchargements (à décommenter et personnaliser)
echo "ℹ️  Pour l'instant, les logos doivent être téléchargés manuellement"
echo ""
echo "Structure des dossiers créée:"
echo "- $PARTNERS_DIR/institutions/"
echo "- $PARTNERS_DIR/bureaux/"
echo "- $PARTNERS_DIR/private/"
echo ""
echo "📝 Instructions:"
echo "1. Visitez les sites web des partenaires"
echo "2. Téléchargez leurs logos officiels"
echo "3. Optimisez-les (format PNG ou WebP, taille ~200x120px)"
echo "4. Placez-les dans le dossier correspondant"
echo ""
echo "Exemples de noms de fichiers:"
echo "- $PARTNERS_DIR/institutions/cirad.png"
echo "- $PARTNERS_DIR/bureaux/wwf.png"
echo "- $PARTNERS_DIR/private/edf.png"
echo ""
echo "💡 Astuce: Utilisez les URLs logoUrl dans src/data/partners.ts"
echo "   comme point de départ pour trouver les logos."

# Décommentez ci-dessous pour télécharger automatiquement (exemple)
# download_logo "https://www.cirad.fr/extension/cirad/design/cirad/images/logo.png" \
#               "$PARTNERS_DIR/institutions/cirad.png" \
#               "CIRAD"

echo ""
echo "✨ Terminé!"
