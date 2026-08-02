interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 inline-block relative">
        {title}
        <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
        <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-200"></div>
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-xs sm:text-sm mt-5 max-w-md mx-auto px-2">
          {subtitle}
        </p>
      )}
    </div>
  )
}
