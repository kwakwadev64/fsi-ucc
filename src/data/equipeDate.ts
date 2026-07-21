import { type EquipeData } from '@/types/types'

export const equipeData: EquipeData = {
  sections: [
    {
      id: 'faculte',
      titre: 'Équipe Facultaire',
      description:
        'L’ensemble des forces vives de notre faculté : membres du gouvernement étudiant, chefs de promotion et équipe de développement.',
      membres: [], // Peuplé dynamiquement dans le composant
    },
    {
      id: 'gouvernement',
      titre: 'Gouvernement FSI 2025-2026',
      description:
        'Les représentants et ministres de la délégation facultaire de la Faculté des Sciences Informatiques pour l’année académique 2025-2026.',
      membres: [
        {
          nom: 'Andy BIMI',
          role: 'Délégué Facultaire',
          description:
            'Représentant principal des étudiants de la Faculté des Sciences Informatiques (FSI).',
          photo: '/images/equipe/andy_bimi.jpg',
        },
        {
          nom: 'Ange NKEMBI',
          role: 'Directeur de Cabinet',
          description:
            'Direction et coordination du cabinet de la délégation facultaire.',
          photo: '/ange-nkembi.jpeg',
        },
        {
          nom: 'Sephora KABUYA',
          role: 'Ministre de la Communication & Porte-parole',
          description:
            'Chargée de la communication officielle et porte-parole de la délégation.',
          photo: '',
        },
        {
          nom: 'Grady NLANDU',
          role: 'Ministre des Audiovisuels',
          description:
            'Chargé de la production et de la gestion audiovisuelle de la faculté.',
          photo: '/grady.jpeg',
        },
        {
          nom: 'Déogratias DISANOA',
          role: 'Ministre des Affaires Scientifiques',
          description:
            'Chargé de la promotion et de l’organisation des activités scientifiques facultaires.',
          photo: '',
        },
        {
          nom: 'Nathan MONGA',
          role: 'Vice-Ministre des Affaires Scientifiques',
          description: 'Assistant au ministère des Affaires Scientifiques.',
          photo: '/nathan.jpg',
        },
        {
          nom: 'Dave BESONGO',
          role: 'Ministre des Sports',
          description:
            'Chargé de l’organisation et de la promotion des activités sportives.',
          photo: '',
        },
        {
          nom: 'Kevin MANGUNZA',
          role: 'Vice-Ministre des Sports',
          description: 'Assistant au ministère des Sports.',
          photo: '',
        },
        {
          nom: 'Jenovic ILAMBU',
          role: 'Ministre des Affaires Externes & Marketing',
          description:
            'Chargé des relations extérieures, des partenariats et du marketing facultaire.',
          photo: '/jenovic.jpeg',
        },
        {
          nom: 'Jordy MOSEI',
          role: 'Ministre de l’Économie & Finances',
          description:
            'Chargé de la gestion financière et économique de la délégation.',
          photo: '/jordy.jpeg',
        },
        {
          nom: 'Emmanuella MODJU',
          role: 'Vice-Ministre de l’Économie & Finances',
          description: 'Assistante au ministère de l’Économie et des Finances.',
          photo: '/emanuella.jpeg',
        },
      ],
    },
    {
      id: 'cp_cpa',
      titre: 'Chefs de Promotion (CP & CPA)',
      description:
        'Les représentants des étudiants (CP et CPA) à travers les différents niveaux de Licence et Master de la FSI.',
      membres: [
        /* --- L1 FSI --- */
        {
          nom: 'TABUKU TSHIAMA Soraya',
          role: 'CP - L1 FSI',
          description:
            'Chef de promotion - Première année de Licence en Sciences Informatiques.',
          photo: '/soraya.jpeg',
        },
        {
          nom: 'Robin Kimuanga Kizoka',
          role: 'CPA - L1 FSI',
          description:
            'Chef de promotion adjoint - Première année de Licence en Sciences Informatiques.',
          photo: '',
        },
        /* --- L2 FSI --- */
        {
          nom: 'OKITO OMBA Christella',
          role: 'CP - L2 FSI',
          description:
            'Chef de promotion - Deuxième année de Licence en Sciences Informatiques.',
          photo: '',
        },
        {
          nom: 'KAPAY KUSAKA Dan',
          role: 'CPA - L2 FSI',
          description:
            'Chef de promotion adjoint - Deuxième année de Licence en Sciences Informatiques.',
          photo: '',
        },
        /* --- L3 FSI --- */
        {
          nom: 'OKITO OMUMU JÉRÉMIE',
          role: 'CP - L3 FSI',
          description:
            'Chef de promotion - Troisième année de Licence en Sciences Informatiques.',
          photo: '',
        },
        {
          nom: 'BIMPE NTANGA Estelle',
          role: 'CPA - L3 FSI',
          description:
            'Chef de promotion adjointe - Troisième année de Licence en Sciences Informatiques.',
          photo: '',
        },
        {
          nom: 'RACHIDI AMISI Prisca',
          role: 'CPA - L3 FSI',
          description:
            'Chef de promotion adjointe - Troisième année de Licence en Sciences Informatiques.',
          photo: '/cpaL3.jpeg',
        },
        /* --- M1 CSI --- */
        {
          nom: 'KANANGILA MUTEBA Benally',
          role: 'CP - M1 CSI',
          description:
            'Chef de promotion - Master 1 Conception des Systèmes d’Information.',
          photo: '/cpM1.jpeg',
        },
        {
          nom: 'IMBWELE MATONDO Carmela',
          role: 'CPA - M1 CSI',
          description:
            'Chef de promotion adjointe - Master 1 Conception des Systèmes d’Information.',
          photo: '',
        },
        /* --- M1 RX --- */
        {
          nom: 'KAFUMBA BUKASA Jonathan',
          role: 'CP - M1 RX',
          description:
            'Chef de promotion - Master 1 Réseaux & Télécommunications.',
          photo: '',
        },
        {
          nom: 'KALENGA KAPENA Jordi',
          role: 'CPA - M1 RX',
          description:
            'Chef de promotion adjoint - Master 1 Réseaux & Télécommunications.',
          photo: '',
        },
        /* --- M2 CSI --- */
        {
          nom: 'MOSEI MBONGO Jordy',
          role: 'CP - M2 CSI',
          description:
            'Chef de promotion - Master 2 Conception des Systèmes d’Information.',
          photo: '',
        },
        {
          nom: 'RAMAZANI Gabriel',
          role: 'CPA - M2 CSI',
          description:
            'Chef de promotion adjoint - Master 2 Conception des Systèmes d’Information.',
          photo: '',
        },
        /* --- M2 RX --- */
        {
          nom: 'KABASELE TUAMBILANGANA François-Xavier',
          role: 'CP - M2 RX',
          description:
            'Chef de promotion - Master 2 Réseaux & Télécommunications.',
          photo: '/cpM2.jpeg',
        },
        {
          nom: 'MUTOMBO BALENGEJAYI Léonard',
          role: 'CPA - M2 RX',
          description:
            'Chef de promotion adjoint - Master 2 Réseaux & Télécommunications.',
          photo: '/cpam2RX.jpeg',
        },
      ],
    },
    {
      id: 'developpeurs',
      titre: 'Équipe Développeur',
      description:
        'La cellule technique en charge de la conception, de l’architecture et du développement de la plateforme.',
      membres: [
        {
          nom: "VAN'SIEM FONO GRACIA",
          role: 'Développeur Frontend & Mobile',
          description:
            'Membre de l’équipe technique en charge du développement web et mobile de la plateforme facultaire.',
          photo: '/vansiem.jpeg',
          github: 'https://github.com/VANSIEM190',
          linkedin: 'https://www.linkedin.com/in/gracia-van-siem-575865347',
          portfolio: 'https://vansiem-portfolio.vercel.app/',
        },
        {
          nom: 'KWAKWA MICHEE',
          role: 'Développeur Frontend & Mobile',
          description:
            'Membre de l’équipe de développement participant à la mise en place de la plateforme Web et Mobile.',
          photo: '/kwakwa.jpg',
          github: 'https://github.com/kwakwadev64',
          linkedin: 'lien',
          portfolio: 'http://micadev.365chrono.org',
        },
        {
          nom: 'KAPS FRANK',
          role: 'Développeur Backend laravel',
          description:
            'Membre de la cellule technique impliquée dans le développement des fonctionnalités Backend.',
          photo: '',
          github: 'https://github.com/Kaps-stack',
          linkedin: 'lien',
          portfolio: 'lien',
        },
        {
          nom: 'NATHAN MONGA',
          role: 'Développeur Frontend Web(React)',
          description:
            'Membre de l’équipe technique et vice-ministre des Affaires Scientifiques.',
          photo: '/nathan.jpg',
          github: 'http://github.com/nathmn14',
          linkedin: 'https://www.linkedin.com/in/nathan-monga-ngoy',
          portfolio: 'https://nathanmonga.com/',
        },
      ],
    },
  ],
}
