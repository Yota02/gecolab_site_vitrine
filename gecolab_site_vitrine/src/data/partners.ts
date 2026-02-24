import type { Partner, PartnerData } from '@/types/partners'

// Helper pour obtenir les chemins d'images avec la base URL
const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const partnersData: PartnerData = {
  institutions: [
    {
      id: 'ministere-env',
      name: 'Ministère de l\'Environnement',
      category: 'institutions',
      logo: getImagePath('images/partners/institutions/ministere-environnement.png'),
      website: 'https://www.ecologie.gouv.fr',
      description: 'Partenaire institutionnel majeur pour les politiques de biodiversité',
      logoUrl: 'https://www.ecologie.gouv.fr/sites/all/themes/custom/mtes/logo.png'
    },
    {
      id: 'cirad',
      name: 'CIRAD',
      category: 'institutions',
      logo: getImagePath('images/partners/institutions/cirad.png'),
      website: 'https://www.cirad.fr',
      description: 'Collaboration scientifique en recherche agronomique et développement',
      logoUrl: 'https://www.cirad.fr/extension/cirad/design/cirad/images/logo.png'
    },
    {
      id: 'ofb',
      name: 'Office Français de la Biodiversité',
      category: 'institutions',
      logo: getImagePath('images/partners/institutions/ofb.png'),
      website: 'https://www.ofb.gouv.fr',
      description: 'Partenariat opérationnel pour la protection de la biodiversité',
      logoUrl: 'https://www.ofb.gouv.fr/sites/all/themes/custom/ofb/logo.svg'
    },
    {
      id: 'mnhn',
      name: 'Muséum National d\'Histoire Naturelle Paris',
      category: 'institutions',
      logo: getImagePath('images/partners/institutions/mnhn.png'),
      website: 'https://www.mnhn.fr',
      description: 'Collaboration scientifique en taxonomie et identification d\'espèces',
      logoUrl: 'https://www.mnhn.fr/sites/default/files/logo_mnhn_0.png'
    },
    {
      id: 'gov-andorre',
      name: 'Gouvernement d\'Andorre',
      category: 'institutions',
      logo: getImagePath('images/partners/institutions/andorre.svg'),
      website: 'https://www.govern.ad',
      description: 'Partenaire pour les études environnementales pyrénéennes',
      logoUrl: 'https://www.govern.ad/img/logo-govern.svg'
    },
    {
      id: 'pnm',
      name: 'Parc National du Mercantour',
      category: 'institutions',
      logo: getImagePath('images/partners/institutions/mercantour.png'),
      website: 'https://www.mercantour-parcnational.fr',
      description: 'Collaboration pour le suivi de la faune alpine',
      logoUrl: 'https://www.mercantour-parcnational.fr/sites/mercantour-parcnational/files/logo/logo_pnm.png'
    },
    {
      id: 'pne',
      name: 'Parc National des Écrins',
      category: 'institutions',
      logo: getImagePath('images/partners/institutions/ecrins.png'),
      website: 'https://www.ecrins-parcnational.fr',
      description: 'Partenaire pour les inventaires faunistiques de montagne',
      logoUrl: 'https://www.ecrins-parcnational.fr/sites/ecrins-parcnational/files/logo/logo-pne.svg'
    },
    {
      id: 'eid',
      name: 'EID Méditerranée',
      category: 'institutions',
      logo: getImagePath('images/partners/institutions/eid.png'),
      website: 'https://www.eid-med.org',
      description: 'Collaboration pour la surveillance entomologique',
      logoUrl: 'https://www.eid-med.org/wp-content/themes/eid2016/images/logo.png'
    }
  ],
  bureaux: [
    {
      id: 'biotope',
      name: 'Biotope',
      category: 'bureaux',
      logo: getImagePath('images/partners/bureaux/biotope.png'),
      website: 'https://www.biotope.fr',
      description: 'Partenaire technique pour les études d\'impact écologique',
      logoUrl: 'https://www.biotope.fr/wp-content/themes/biotope2019/img/logo.svg'
    },
    {
      id: 'aquascop',
      name: 'Aquascop',
      category: 'bureaux',
      logo: getImagePath('images/partners/bureaux/aquascop.jpg'),
      website: 'https://www.aquascop.fr',
      description: 'Collaboration pour l\'expertise en milieux aquatiques',
      logoUrl: 'https://www.aquascop.fr/images/logo-aquascop.png'
    },
    {
      id: 'ecosphere',
      name: 'Écosphère',
      category: 'bureaux',
      logo: getImagePath('images/partners/bureaux/ecosphere.png'),
      website: 'https://www.ecosphere.fr',
      description: 'Bureau d\'études environnement et biodiversité',
      logoUrl: 'https://www.ecosphere.fr/wp-content/themes/ecosphere/images/logo.png'
    },
    {
      id: 'wwf',
      name: 'WWF France',
      category: 'bureaux',
      logo: getImagePath('images/partners/bureaux/wwf.png'),
      website: 'https://www.wwf.fr',
      description: 'Partenaire pour la conservation des espèces menacées',
      logoUrl: 'https://www.wwf.fr/sites/default/files/logo_wwf_0.png'
    },
    {
      id: 'cen',
      name: 'Conservatoire des Espaces Naturels',
      category: 'bureaux',
      logo: getImagePath('images/partners/institutions/cen.jpg'),
      website: 'https://www.cen-france.fr',
      description: 'Collaboration pour la préservation des habitats naturels',
      logoUrl: 'https://www.cen-france.fr/sites/default/files/logo_cen.png'
    },
    {
      id: 'lpo',
      name: 'Ligue pour la Protection des Oiseaux',
      category: 'bureaux',
      logo: getImagePath('images/partners/bureaux/lpo.png'),
      website: 'https://www.lpo.fr',
      description: 'Partenaire pour l\'étude et la protection de l\'avifaune',
      logoUrl: 'https://www.lpo.fr/extension/lpo/design/lpo/images/logo.png'
    },
    {
      id: 'natagora',
      name: 'Natagora',
      category: 'bureaux',
      logo: getImagePath('images/partners/bureaux/natagora.png'),
      website: 'https://www.natagora.be',
      description: 'Association belge pour la protection de la nature',
      logoUrl: 'https://www.natagora.be/fileadmin/Natagora/Images/logo.png'
    },
    {
      id: 'grege',
      name: 'GREGE - Groupe de Recherche et d\'Étude pour la Gestion de l\'Environnement',
      category: 'bureaux',
      logo: getImagePath('images/partners/bureaux/grege.png'),
      website: 'https://www.grege.fr',
      description: 'Expertise scientifique en écologie et gestion environnementale',
      logoUrl: 'https://www.grege.fr/images/logo-grege.png'
    },
    {
      id: 'lutreola',
      name: 'Lutreola',
      category: 'bureaux',
      logo: getImagePath('images/partners/bureaux/lutreola.png'),
      website: 'https://www.lutreola.fr',
      description: 'Association spécialisée dans la conservation du vison d\'Europe',
      logoUrl: 'https://www.lutreola.fr/wp-content/uploads/logo.png'
    }
  ],
  private: [
    {
      id: 'edf',
      name: 'EDF',
      category: 'private',
      logo: getImagePath('images/partners/private/edf.png'),
      website: 'https://www.edf.fr',
      description: 'Partenaire industriel pour les études d\'impact environnemental',
      logoUrl: 'https://www.edf.fr/sites/all/themes/edf/logo.svg'
    },
    {
      id: 'pasteur',
      name: 'Institut Pasteur',
      category: 'private',
      logo: getImagePath('images/partners/private/pasteur.jpg'),
      website: 'https://www.pasteur.fr',
      description: 'Collaboration scientifique pour l\'identification de pathogènes',
      logoUrl: 'https://www.pasteur.fr/sites/default/files/logo_0.svg'
    }
  ]
}

export const getAllPartners = (): Partner[] => {
  return [
    ...partnersData.institutions,
    ...partnersData.bureaux,
    ...partnersData.private
  ]
}

export const getPartnersByCategory = (category: string): Partner[] => {
  if (category === 'all') return getAllPartners()
  return partnersData[category as keyof PartnerData] || []
}

export const getPartnersCount = () => {
  return {
    total: getAllPartners().length,
    institutions: partnersData.institutions.length,
    bureaux: partnersData.bureaux.length,
    private: partnersData.private.length
  }
}
