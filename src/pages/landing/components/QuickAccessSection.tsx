import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/motionVariants'
import { accesRapide } from '@/data/data'
import SectionTitle from './SectionTitle'
import { useNavigate } from 'react-router-dom'

export default function QuickAccessSection() {
  const navigate = useNavigate()
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
      <SectionTitle title="Accès rapides" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {accesRapide.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="bg-white px-6 py-8 sm:py-10 rounded-3xl shadow-xs border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            onClick={() => navigate(card.link)}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
              <card.icon size={28} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
