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
    <div className="mb-7 flex flex-col items-start gap-2">
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
          className="appearance-none border border-slate-300 bg-white py-2.5 pl-4 pr-10 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
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
