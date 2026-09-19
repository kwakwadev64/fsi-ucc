export interface Cours {
  nom: string
  professeur: string
  description: string
}

export interface Semestre {
  semestre: string
  total_cours: number
  cours: Cours[]
}

export interface Promotion {
  nom: string
  semestres: Semestre[]
}
