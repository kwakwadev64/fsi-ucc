import { type EquipeData } from '@/types/types'

export const equipeData: EquipeData = {
  sections: [
    {
      id: 'faculte',
      titre: 'Équipe Facultaire',
      description:
        'L’ensemble des forces vives de notre faculté : lauréats des cycles LMD, ingénieurs et cellule technique de développement.',
      membres: [], // Sera peuplé automatiquement dynamiquement dans le composant pour éviter la duplication !
    },
    {
      id: 'developpeurs',
      titre: 'Équipe Développeur',
      description:
        'La cellule technique et innovante à l’origine de l’architecture globale et de l’intégration de cette plateforme.',
      membres: [
        {
          nom: "VAN'SIEM FONO GRACIA",
          role: 'Développeur FullStack & Mobile (L2 FSI)',
          description:
            "Expert de l'écosystème React & React Native, je transforme des idées complexes en solutions fluides. Mon approche combine la rigueur de l'ingénierie logicielle (TypeScript, Prisma) avec l'élégance du design moderne.",
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          portfolio: 'https://vansiem-portfolio.vercel.app',
          sujetMemoire: 'En cours ....',
          avatarUrl:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
        },
        {
          nom: 'KWAKWA MICHEE',
          role: 'Développeur FullStack & Mobile (Diplômé Licence)',
          description:
            'Passionné par l’ergonomie et le design d’interface. Concepteur de la charte graphique de la plateforme et garant de l’expérience responsive.',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          portfolio: 'https://monportfolio-exauce.dev',
          sujetMemoire:
            'Conception et implémentation d’un système automatisé de suivi des évaluations académiques.',
          avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        },
        {
          nom: 'NATHAN MONGA',
          role: 'Développeur Backend Python(FastApi) & Sécurité (Diplômé Licence)',
          description:
            'Expert dans la modélisation et la sécurisation des API. Il s’est assuré de la conformité des flux de données et des pipelines de déploiement.',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          portfolio: 'https://monportfolio-exauce.dev',
          sujetMemoire:
            'Conception et implémentation d’un système automatisé de suivi des évaluations académiques.',
          avatarUrl:
            'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&w=400&q=80',
        },
        {
          nom: 'KAPS',
          role: 'Développeuse Backend & Mobile (flutter + Laravel) (Diplômé Licence)',
          description:
            'Étudiante talentueuse en deuxième année de Licence. Elle a contribué activement au développement des modules interactifs et à l’optimisation des composants UI.',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          portfolio: 'https://monportfolio-exauce.dev',
          avatarUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
          sujetMemoire:
            'Conception et implémentation d’un système automatisé de suivi des évaluations académiques.',
        },
      ],
    },
    {
      id: 'licence',
      titre: 'Diplômés Licence',
      description:
        'Nos lauréats ayant brillamment soutenu leur mémoire de Licence au sein du cursus informatique de l’UCC.',
      membres: [
        {
          nom: 'Jonathan Mpiana',
          role: 'Licence 3 (Ancien Système)',
          description:
            'Spécialisé dans les infrastructures réseau et la connectivité moderne. Ses travaux apportent des solutions concrètes pour l’interconnexion des campus.',
          sujetMemoire:
            'Optimisation des infrastructures réseau par la technologie SD-WAN au sein de l’UCC.',
          avatarUrl:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        },
        {
          nom: 'Sarah Kasinga',
          role: 'Licence 3 (Ancien Système)',
          description:
            'Chercheuse orientée accessibilité numérique. Ses travaux résolvent le défi de l’accès aux cours dans les zones à connectivité limitée.',
          sujetMemoire:
            'Analyse et modélisation d’une plateforme d’e-learning résiliente aux faibles bandes passantes.',
          avatarUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
        },
        {
          nom: 'Patrick Mwamba',
          role: 'Licence 3 (Ancien Système)',
          description:
            'Ingénieur DevOps en devenir. Passionné par l’automatisation, la conteneurisation et le monitoring continu des architectures logicielles.',
          sujetMemoire:
            'Implémentation d’un pipeline CI/CD sécurisé pour le déploiement d’applications de santé.',
          avatarUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      id: 'master',
      titre: 'Diplômés Master',
      description:
        'Nos chercheurs d’élite et experts hautement qualifiés issus des seconds cycles de la FSI.',
      membres: [
        {
          nom: 'Arsène Kabongo',
          role: 'Master 2 - Sciences Informatiques',
          description:
            'Passionné par l’Intelligence Artificielle et la vision par ordinateur appliquée au développement durable et à l’agritech en Afrique.',
          sujetMemoire:
            'Application du Deep Learning pour la détection précoce des pathologies agricoles en RDC.',
          avatarUrl:
            'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
        },
        {
          nom: 'Divine Ngalula',
          role: 'Master 2 - Sciences Informatiques',
          description:
            'Spécialiste en cybersécurité avancée. Elle conçoit des modèles défensifs pour protéger les données critiques contre les menaces modernes.',
          sujetMemoire:
            'Sécurisation des architectures cloud gouvernementales face aux attaques par déni de service.',
          avatarUrl:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        },
        {
          nom: 'Gédéon Tshibangu',
          role: 'Master 2 - Sciences Informatiques',
          description:
            'Expert en traitement de données massives et algorithmes prédictifs dédiés à l’optimisation des flux urbains intelligents.',
          sujetMemoire:
            'Algorithmes de routage prédictif appliqués à la gestion du trafic urbain de Kinshasa.',
          avatarUrl:
            'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
        },
        {
          nom: 'Naomi Azama',
          role: 'Master 2 - Gestion des Systèmes d’Information',
          description:
            'Consultante en transformation numérique, spécialisée dans le management des risques technologiques et la gouvernance d’entreprise.',
          sujetMemoire:
            'Gouvernance des données et alignement stratégique des SI dans le secteur bancaire.',
          avatarUrl:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
  ],
}
