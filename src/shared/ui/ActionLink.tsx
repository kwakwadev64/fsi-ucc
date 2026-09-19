import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ActionLinkProps {
  label: string
  to: string
  icon?: LucideIcon
  external?: boolean
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function ActionLink({
  label,
  to,
  icon: Icon,
  external = false,
  variant = 'primary',
  className = '',
}: ActionLinkProps) {
  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5'

  const primaryClass =
    'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500'
  const secondaryClass =
    'border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10'

  const classes = `${baseClass} ${variant === 'primary' ? primaryClass : secondaryClass} ${
    variant === 'primary' ? 'px-3 py-3.5' : 'px-6 py-3.5'
  } ${className}`

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={classes}>
        {Icon ? <Icon size={18} /> : null}
        <span>{label}</span>
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {Icon ? <Icon size={18} /> : null}
      <span>{label}</span>
    </Link>
  )
}
