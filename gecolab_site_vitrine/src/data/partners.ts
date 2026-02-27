import type { Partner } from '@/types/partners'

const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const allPartners: Partner[] = [
  {
    id: 'ministere-env',
    name: 'Ministère de l\'Environnement',
    logo: getImagePath('images/partners/institutions/ministere-environnement.png'),
    website: 'https://www.ecologie.gouv.fr',
    description: 'Partenaire institutionnel majeur pour les politiques de biodiversité'
  },
  {
    id: 'cirad',
    name: 'CIRAD',
    logo: getImagePath('images/partners/institutions/cirad.png'),
    website: 'https://www.cirad.fr',
    description: 'Collaboration scientifique en recherche agronomique et développement'
  },
  {
    id: 'ofb',
    name: 'Office Français de la Biodiversité',
    logo: getImagePath('images/partners/institutions/ofb.png'),
    website: 'https://www.ofb.gouv.fr',
    description: 'Partenariat opérationnel pour la protection de la biodiversité'
  },
  {
    id: 'mnhn',
    name: 'Muséum National d\'Histoire Naturelle Paris',
    logo: getImagePath('images/partners/institutions/mnhn.png'),
    website: 'https://www.mnhn.fr',
    description: 'Collaboration scientifique en taxonomie et identification d\'espèces'
  },
  {
    id: 'gov-andorre',
    name: 'Gouvernement d\'Andorre',
    logo: getImagePath('images/partners/institutions/andorre.svg'),
    website: 'https://www.govern.ad',
    description: 'Partenaire pour les études environnementales pyrénéennes'
  },
  {
    id: 'pnm',
    name: 'Parc National du Mercantour',
    logo: getImagePath('images/partners/institutions/mercantour.png'),
    website: 'https://www.mercantour-parcnational.fr',
    description: 'Collaboration pour le suivi de la faune alpine'
  },
  {
    id: 'pne',
    name: 'Parc National des Écrins',
    logo: getImagePath('images/partners/institutions/ecrins.png'),
    website: 'https://www.ecrins-parcnational.fr',
    description: 'Partenaire pour les inventaires faunistiques de montagne'
  },
  {
    id: 'eid',
    name: 'EID Méditerranée',
    logo: getImagePath('images/partners/institutions/eid.png'),
    website: 'https://www.eid-med.org',
    description: 'Collaboration pour la surveillance entomologique'
  },
  {
    id: 'agrinichoir',
    name: 'Société agrinichoir',
    logo: getImagePath('images/partners/institutions/agrinichoirs.png'),
    website: 'https://www.agrinichoir.com',
    description: 'Partenaire pour les études environnementales'
  },
  {
    id: 'spw',
    name: 'Services publiques de Wallonie',
    logo: getImagePath('images/partners/institutions/wallonie_service_public.png'),
    website: 'https://www.wallonie.be',
    description: 'Partenaire institutionnel wallon'
  },
  {
    id: 'mine-env-lux',
    name: 'Ministère luxembourgeois de l\'environnement',
    logo: getImagePath('images/partners/institutions/Ministere_luxembourgeois_de_lenvironnement.png'),
    website: 'https://www.emwelt.lu',
    description: 'Partenaire institutionnel luxembourgeois'
  },
  {
    id: 'sfepm',
    name: 'Société française d\'Etude et de protection des mammifères',
    logo: getImagePath('images/partners/institutions/Societe_francaise_d_Etude_et_de_protection_des_mammiferes.png'),
    website: 'https://www.sfepm.org',
    description: 'Partenaire pour l\'étude et la protection des mammifères'
  },
  {
    id: 'onf',
    name: 'Office National français des Forêts (ONF)',
    logo: getImagePath('images/partners/institutions/ONF.png'),
    website: 'https://www.onf.fr',
    description: 'Partenaire pour la gestion forestière et la biodiversité'
  },
  {
    id: 'onfi',
    name: 'Office National français des forêts International (ONFI)',
    logo: getImagePath('images/partners/institutions/ONFI.png'),
    website: 'https://www.onf-international.org',
    description: 'Partenaire pour les projets forestiers internationaux'
  },
  {
    id: 'biotope',
    name: 'Biotope',
    logo: getImagePath('images/partners/bureaux/biotope.png'),
    website: 'https://www.biotope.fr',
    description: 'Partenaire technique pour les études d\'impact écologique'
  },
  {
    id: 'aquascop',
    name: 'Aquascop',
    logo: getImagePath('images/partners/bureaux/aquascop.jpg'),
    website: 'https://www.aquascop.fr',
    description: 'Collaboration pour l\'expertise en milieux aquatiques'
  },
  {
    id: 'ecosphere',
    name: 'Écosphère',
    logo: getImagePath('images/partners/bureaux/ecosphere.png'),
    website: 'https://www.ecosphere.fr',
    description: 'Bureau d\'études environnement et biodiversité'
  },
  {
    id: 'wwf',
    name: 'WWF France',
    logo: getImagePath('images/partners/bureaux/wwf.png'),
    website: 'https://www.wwf.fr',
    description: 'Partenaire pour la conservation des espèces menacées'
  },
  {
    id: 'cen',
    name: 'Conservatoire des Espaces Naturels',
    logo: getImagePath('images/partners/institutions/cen.jpg'),
    website: 'https://www.cen-france.fr',
    description: 'Collaboration pour la préservation des habitats naturels'
  },
  {
    id: 'lpo',
    name: 'Ligue pour la Protection des Oiseaux',
    logo: getImagePath('images/partners/bureaux/lpo.png'),
    website: 'https://www.lpo.fr',
    description: 'Partenaire pour l\'étude et la protection de l\'avifaune'
  },
  {
    id: 'natagora',
    name: 'Natagora',
    logo: getImagePath('images/partners/bureaux/natagora.png'),
    website: 'https://www.natagora.be',
    description: 'Association belge pour la protection de la nature'
  },
  {
    id: 'grege',
    name: 'GREGE - Groupe de Recherche et d\'Étude pour la Gestion de l\'Environnement',
    logo: getImagePath('images/partners/bureaux/grege.png'),
    website: 'https://www.grege.fr',
    description: 'Expertise scientifique en écologie et gestion environnementale'
  },
  {
    id: 'lutreola',
    name: 'Life Vison',
    logo: getImagePath('images/partners/bureaux/lutreola.png'),
    website: 'https://lifevison.fr/',
    description: 'Association spécialisée dans la conservation du vison d\'Europe'
  },
  {
    id: 'aralep',
    name: 'Bureau d\'études ARALEP',
    logo: getImagePath('images/partners/bureaux/aralep.png'),
    website: 'https://www.aralep.fr',
    description: 'Bureau d\'études environnementales'
  },
  {
    id: 'aselia',
    name: 'Bureau d\'étude ASELIA',
    logo: getImagePath('images/partners/bureaux/ASELIA.jpg'),
    website: 'https://www.aselia.fr',
    description: 'Bureau d\'études spécialisé en écologie'
  },
  {
    id: 'ciae',
    name: 'Bureau d\'études CIAE',
    logo: getImagePath('images/partners/bureaux/CIAE.png'),
    website: 'https://www.ciae.fr',
    description: 'Bureau d\'études en ingénierie environnementale'
  },
  {
    id: 'eccel',
    name: 'Bureau d\'études ECCEL',
    logo: getImagePath('images/partners/bureaux/ECCEL.jpeg'),
    website: 'https://www.eccel.fr',
    description: 'Bureau d\'études écologiques et environnementales'
  },
  {
    id: 'ecogea',
    name: 'Bureau d\'étude ECOGEA',
    logo: getImagePath('images/partners/bureaux/ECOGEA.jpg'),
    website: 'https://www.ecogea.fr',
    description: 'Bureau d\'études en écologie et environnement'
  },
  {
    id: 'ecolor',
    name: 'Bureau d\'étude ECOLOR',
    logo: getImagePath('images/partners/bureaux/ECOLOR.jpg'),
    website: 'https://www.ecolor.fr',
    description: 'Bureau d\'études spécialisé en couleur et environnement'
  },
  {
    id: 'ecoter',
    name: 'Bureau d\'étude ECOTER',
    logo: getImagePath('images/partners/bureaux/ECOTER.png'),
    website: 'https://www.ecoter.fr',
    description: 'Bureau d\'études en écologie territoriale'
  },
  {
    id: 'hydreco',
    name: 'Bureau d\'étude HYDRECO',
    logo: getImagePath('images/partners/bureaux/HYDRECO.jpeg'),
    website: 'https://www.hydreco.fr',
    description: 'Bureau d\'études en hydrologie et environnement'
  },
  {
    id: 'ixsane',
    name: 'Bureau d\'étude IXSANE',
    logo: getImagePath('images/partners/bureaux/IXSANE.png'),
    website: 'https://www.ixsane.fr',
    description: 'Bureau d\'études en ingénierie environnementale'
  },
  {
    id: 'karum',
    name: 'Bureau d\'études KARUM',
    logo: getImagePath('images/partners/bureaux/KARUM.png'),
    website: 'https://www.karum.fr',
    description: 'Bureau d\'études en écologie et biodiversité'
  },
  {
    id: 'mifenec',
    name: 'Bureau d\'études MIFENEC',
    logo: getImagePath('images/partners/bureaux/MIFENEC.jpg'),
    website: 'https://www.mifenec.fr',
    description: 'Bureau d\'études en ingénierie environnementale'
  },
  {
    id: 'bretagne-vivante',
    name: 'Association Bretagne Vivante',
    logo: getImagePath('images/partners/bureaux/Association_Bretagne_Vivante.jpeg'),
    website: 'https://www.bretagne-vivante.org',
    description: 'Association pour la protection de la nature en Bretagne'
  },
  {
    id: 'streams-rivers',
    name: 'Bureau d\'études Streams and Rivers',
    logo: getImagePath('images/partners/bureaux/streams_and_rivers.jpg'),
    website: 'https://www.streamsandrivers.fr',
    description: 'Bureau d\'études spécialisé en hydrologie et cours d\'eau'
  },
  {
    id: 'tereo',
    name: 'Bureau d\'études Tereo',
    logo: getImagePath('images/partners/bureaux/Tereo.webp'),
    website: 'https://www.tereo.fr',
    description: 'Bureau d\'études en environnement et écologie'
  },
  {
    id: 'edf',
    name: 'EDF',
    logo: getImagePath('images/partners/private/edf.png'),
    website: 'https://www.edf.fr',
    description: 'Partenaire industriel pour les études d\'impact environnemental'
  },
  {
    id: 'pasteur',
    name: 'Institut Pasteur',
    logo: getImagePath('images/partners/private/pasteur.jpg'),
    website: 'https://www.pasteur.fr',
    description: 'Collaboration scientifique pour l\'identification de pathogènes'
  },
  {
    id: 'verdi',
    name: 'Société VERDI',
    logo: getImagePath('images/partners/private/Société_VERDI.jpg'),
    website: 'https://www.verdi.fr',
    description: 'Partenaire pour les études environnementales'
  },
  {
    id: 'sage',
    name: 'Bureau d\'étude SAGE',
    logo: getImagePath('images/partners/private/SAGE.png'),
    website: 'https://www.sage.fr',
    description: 'Bureau d\'études spécialisé en environnement'
  },
  {
    id: 'falck',
    name: 'Société FALCK France',
    logo: getImagePath('images/partners/private/Falck.png'),
    website: 'https://www.falck.com',
    description: 'Partenaire pour les services de sécurité et environnement'
  },
  {
    id: 'aspas',
    name: 'Association ASPAS',
    logo: getImagePath('images/partners/private/ASPAS.jpg'),
    website: 'https://www.aspas-nature.org',
    description: 'Association pour la protection de la faune sauvage'
  },
  {
    id: 'nature-occitanie',
    name: 'Association Nature en occitanie',
    logo: getImagePath('images/partners/private/Logo-Nature-en-Occitanie.png'),
    website: 'https://www.natureoccitanie.org',
    description: 'Association pour la protection de la nature en Occitanie'
  },
  {
    id: 'aude-claire',
    name: 'Association Aude Claire',
    logo: getImagePath('images/partners/private/Association aude claire.jpeg'),
    website: 'https://www.aude-claire.org',
    description: 'Association pour la protection de l\'environnement dans l\'Aude'
  }
]

export const getAllPartners = (): Partner[] => {
  return allPartners
}

export const getPartnersCount = () => {
  return {
    total: allPartners.length
  }
}
