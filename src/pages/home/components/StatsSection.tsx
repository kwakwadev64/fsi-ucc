import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/shared/lib/motionVariants'

const stats = [
  { value: '2', label: "Filières d'excellence" },
  { value: '5', label: 'Niveaux de formation (L1 — M2)' },
  { value: '42', label: 'Membres de la communauté' },
  { value: '2019', label: 'Année de fondation' },
]

export default function StatsSection() {
  return (
    <section className="px-6 py-14 sm:py-18">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          La FSI en un coup d’œil
        </h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map(stat => (
            <motion.article key={stat.label} variants={itemVariants} className="rounded-md border border-slate-300 bg-slate-50 px-4 py-5">
              <p className="text-2xl font-bold tracking-tight text-slate-950">{stat.value}</p>
              <p className="mt-3 text-[11px] font-semibold leading-tight text-slate-700">{stat.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
