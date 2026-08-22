import { motion } from 'framer-motion'
import {
  BookOpen,
  FileText,
  User,
  Calendar,
  type LucideIcon,
} from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/motionVariants'
import type { HomeData } from '../types/types'

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-18 lg:-mt-14 mb-1">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-[1.4rem] p-5 sm:p-6
                      bg-white/55 backdrop-blur-2xl backdrop-saturate-150
                      border border-white/60
                      shadow-[0_8px_32px_rgba(15,23,42,0.12)]
                      flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {/* Reflet supérieur — courbure du verre */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/70 to-transparent" />

            {/* Liseré interne, biseau de verre */}
            <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] ring-1 ring-inset ring-white/40" />

            {/* Halo au hover */}
            <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-300/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icône — pastille verre plus dense */}
            <div
              className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl shrink-0
                            bg-white/70 backdrop-blur-sm
                            border border-white/80
                            shadow-inner shadow-white/50
                            flex items-center justify-center
                            group-hover:bg-white/90 transition-colors duration-300"
            >
              <stat.icon className="text-blue-600" size={22} strokeWidth={2} />
            </div>

            <div className="relative">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {stat.count}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
