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
    <div className={`${alignClass} mb-12`}>
      <h2 className="relative inline-block text-2xl font-semibold text-slate-950 sm:text-3xl">
        {title}
        <span className="absolute -bottom-2 left-0 h-[3px] w-12 bg-cyan-500" />
      </h2>
      {subtitle && (
        <p className={`${align === 'center' ? 'mx-auto' : ''} mt-5 max-w-2xl text-sm leading-7 text-slate-600`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
