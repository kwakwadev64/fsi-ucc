import { motion } from 'framer-motion'
import {
  BookOpen,
  FileText,
  User,
  Calendar,
  type LucideIcon,
} from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/motionVariants'
import type { HomeData } from '@/types/types'

interface StatsSectionProps {
  data: HomeData
}

interface Stat {
  count: number
  label: string
  icon: LucideIcon
}

export default function StatsSection({ data }: StatsSectionProps) {
  const stats: Stat[] = [
    { count: data.cours_count, label: 'Cours Disponibles', icon: BookOpen },
    {
      count: data.actualites.length,
      label: 'Actualités à la une',
      icon: FileText,
    },
    { count: data.photos_count, label: 'Photos de Famille', icon: User },
    { count: data.bats_count, label: 'Horaires Examens', icon: Calendar },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 lg:-mt-24 mb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-wrap items-center gap-4 sm:gap-5 transition-all duration-300"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <stat.icon className="text-blue-600" size={24} />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900">
                {stat.count}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
