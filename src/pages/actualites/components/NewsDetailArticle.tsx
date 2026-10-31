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
    <article className="lg:col-span-2 overflow-hidden border border-slate-200 bg-white">
      <div className="p-6 sm:p-10">
        <p className="text-slate-700 leading-relaxed whitespace-pre-line text-base sm:text-lg">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-5 sm:px-10">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
          <GraduationCap className="w-4 h-4 text-blue-800" />
          Faculté des Sciences Informatiques — UCC
        </span>

        <button
          onClick={onShare}
          className="inline-flex items-center gap-2 border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-blue-800 transition hover:border-blue-800 hover:bg-blue-800 hover:text-white"
        >
          <Share2 className="w-3.5 h-3.5" />
          {copied ? 'Lien copié !' : 'Partager'}
        </button>
      </div>
    </article>
  )
}
