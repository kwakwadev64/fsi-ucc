import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface NewsDetailErrorStateProps {
  message: string
}

export default function NewsDetailErrorState({
  message,
}: NewsDetailErrorStateProps) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md border border-slate-200 bg-white p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-red-100 bg-red-50 text-xl font-bold text-red-600">
          !
        </div>
        <h2 className="text-lg font-bold text-slate-900 mb-2">Oups !</h2>
        <p className="text-slate-600 text-sm mb-6">{message}</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 border border-blue-800 bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l&apos;accueil
        </button>
      </div>
    </div>
  )
}
