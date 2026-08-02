import { ChevronDown } from 'lucide-react'

interface AnneeSelectorProps {
  anneesDisponibles: string[]
  selectedAnnee: string
  onChange: (annee: string) => void
}

export default function AnneeSelector({
  anneesDisponibles,
  selectedAnnee,
  onChange,
}: AnneeSelectorProps) {
  return (
    <div className="flex flex-col items-center gap-2 mb-8">
      <label
        htmlFor="annee-select"
        className="text-sm font-semibold text-slate-500"
      >
        Année académique
      </label>
      <div className="relative">
        <select
          id="annee-select"
          value={selectedAnnee}
          onChange={e => onChange(e.target.value)}
          className="appearance-none pl-5 pr-10 py-2.5 rounded-full text-sm font-semibold bg-white border border-slate-200 shadow-sm text-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/30 hover:border-blue-300 transition-colors"
        >
          {anneesDisponibles.map(annee => (
            <option key={annee} value={annee}>
              {annee}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-blue-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  )
}
