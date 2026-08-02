import type { HistoriqueData } from '@/types/types'

export const historiqueData: HistoriqueData = {
  epoques: [
    {
      id: 'fondation',
      periode: '2019 – 2020',
      titre: 'Fondation de la Faculté',
      description:
        "La Faculté des Sciences Informatiques (FSI) voit le jour au sein de l'UCC, avec sa première équipe dirigeante et ses deux filières fondatrices.",
      evenements: [
        {
          annee: '2019',
          titre: 'Création de la Faculté des Sciences Informatiques',
          description:
            "Ouverture de la FSI durant l'année académique 2019-2020, sous la direction du Prof. Dominique Mwenze — communicologue de la Faculté de Communication Sociale — premier doyen de la faculté.",
        },
        {
          annee: '2019',
          titre: 'Une équipe administrative fondatrice',
          description:
            'La Révérende Sœur Odette Sangu Bamba est nommée secrétaire académique et Madame Fideline secrétaire administrative, aux côtés du Prof. Mwenze.',
        },
        {
          annee: '2019',
          titre: 'Naissance des deux filières',
          description:
            "La filière Conception des Systèmes d'Information est créée en premier. La filière Réseaux voit le jour peu après, à la demande insistante des premiers étudiants.",
        },
        {
          annee: '2019',
          titre: 'Une seule assistante au départ',
          description:
            "La Sœur Fola, étudiante en mathématiques pures à l'UPN, est la première et unique assistante de la faculté durant cette année fondatrice.",
        },
      ],
    },
    {
      id: 'consolidation',
      periode: '2020 – 2022',
      titre: 'Consolidation du corps professoral',
      description:
        'La faculté élargit progressivement son équipe pédagogique et administrative pour accompagner la croissance des promotions.',
      evenements: [
        {
          annee: '2020',
          titre: 'Départ de la première assistante',
          description:
            'La Sœur Fola quitte la faculté pour poursuivre ses études doctorales.',
        },
        {
          annee: '2020-2021',
          titre: 'Renfort du corps professoral',
          description:
            "Aux côtés des professeurs fondateurs Tshibaka et Éphrem, l'équipe s'enrichit avec l'arrivée du Prof. Lueteta, puis du Prof. Kabiya.",
        },
        {
          annee: '2020-2021',
          titre: "Des professeurs invités d'autres facultés",
          description:
            "La FSI fait également appel à des enseignants d'autres facultés de l'UCC : le Prof. Kojo (Droit), le Prof. Yenga (Économie) et le Prof. Nzinga (Communication Sociale).",
        },
        {
          annee: '2021',
          titre: 'Trois nouveaux assistants',
          description:
            "L'équipe d'encadrement s'agrandit avec l'arrivée de l'assistant Ryan, de l'assistant Médard et de l'assistante Prisca.",
        },
      ],
    },
    {
      id: 'nouvelle-direction',
      periode: '2022 – 2023',
      titre: "Nouvelle direction et expansion de l'équipe",
      description:
        "Passation à la tête de la faculté et arrivée massive de nouveaux assistants pour soutenir l'encadrement des étudiants.",
      evenements: [
        {
          annee: '2022',
          titre: 'La Sœur Odette Sangu Bamba devient doyenne',
          description:
            'Suite au départ à la retraite du Prof. Mwenze, la Révérende Sœur Odette Sangu Bamba est nommée doyenne de la faculté. Le Prof. Lueteta lui succède au poste de secrétaire académique.',
        },
        {
          annee: '2022',
          titre: 'Renfort en Master 1 : Ataki et Kasengedia',
          description:
            'Les professeurs Ataki et Kasengedia rejoignent le corps professoral de la faculté.',
        },
        {
          annee: '2022-2023',
          titre: 'Cinq nouveaux assistants',
          description:
            "La faculté engage cinq nouveaux assistants — Merveil, Christian, Guy, Teddy et Dieumerci — renforçant significativement l'encadrement pédagogique des étudiants.",
        },
      ],
    },
  ],
}
