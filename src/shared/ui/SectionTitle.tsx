interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <div className={`${alignClass} mb-16`}>
      <h2 className="relative inline-block text-2xl font-bold text-slate-900 sm:text-3xl">
        {title}
        <span className="absolute -bottom-3 left-0 h-1 w-1/3 rounded-full bg-blue-600" />
        <span className="absolute -bottom-3 left-1/3 h-px w-2/3 bg-slate-200" />
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-md px-2 text-xs text-slate-500 sm:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  )
}
