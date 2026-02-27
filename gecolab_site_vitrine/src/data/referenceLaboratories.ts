export interface ReferenceLaboratory {
  id: string
  organization: string
  project: string
  species: string
  region: string
  since: number
}

export const referenceLaboratories: ReferenceLaboratory[] = [
  {
    id: 'loup-wallonie',
    organization: 'Ministère de l\'Environnement wallon',
    project: 'Suivi génétique du loup',
    species: 'Loup',
    region: 'Wallonie',
    since: 2019
  },
  {
    id: 'chat-forestier-luxembourg',
    organization: 'Ministère de l\'Environnement luxembourgeois',
    project: 'Suivi génétique des populations de chats forestiers',
    species: 'Chat forestier',
    region: 'Luxembourg',
    since: 2012
  },
  {
    id: 'castor-wallonie',
    organization: 'Ministère de l\'Environnement wallon',
    project: 'Suivi génétique du castor',
    species: 'Castor',
    region: 'Wallonie',
    since: 2010
  },
  {
    id: 'castor-france',
    organization: 'Office Français de la Biodiversité',
    project: 'Suivi génétique du castor',
    species: 'Castor',
    region: 'France',
    since: 2020
  },
  {
    id: 'loutre-france',
    organization: 'Plan National d\'Action français pour la conservation de la loutre',
    project: 'Suivi génétique de la loutre',
    species: 'Loutre',
    region: 'France',
    since: 2010
  },
  {
    id: 'vison-france',
    organization: 'Plan National d\'Action français pour la conservation du vison d\'Europe',
    project: 'Suivi génétique du vison d\'Europe',
    species: 'Vison d\'Europe',
    region: 'France',
    since: 2010
  },
  {
    id: 'desman-france',
    organization: 'Plan National d\'Action français pour la conservation du desman des Pyrénées',
    project: 'Suivi génétique du desman des Pyrénées',
    species: 'Desman des Pyrénées',
    region: 'France',
    since: 2011
  }
]

export const getReferenceLaboratories = (): ReferenceLaboratory[] => {
  return referenceLaboratories
}

export const getReferenceLaboratoriesCount = (): number => {
  return referenceLaboratories.length
}
