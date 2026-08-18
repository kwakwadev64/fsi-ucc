import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { containerVariants } from '@/lib/motionVariants'
import DelegueHistoriqueCard from './DelegueHistoriqueCard'
import DelegueHistoriqueModal from './DelegueHistoriqueModal'
import type { DelegueHistorique } from '@/pages/delegue/data/equipeDate'

export default function DelegueHistoriqueGrid({
  delegues,
}: {
  delegues: DelegueHistorique[]
}) {
  const [selectedDelegue, setSelectedDelegue] =
    useState<DelegueHistorique | null>(null)

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key="historique-delegues"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {delegues.map(delegue => (
            <DelegueHistoriqueCard
              key={`${delegue.annee}-${delegue.nom}`}
              delegue={delegue}
              onLireLaSuite={setSelectedDelegue}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <DelegueHistoriqueModal
        delegue={selectedDelegue}
        onClose={() => setSelectedDelegue(null)}
      />
    </>
  )
}
