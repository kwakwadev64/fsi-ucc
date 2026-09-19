import { GraduationCap, Share2 } from 'lucide-react'

interface NewsDetailArticleProps {
  description: string
  copied: boolean
  onShare: () => void
}

export default function NewsDetailArticle({
  description,
  copied,
  onShare,
}: NewsDetailArticleProps) {
  return (
    <article className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 sm:p-10">
        <p className="text-slate-700 leading-relaxed whitespace-pre-line text-base sm:text-lg">
          {description}
        </p>
      </div>

      <div className="px-6 sm:px-10 py-5 border-t border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
          <GraduationCap className="w-4 h-4 text-[#0B2545]" />
          Faculté des Sciences Informatiques — UCC
        </span>

        <button
          onClick={onShare}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0B2545] bg-white border border-slate-200 rounded-lg hover:bg-[#0B2545] hover:text-white hover:border-[#0B2545] transition shadow-sm"
        >
          <Share2 className="w-3.5 h-3.5" />
          {copied ? 'Lien copié !' : 'Partager'}
        </button>
      </div>
    </article>
  )
}
