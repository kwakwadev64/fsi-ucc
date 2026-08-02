import { motion, AnimatePresence } from 'framer-motion'
import { containerVariants } from '@/lib/motionVariants'
import MembreCard from './MembreCard'
import type { Membre } from '@/types/types'

interface MembresGridProps {
  membres: Membre[]
  animationKey: string
}

export default function MembresGrid({
  membres,
  animationKey,
}: MembresGridProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={animationKey}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {membres.map((membre, index) => (
          <MembreCard key={index} membre={membre} />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
