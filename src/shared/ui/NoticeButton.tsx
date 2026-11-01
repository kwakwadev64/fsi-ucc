import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleAlert, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type NoticeVariant = 'primary' | 'outline' | 'light'

interface NoticeButtonProps {
  buttonLabel: string
  buttonAriaLabel?: string
  dialogTitle: string
  message: string
  variant?: NoticeVariant
  className?: string
  icon?: LucideIcon
}

const buttonStyles: Record<NoticeVariant, string> = {
  primary: 'border-[#17477D] bg-[#17477D] text-white hover:bg-[#102D4D]',
  outline: 'border-[#17477D] bg-white text-[#17477D] hover:bg-blue-50',
  light: 'border-white/70 bg-white/10 text-white hover:bg-white/15',
}

export default function NoticeButton({
  buttonLabel,
  buttonAriaLabel,
  dialogTitle,
  message,
  variant = 'primary',
  className = '',
  icon: Icon,
}: NoticeButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  function closeDialog() {
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={buttonAriaLabel ?? buttonLabel}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className={`inline-flex min-h-11 items-center justify-center gap-2 border px-4 py-2 text-center text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${buttonStyles[variant]} ${className}`}
      >
        {Icon && <Icon size={15} aria-hidden="true" />}
        {buttonLabel}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={event => {
              if (event.target === event.currentTarget) closeDialog()
            }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 p-4"
          >
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              className="relative max-h-[90dvh] w-full max-w-md overflow-y-auto border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={closeDialog}
                aria-label="Fermer le message"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-slate-300 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className="flex h-12 w-12 items-center justify-center bg-cyan-50 text-[#0F6E91]">
                <CircleAlert size={23} aria-hidden="true" />
              </div>
              <h2 id={titleId} className="mt-5 pr-8 text-2xl font-bold leading-tight text-slate-950">
                {dialogTitle}
              </h2>
              <p id={descriptionId} className="mt-3 text-sm leading-6 text-slate-600">
                {message}
              </p>

              <button
                type="button"
                onClick={closeDialog}
                className="mt-6 inline-flex min-h-11 items-center justify-center border border-[#17477D] bg-[#17477D] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#102D4D]"
              >
                Compris
              </button>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
