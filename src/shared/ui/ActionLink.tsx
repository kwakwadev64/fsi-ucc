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
    'inline-flex items-center justify-center gap-2 border font-semibold transition-colors duration-200'

  const primaryClass =
    'border-[#0D3B66] bg-[#0D3B66] text-white hover:bg-[#0a2d4a]'
  const secondaryClass =
    'border-white/40 bg-white/10 text-white hover:bg-white/20'

  const classes = `${baseClass} ${variant === 'primary' ? primaryClass : secondaryClass} ${
    variant === 'primary' ? 'px-4 py-3' : 'px-5 py-3'
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
