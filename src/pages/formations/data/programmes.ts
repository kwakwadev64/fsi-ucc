import type { LucideIcon } from "lucide-react";
import { Brain, Code2, Cpu, ShieldCheck } from "lucide-react";

export type ProgramStatus = "ongoing" | "upcoming";

export interface TrainingProgram {
  id: string;
  title: string;
  icon: LucideIcon;
  image: string;
  status: ProgramStatus;
  announcement: string;
  topics: string[];
}

export const programmesData: TrainingProgram[] = [
  {
    id: "cybersecurite",
    title: "Cybersécurité",
    icon: ShieldCheck,
    image: "/images/formations/cybersecurite.jpg",
    status: "upcoming",
    announcement:
      "Apprenez à anticiper les menaces, sécuriser les systèmes et protéger les données.",
    topics: [
      "Sécurité des réseaux",
      "Détection des menaces",
      "Protection des données",
    ],
  },
  {
    id: "intelligence-artificielle",
    title: "Intelligence artificielle",
    icon: Brain,
    image: "/images/formations/intelligence-artificielle.jpg",
    status: "ongoing",
    announcement:
      "Découvrez comment les systèmes analysent des données, apprennent et assistent la décision.",
    topics: ["Apprentissage automatique", "Analyse de données", "IA appliquée"],
  },
  {
    id: "programmation-web",
    title: "Programmation web",
    icon: Code2,
    image: "/images/formations/programmation-web.jpg",
    status: "upcoming",
    announcement:
      "Concevez des interfaces et développez les services qui les font fonctionner.",
    topics: [
      "Développement front-end",
      "Services back-end",
      "Bases de données",
    ],
  },
  {
    id: "iot",
    title: "Internet des objets (IoT)",
    icon: Cpu,
    image: "/images/formations/iot.jpg",
    status: "upcoming",
    announcement:
      "Reliez capteurs, objets et logiciels pour créer des systèmes connectés.",
    topics: ["Capteurs connectés", "Réseaux IoT", "Systèmes embarqués"],
  },
];

export function getProgramStatusLabel(status: ProgramStatus) {
  return status === "ongoing" ? "En cours" : "Bientôt disponible";
}
