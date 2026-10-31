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
    <section className="border-b border-slate-200 bg-white px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 border-l border-t border-slate-200 sm:grid-cols-4"
        >
          {stats.map(stat => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex min-h-24 flex-col justify-center border-b border-r border-slate-200 px-4 py-4 sm:min-h-28 sm:px-6"
            >
              <p className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-medium leading-relaxed text-slate-600 sm:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
