import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'
import { useActualiteDetail } from './hooks/useActualiteDetail'
import { useReadingProgress } from './hooks/useReadingProgress'
import { shareOrCopyLink } from './utils/socialShare'
import ReadingProgressBar from './components/ReadingProgressBar'
import NewsDetailLoadingState from './components/NewsDetailLoadingState'
import NewsDetailErrorState from './components/NewsDetailErrorState'
import NewsDetailHero from './components/NewsDetailHero'
import NewsDetailArticle from './components/NewsDetailArticle'
import ShareButtons from './components/ShareButtons'
import AboutFsiCard from './components/AboutFsiCard'

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { actualite, loading, error } = useActualiteDetail(id)
  const progress = useReadingProgress()
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    if (!actualite) return
    const result = await shareOrCopyLink(actualite.titre, window.location.href)
    if (result === 'copied') {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (loading) return <NewsDetailLoadingState />
  if (error || !actualite) {
    return (
      <NewsDetailErrorState
        message={error ?? 'Impossible de charger l\u2019actualité.'}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#F6F8FB] font-sans text-slate-900 overflow-x-hidden">
      <ReadingProgressBar progress={progress} />
      <Navbar />

      <NewsDetailHero actualite={actualite} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <NewsDetailArticle
            description={actualite.description}
            copied={copied}
            onShare={handleShare}
          />

          <aside className="space-y-5">
            <ShareButtons
              title={actualite.titre}
              url={window.location.href}
              onCopyLink={handleShare}
            />
            <AboutFsiCard />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
