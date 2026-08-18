import type { Promotion } from '../types/types'

export const FACULTE = 'Faculté des Sciences Informatiques'
export const FILIERE = 'Sciences Informatiques'

export const PROMOTIONS: Promotion[] = [
  {
    nom: 'Première Licence (L1)',
    semestres: [
      {
        semestre: '1er Semestre',
        total_cours: 6,
        cours: [
          { nom: 'Mathématique', professeur: 'AKATSHI', description: '' },
          {
            nom: 'Informatique Générale',
            professeur: 's. kidiamboko',
            description: '',
          },
          {
            nom: 'Logique et Argumentation',
            professeur: 'B. Kubi',
            description: '',
          },
          { nom: 'Algorithme 1', professeur: 'Tshibaka', description: '' },
          {
            nom: 'Programmation',
            professeur: 's. kidiamboko',
            description: '',
          },
          {
            nom: 'Laboratoire',
            professeur: 'Soeur Odette Sangopamba',
            description: '',
          },
        ],
      },
      {
        semestre: '2e Semestre',
        total_cours: 10,
        cours: [
          {
            nom: 'Expression orale et écrite (EOE)',
            professeur: '',
            description: '',
          },
          { nom: 'Economie politique', professeur: 'Lueteta', description: '' },
          { nom: 'Statistique', professeur: 'A.Phongi', description: '' },
          { nom: 'Philosophie', professeur: 'C.Bwangila', description: '' },
          {
            nom: 'Comptabilité Générale',
            professeur: 'K.Kazadi',
            description: '',
          },
          {
            nom: 'Programmation Orientée Objet',
            professeur: '',
            description: '',
          },
          {
            nom: 'Méthode de recherche en Sciences computationnelles',
            professeur: 'Soeur Odette Sangopamba',
            description: '',
          },
          {
            nom: 'Initiation à la recherche bibliographique et documentaire',
            professeur: 'Katubadi',
            description: '',
          },
          {
            nom: 'Doctrine fondamentale de l’Eglise catholique',
            professeur: 'E. Lievin',
            description: '',
          },
          {
            nom: 'Education à la citoyenneté',
            professeur: 'R.Ongendangenda',
            description: '',
          },
          { nom: 'Anglais', professeur: 'A. Libwa', description: '' },
        ],
      },
    ],
  },
  {
    nom: 'Deuxième Licence (L2)',
    semestres: [
      {
        semestre: '1er Semestre',
        total_cours: 8,
        cours: [
          { nom: 'Algorithme 2', professeur: '', description: '' },
          { nom: 'Anglais', professeur: '', description: '' },
          { nom: 'Mathématique', professeur: '', description: '' },
          {
            nom: 'Méthode d’analyse informatique',
            professeur: '',
            description: '',
          },
          { nom: 'Programmation', professeur: '', description: '' },
          { nom: 'Statistique', professeur: '', description: '' },
          { nom: 'Structure des ordinateurs', professeur: '', description: '' },
          {
            nom: 'Systèmes d’exploitation',
            professeur: '',
            description: '',
          },
        ],
      },
      {
        semestre: '2e Semestre',
        total_cours: 6,
        cours: [
          { nom: 'Base de Données', professeur: '', description: '' },
          {
            nom: 'Comptabilité analytique d’exploitation',
            professeur: '',
            description: '',
          },
          {
            nom: 'Droit et Législation sociale',
            professeur: '',
            description: '',
          },
          {
            nom: 'Informatique juridique et cybercriminalité',
            professeur: '',
            description: '',
          },
          { nom: 'Laboratoire 2', professeur: '', description: '' },
          { nom: 'Multimédia', professeur: '', description: '' },
        ],
      },
    ],
  },
  {
    nom: 'Troisième Licence (L3)',
    semestres: [
      {
        semestre: '1er Semestre',
        total_cours: 7,
        cours: [
          {
            nom: 'Technique de Banque de Données',
            professeur: '',
            description: '',
          },
          {
            nom: "Méthode d'analyse informatique",
            professeur: '',
            description: '',
          },
          {
            nom: 'RO (Théorie de graphe et programmation linéaire)',
            professeur: '',
            description: '',
          },
          { nom: "Etude d'un tableau", professeur: '', description: '' },
          { nom: 'Marketing, TFC', professeur: 'Mampuya', description: '' },
          {
            nom: 'Ethique et déontologie professionnelle',
            professeur: '',
            description: '',
          },
          { nom: 'Lecteur 1', professeur: 'J.Lueteta', description: '' },
        ],
      },
      {
        semestre: '2e Semestre',
        total_cours: 7,
        cours: [
          { nom: 'Eglise et TIC', professeur: 'P.Nzinga', description: '' },
          {
            nom: 'Gestion des ressources humaines',
            professeur: 'G.Iyenda',
            description: '',
          },
          { nom: 'Théorie des organisations', professeur: '', description: '' },
          {
            nom: "Gestion d'un centre de traitement informatique",
            professeur: 'E.Tshibaka',
            description: '',
          },
          {
            nom: 'Séminaire des technologies de pointe',
            professeur: '',
            description: '',
          },
          {
            nom: 'Langage de programmation 3',
            professeur: '',
            description: '',
          },
          { nom: 'Stage', professeur: 'J.Lueteta', description: '' },
        ],
      },
    ],
  },
  {
    nom: 'Master 1 Réseaux (M1 RX)',
    semestres: [
      {
        semestre: '1er Semestre',
        total_cours: 6,
        cours: [
          {
            nom: 'Théorie des probabilités sur les ILG, Info',
            professeur: '',
            description: '',
          },
          { nom: 'Marche Informatique', professeur: '', description: '' },
          { nom: 'Génie Logiciel', professeur: '', description: '' },
          { nom: 'Audit informatique', professeur: '', description: '' },
          { nom: 'Internet des objets', professeur: '', description: '' },
          {
            nom: 'Recherche opérationnelle',
            professeur: '',
            description: '',
          },
          { nom: 'Conduite de projet', professeur: '', description: '' },
        ],
      },
      {
        semestre: '2e Semestre',
        total_cours: 8,
        cours: [
          {
            nom: 'Intelligence artificielle et système expert',
            professeur: '',
            description: '',
          },
          { nom: 'Système serveur', professeur: '', description: '' },
          { nom: 'Atelier Génie Logiciel', professeur: '', description: '' },
          { nom: 'Architecture Réseau', professeur: '', description: '' },
          {
            nom: 'Question spéciales de programmation avancée',
            professeur: '',
            description: '',
          },
          {
            nom: 'Algorithme de distribution',
            professeur: '',
            description: '',
          },
          { nom: 'Programmation parallèle', professeur: '', description: '' },
        ],
      },
    ],
  },
  {
    nom: "Master 1 Conception des Systèmes d'Information (M1 CSI)",
    semestres: [
      {
        semestre: '1er Semestre',
        total_cours: 7,
        cours: [
          { nom: 'Théorie des probabilités', professeur: '', description: '' },
          { nom: 'Marche Informatique', professeur: '', description: '' },
          { nom: 'Génie Logiciel', professeur: '', description: '' },
          { nom: 'Audit informatique', professeur: '', description: '' },
          {
            nom: "Question approfondies d'informatique de gestion",
            professeur: '',
            description: '',
          },
          { nom: 'Analyse des organisations', professeur: '', description: '' },
          {
            nom: 'Conduite de projet',
            professeur: 'J.Lueteta',
            description: '',
          },
        ],
      },
      {
        semestre: '2e Semestre',
        total_cours: 7,
        cours: [
          {
            nom: 'Intelligence artificielle et système expert',
            professeur: 'S.Kidiamboko',
            description: '',
          },
          {
            nom: "Conception des systèmes d'information",
            professeur: 'Mampuya',
            description: '',
          },
          { nom: 'Atelier Génie Logiciel', professeur: '', description: '' },
          {
            nom: 'Questions spéciales de programmation système',
            professeur: '',
            description: '',
          },
          {
            nom: 'Algorithme de distribution',
            professeur: '',
            description: '',
          },
          {
            nom: 'Recherche opérationnelle',
            professeur: '',
            description: '',
          },
          { nom: 'Programmation parallèle', professeur: '', description: '' },
        ],
      },
    ],
  },
  {
    nom: 'Master 2 Réseaux (M2 RX)',
    semestres: [
      {
        semestre: '1er Semestre',
        total_cours: 8,
        cours: [
          { nom: 'Evaluation des projets', professeur: '', description: '' },
          {
            nom: "Administration de réseau d'entreprise",
            professeur: '',
            description: '',
          },
          {
            nom: 'Conception des architectures réseau',
            professeur: '',
            description: '',
          },
          {
            nom: 'SE serveur Etude approfondie de NOS',
            professeur: '',
            description: '',
          },
          { nom: 'Laboratoire (Réseau)', professeur: '', description: '' },
          {
            nom: "Système d'exploitation comparé",
            professeur: '',
            description: '',
          },
          { nom: 'Séminaire informatique', professeur: '', description: '' },
          {
            nom: 'Algorithme de distribution',
            professeur: '',
            description: '',
          },
        ],
      },
      {
        semestre: '2e Semestre',
        total_cours: 7,
        cours: [
          { nom: 'Mémoire', professeur: '', description: '' },
          { nom: 'Stage', professeur: '', description: '' },
          {
            nom: 'Télématique et réseau informatique (Management des RX)',
            professeur: '',
            description: '',
          },
          { nom: 'Système distribué', professeur: '', description: '' },
          {
            nom: 'Processus inter protocole',
            professeur: '',
            description: '',
          },
          { nom: 'LECTEUR 2', professeur: '', description: '' },
          { nom: 'LECTEUR 1', professeur: '', description: '' },
        ],
      },
    ],
  },
  {
    nom: "Master 2 Conception des Systèmes d'Information (M2 CSI)",
    semestres: [
      {
        semestre: '1er Semestre',
        total_cours: 7,
        cours: [
          { nom: 'Séminaire informatique', professeur: '', description: '' },
          { nom: 'Evaluation des projets', professeur: '', description: '' },
          {
            nom: 'Base de données reparties',
            professeur: '',
            description: '',
          },
          {
            nom: 'Atelier Business Intelligence',
            professeur: '',
            description: '',
          },
          {
            nom: 'Questions spéciales de programmation avancée',
            professeur: '',
            description: '',
          },
          {
            nom: "Système d'exploitation comparé",
            professeur: '',
            description: '',
          },
          {
            nom: 'Algorithme de distribution',
            professeur: '',
            description: '',
          },
        ],
      },
      {
        semestre: '2e Semestre',
        total_cours: 8,
        cours: [
          {
            nom: 'Questions approfondies de la gestion des ressources humaines',
            professeur: '',
            description: '',
          },
          { nom: 'Business intelligence', professeur: '', description: '' },
          {
            nom: "Questions spéciales de conception de système d'information",
            professeur: '',
            description: '',
          },
          {
            nom: 'Questions spéciales de programmation avancée',
            professeur: '',
            description: '',
          },
          { nom: 'Mémoire', professeur: '', description: '' },
          { nom: 'Stage', professeur: '', description: '' },
          { nom: 'LECTEUR 1', professeur: '', description: '' },
          { nom: 'LECTEUR 2', professeur: '', description: '' },
        ],
      },
    ],
  },
]
