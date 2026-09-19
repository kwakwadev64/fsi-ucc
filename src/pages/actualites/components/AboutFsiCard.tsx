import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutFsiCard() {
  return (
    <div className="bg-[#0B2545] rounded-2xl shadow-sm p-5 text-white">
      <h3 className="text-sm font-bold mb-2">FSI — UCC</h3>
      <p className="text-xs text-white/70 leading-relaxed mb-4">
        Faculté des Sciences Informatiques de l&apos;Université Catholique du
        Congo. Retrouvez toutes les actualités de la faculté, ses formations
        et sa vie académique.
      </p>
      <Link
        to="/#actualite"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F2A93B] hover:text-white transition"
      >
        Voir toutes les actualités
        <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
      </Link>
    </div>
  )
}
