import { motion } from 'framer-motion'
import { filieresData } from '../data/filiere'
import { containerVariants, itemVariants } from '@/shared/lib/motionVariants'

export default function FilieresSection() {
  return (
    <section className="border-y border-slate-100 bg-slate-100 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Nos filières d’excellence</h2>
        <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-700">Deux spécialisations majeures adaptées aux exigences technologiques pour propulser votre carrière.</p>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-9 grid gap-4 md:grid-cols-2">
          {filieresData.map(filiere => (
            <motion.article key={filiere.id} variants={itemVariants} className="overflow-hidden rounded-md border border-slate-300 bg-slate-200">
              <img src={filiere.image} alt={filiere.title} className="h-52 w-full bg-white object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold leading-tight text-slate-950">{filiere.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-700">{filiere.shortDesc}</p>
                <ul className="mt-4 space-y-1.5 text-[11px] leading-relaxed text-slate-800">
                  {filiere.details.map(detail => <li key={detail}>• {detail}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
