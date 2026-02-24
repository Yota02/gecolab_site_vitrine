export type PartnerCategory = 'institutions' | 'bureaux' | 'private'

export interface Partner {
  id: string
  name: string
  category: PartnerCategory
  logo: string
  website?: string
  description?: string
  logoUrl?: string
}

export interface PartnerData {
  institutions: Partner[]
  bureaux: Partner[]
  private: Partner[]
}
