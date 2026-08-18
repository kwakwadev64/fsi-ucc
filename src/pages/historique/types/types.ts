export interface Evenement {
  annee: string
  titre: string
  description: string
}

export interface Epoque {
  id: string
  periode: string
  titre: string
  description: string
  evenements: Evenement[]
}

export interface HistoriqueData {
  epoques: Epoque[]
}
