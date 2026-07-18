import { type HistoriqueData } from '@/types/types'

export const historiqueData: HistoriqueData = {
  epoques: [
    {
      id: 'fondation',
      periode: '2000-2005',
      titre: 'Fondation & Débuts',
      description:
        'Mise en place des piliers académiques de la faculté au sein de l’université.',
      evenements: [
        {
          annee: '2000',
          titre: 'Création de la faculté',
          description:
            "Fondation officielle au sein de l'Université Catholique du Congo (UCC).",
        },
        {
          annee: '2005',
          titre: 'Première promotion',
          description:
            'Diplômation historique de la toute première promotion d’ingénieurs.',
        },
      ],
    },
    {
      id: 'expansion',
      periode: '2010-2020',
      titre: 'Expansion & Innovation',
      description:
        'Modernisation technologique et alignement sur les défis informatiques mondiaux.',
      evenements: [
        {
          annee: '2010',
          titre: 'Laboratoires',
          description:
            'Inauguration des laboratoires spécialisés en réseaux informatiques et développement logiciel.',
        },
        {
          annee: '2015',
          titre: 'Master en IA',
          description:
            'Lancement du programme de Master spécialisé en Intelligence Artificielle.',
        },
        {
          annee: '2020',
          titre: 'Hybridation',
          description:
            'Transition réussie vers l’enseignement hybride et le déploiement de plateformes numériques.',
        },
      ],
    },
  ],
}
