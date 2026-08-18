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
    <div className="min-h-screen flex items-center justify-center bg-[#F6F8FB] p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8 text-center border border-slate-100">
        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
          !
        </div>
        <h2 className="text-lg font-bold text-slate-900 mb-2">Oups !</h2>
        <p className="text-slate-600 text-sm mb-6">{message}</p>
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
