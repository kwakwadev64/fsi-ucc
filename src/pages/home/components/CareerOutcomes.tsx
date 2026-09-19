import { Briefcase, TrendingUp, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface CareerPath {
  title: string
  description: string
  icon?: LucideIcon
}

interface CareerOutcomesProps {
  intro?: string
  paths?: CareerPath[]
}

const defaultIcons: LucideIcon[] = [Briefcase, TrendingUp, Building2]

/**
 * Section "Débouchés" — répond à la question n°1 des futurs étudiants et parents :
 * "après le diplôme, je fais quoi ?"
 * Passe `paths` avec les débouchés réels enseignés/observés — tant que ce n'est pas
 * fait, le composant ne rend rien (pas de données factices affichées).
 */
export default function CareerOutcomes({
  intro = 'Nos filières préparent à des métiers concrets et recherchés sur le marché du numérique.',
  paths = [],
}: CareerOutcomesProps) {
  if (!paths || paths.length === 0) return null

  return (
    <section className="bg-slate-50 py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Débouchés professionnels
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, i) => {
            const Icon = path.icon ?? defaultIcons[i % defaultIcons.length]
            return (
              <div
                key={path.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={22} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {path.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {path.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
