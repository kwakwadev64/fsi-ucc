import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { accesRapide } from '../data/accesRapide'
import { containerVariants, itemVariants } from '@/shared/lib/motionVariants'

export default function QuickAccessSection() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Accès rapides pour les étudiants</h2>
          <p className="mt-3 text-xs leading-relaxed text-slate-600">Supports de cours, annales, horaires et délégués : tout ce dont vous avez besoin pour réussir, en un clic.</p>
        </div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {accesRapide.map(card => {
            const Icon = card.icon
            return (
              <motion.div key={card.title} variants={itemVariants}>
                <Link to={card.link === '/archive' || card.link === '/Calendar' ? '/etude' : card.link} className="group block h-full rounded-md border border-slate-300 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded bg-blue-50 text-blue-500"><Icon size={17} /></span>
                  <h3 className="mt-5 text-base font-bold text-slate-950">{card.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{card.desc}</p>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
