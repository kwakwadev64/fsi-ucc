import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { ArrowLeft, Calendar, MapPin, Star, Tag, Share2 } from 'lucide-react'

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

  useEffect(() => {
  const fetchActualite = async () => {
    setLoading(true)
    setError(null)

    try {
      // 1. Récupération du token
      const token = localStorage.getItem('auth_token')

      // 2. Requête Axios avec le Header Authorization
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium text-sm">Chargement de l'actualité...</p>
        </div>
      </div>
    )
  }

  if (error || !actualite) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-100">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
            !
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Oups !</h2>
          <p className="text-gray-600 text-sm mb-6">{error}</p>
          <button
            onClick={() => navigate('/actualites')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Retour aux actualités
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
      <div className="max-w-4xl mx-auto">
        {/* Bouton Retour */}
        <Link
          to="/actualites"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 mb-6 font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux actualités
        </Link>

        {/* Article principal */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Header & Badges */}
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {/* Type / Categorie */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                <Tag className="w-3.5 h-3.5" />
                {actualite.filter_type}
              </span>

              {/* Lieu / Location */}
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                {actualite.location}
              </span>

              {/* Note / Rating */}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-md">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                {actualite.rating}
              </span>

              {/* Date */}
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 ml-auto">
                <Calendar className="w-3.5 h-3.5" />
                {actualite.created_at}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              {actualite.titre}
            </h1>
          </div>

          {/* Image de couverture */}
          {actualite.image_url && (
            <div className="w-full h-72 sm:h-96 overflow-hidden bg-gray-100">
              <img
                src={actualite.image_url}
                alt={actualite.titre}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Description / Contenu */}
          <div className="p-6 sm:p-8 text-gray-700 leading-relaxed whitespace-pre-line text-base">
            {actualite.description}
          </div>

          {/* Footer Article */}
          <div className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              UCC Hub — Modifié récemment
            </span>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: actualite.titre,
                    url: window.location.href,
                  })
                } else {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Lien copié dans le presse-papier !')
                }
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
            >
              <Share2 className="w-3.5 h-3.5" />
              Partager
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}