import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Tag,
  Share2,
  Link2,
  GraduationCap,
} from 'lucide-react'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

interface ActualiteDetail {
  id: number
  titre: string
  location: string
  description: string
  image_url: string
  rating: number
  filter_type: string
  is_published: boolean
  created_at: string
}

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [actualite, setActualite] = useState<ActualiteDetail | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const fetchActualite = async () => {
      setLoading(true)
      setError(null)

      try {
        const token = localStorage.getItem('auth_token')

        const response = await axios.get(
          `https://frnagrmi.fsiucc.com/api/actualites/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        )

        setActualite(response.data.data)
      } catch (err: any) {
        console.error('Erreur lors du chargement :', err)
        if (err.response?.status === 401) {
          setError('Vous devez être connecté pour consulter cette actualité.')
        } else if (err.response?.status === 404) {
          setError('Cette actualité n’existe pas ou a été retirée.')
        } else {
          setError('Impossible de charger l’actualité.')
        }
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchActualite()
    }
  }, [id])

  // Barre de progression de lecture
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: actualite?.titre, url: window.location.href })
      return
    }
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // --- État chargement ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F8FB]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#0B2545]/15 border-t-[#0B2545] rounded-full animate-spin" />
          <p className="text-slate-500 font-medium text-sm">
            Chargement de l&apos;actualité...
          </p>
        </div>
      </div>
    )
  }

  // --- État erreur ---
  if (error || !actualite) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F8FB] p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8 text-center border border-slate-100">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
            !
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Oups !</h2>
          <p className="text-slate-600 text-sm mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0B2545] text-white text-sm font-semibold rounded-lg hover:bg-[#0B2545]/90 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Retour à l&apos;accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F6F8FB] font-sans text-slate-900 overflow-x-hidden">
      {/* Barre de progression de lecture */}
      <div className="fixed top-0 inset-x-0 h-1 z-40 bg-transparent">
        <div
          className="h-full bg-[#F2A93B] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Navbar />

      {/* HERO : image de couverture avec dégradé et titre en superposition */}
      <div className="relative w-full h-85 sm:h-110 lg:h-130 overflow-hidden bg-linear-to-br from-[#0B2545] to-[#123A6B]">
        {actualite.image_url && (
          <img
            src={actualite.image_url}
            alt={actualite.titre}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-[#0B2545] via-[#0B2545]/60 to-[#0B2545]/10" />

        <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 sm:pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6 font-medium transition w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2A93B] text-[#0B2545] text-xs font-bold rounded-full uppercase tracking-wide">
              <Tag className="w-3.5 h-3.5" />
              {actualite.filter_type}
            </span>
            {actualite.location && (
              <span className="inline-flex items-center gap-1.5 text-xs text-white/80 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                {actualite.location}
              </span>
            )}
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            {actualite.titre}
          </h1>

          <span className="inline-flex items-center gap-1.5 text-xs text-white/70 mt-4">
            <Calendar className="w-3.5 h-3.5" />
            {actualite.created_at}
          </span>
        </div>
      </div>

      {/* CONTENU : article + sidebar */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Article */}
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-10">
              <p className="text-slate-700 leading-relaxed whitespace-pre-line text-base sm:text-lg">
                {actualite.description}
              </p>
            </div>

            <div className="px-6 sm:px-10 py-5 border-t border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
                <GraduationCap className="w-4 h-4 text-[#0B2545]" />
                Faculté des Sciences Informatiques — UCC
              </span>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0B2545] bg-white border border-slate-200 rounded-lg hover:bg-[#0B2545] hover:text-white hover:border-[#0B2545] transition shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copied ? 'Lien copié !' : 'Partager'}
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Partage rapide */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-4">
                Partager cette actualité
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-[#0B2545] hover:text-white transition"
                  aria-label="Partager sur Facebook"
                >
                  <FiFacebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(actualite.titre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-[#0B2545] hover:text-white transition"
                  aria-label="Partager sur X"
                >
                  <FiTwitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-[#0B2545] hover:text-white transition"
                  aria-label="Partager sur LinkedIn"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={handleShare}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-[#F2A93B] hover:text-[#0B2545] transition"
                  aria-label="Copier le lien"
                >
                  <Link2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* À propos */}
            <div className="bg-[#0B2545] rounded-2xl shadow-sm p-5 text-white">
              <h3 className="text-sm font-bold mb-2">FSI — UCC</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Faculté des Sciences Informatiques de l&apos;Université
                Catholique du Congo. Retrouvez toutes les actualités de la
                faculté, ses formations et sa vie académique.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F2A93B] hover:text-white transition"
              >
                Voir toutes les actualités
                <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
