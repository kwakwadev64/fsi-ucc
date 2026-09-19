import type { ReactNode } from 'react'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  className?: string
}

export default function EmptyState({
  icon,
  title,
  description,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-4 py-20 text-center ${className}`}
    >
      {icon ? (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
          {icon}
        </div>
      ) : null}

      <p className="text-base font-medium text-slate-500">{title}</p>
      {description ? (
        <p className="mt-1 text-sm text-slate-400">{description}</p>
      ) : null}
    </div>
  )
}
