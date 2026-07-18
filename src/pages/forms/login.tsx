import React, { useState } from 'react'
import LogoFsiUcc from '@/assets/logo_fsi_tranparent.png'
import GooglePlayIcon from '@/assets/logo-playsotre.png'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Simulation de la connexion (temporaire avant liaison Back-end)
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Récupérer les paramètres d'URL actuels (par ex: ?redirect=/galerie&downloadUrl=...)
    const queryParams = new URLSearchParams(window.location.search)
    const redirectPath = queryParams.get('redirect')
    const downloadUrl = queryParams.get('downloadUrl')

    if (redirectPath && downloadUrl) {
      // Si une photo attendait d'être téléchargée, on redirige avec les paramètres
      window.location.href = `${redirectPath}?downloadUrl=${encodeURIComponent(downloadUrl)}`
    } else {
      // Sinon, redirection classique vers l'accueil ou la galerie par défaut
      window.location.href = '/'
    }
  }

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center p-4 md:p-10 font-['Poppins']">
      {/* Conteneur principal (Split-screen inspiré de l'image) */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-187.5">
        {/* GAUCHE : FORMULAIRE DE CONNEXION */}
        <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8 lg:mb-0">
            {/* Icône de logo moderne en SVG */}
            <img src={LogoFsiUcc} alt="logo-fsi-ucc" className="w-16 h-16" />
            <span className="font-extrabold text-xl tracking-tight text-gray-950">
              <span className="text-[#0D3B66]">Science Informatique</span>
            </span>
          </div>

          {/* Formulaire */}
          <div className="max-w-md w-full mx-auto my-auto py-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
              Authentification
            </h1>
            <p className="text-gray-500 text-sm mb-8">
              Saisissez votre adresse e-mail et votre mot de passe pour vous
              authentifier.
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="exemple@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] text-sm text-gray-900 placeholder-gray-400 transition"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] text-sm text-gray-900 placeholder-gray-400 transition"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  {/* Toggle voir mot de passe */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Options secondaires */}
              <div className="flex items-center justify-between text-xs font-semibold py-1">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-900 select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded text-[#0D3B66] focus:ring-[#0D3B66]"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                  />
                  <span>Remember Me</span>
                </label>
                <a href="#" className="text-[#0D3B66] hover:underline">
                  Forgot Your Password?
                </a>
              </div>

              {/* Bouton de soumission */}
              <button
                type="submit"
                className="w-full bg-[#0D3B66] text-white py-3.5 rounded-xl font-bold hover:bg-opacity-95 hover:shadow-lg hover:shadow-blue-900/10 active:scale-[0.99] transition duration-200 text-sm mt-4"
              >
                Log In
              </button>
            </form>

            {/* Séparateur */}
            <div className="relative my-8 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Or Login With
              </span>
            </div>

            {/* Boutons d'authentification tiers */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-150 rounded-xl hover:bg-gray-50 transition text-sm font-semibold text-gray-700">
                {/* Icône Google */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.15-3.15C17.45 1.77 14.93 1 12 1 7.35 1 3.39 3.66 1.41 7.54l3.85 2.99C6.18 7.02 8.84 5.04 12 5.04z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.42 3.57v2.96h3.9c2.28-2.1 3.55-5.19 3.55-8.68z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.26 14.54c-.24-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29L1.41 7.54C.51 9.33 0 11.31 0 13.4s.51 4.07 1.41 5.86l3.85-2.99z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.9-2.96c-1.08.72-2.48 1.15-4.06 1.15-3.16 0-5.82-1.98-6.78-4.96l-3.85 2.99C3.39 20.34 7.35 23 12 23z"
                  />
                </svg>
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-150 rounded-xl hover:bg-gray-50 transition text-sm font-semibold text-gray-700">
                {/* Icône Apple */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.74-1.2 1.88-1.05 3 .12.13 1.11.02 2.11-.9l.89-.54z" />
                </svg>
                <span>Apple</span>
              </button>
            </div>

            <div className="text-center mt-8 text-xs font-medium text-gray-500">
              Vous n'avez pas de compte ?{' '}
              <Link
                to="/register"
                className="text-[#0D3B66] hover:underline font-bold"
              >
                Inscrivez-vous maintenant
              </Link>
            </div>
          </div>

          {/* Footer à gauche */}
          <div className="flex justify-between items-center text-[10px] md:text-xs text-gray-400 font-medium">
            <span>Copyright © 2026 UCC Hub.</span>
            <a href="#" className="hover:text-gray-600 transition">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* ================= DROITE : PROMOTION APPLICATION MOBILE (Design UCC Hub) ================= */}
        <div className="lg:col-span-6 bg-[#0D3B66] p-8 md:p-16 flex flex-col justify-between text-white relative overflow-hidden">
          {/* Motifs géométriques décoratifs légers en arrière-plan */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/4 pointer-events-none"></div>

          {/* Header Droite */}
          <div className="hidden lg:block"></div>

          {/* Corps Droite (Titre et App) */}
          <div className="my-auto text-center lg:text-left flex flex-col items-center lg:items-start max-w-lg mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200 bg-white/10 px-3.5 py-1.5 rounded-full mb-6">
              Application mobile
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
              UCC Hub est disponible sur votre mobile !
            </h2>
            <p className="text-blue-100/80 text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Restez connecté à votre faculté. Suivez votre progression, accédez
              aux supports de cours et gardez l'ensemble de votre vie
              universitaire dans votre poche.
            </p>

            {/* Téléphone en 3D/Flat */}
            <div className="relative w-full max-w-70 h-112.5 bg-slate-900 rounded-[3rem] border-4 border-slate-700/80 shadow-2xl p-3 flex flex-col overflow-hidden mb-10 group transform hover:scale-102 transition duration-500">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-slate-800"></span>
              </div>

              {/* Contenu d'écran du téléphone (Simulé avec des détails élégants) */}
              <div className="flex-1 bg-linear-to-br from-blue-950 via-slate-900 to-[#0D3B66] rounded-[2.3rem] p-4 pt-8 flex flex-col justify-between text-left relative overflow-hidden select-none">
                {/* Petits cercles de couleur de fond de l'interface mobile */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#0D3B66]/30 rounded-full blur-xl"></div>

                {/* Header Mobile simulé */}
                <div className="flex justify-between items-center z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center text-[10px] font-bold text-[#0D3B66]">
                      U
                    </div>
                    <span className="text-[10px] font-bold text-white tracking-wide">
                      UCC Hub
                    </span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  </div>
                </div>

                {/* Dashboard Widget mobile simulé */}
                <div className="my-auto space-y-3 z-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 shadow-xl">
                    <span className="text-[9px] font-medium text-blue-200">
                      Emploi du temps
                    </span>
                    <h4 className="text-xs font-bold text-white mt-1">
                      Conception de Logiciel (L3)
                    </h4>
                    <p className="text-[9px] text-blue-100/60 mt-0.5">
                      14h30 - Auditoire FSI
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 shadow-xl flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-medium text-blue-200">
                        Statut Financier
                      </span>
                      <h4 className="text-xs font-bold text-white mt-0.5">
                        Frais validés
                      </h4>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Barre de navigation mobile simulée */}
                <div className="flex justify-around items-center bg-white/5 backdrop-blur-md rounded-xl p-1.5 z-10 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="w-2 h-2 rounded-full bg-white/30"></span>
                  <span className="w-2 h-2 rounded-full bg-white/30"></span>
                </div>
              </div>
            </div>

            {/* Boutons Plateformes de téléchargement (App Store & Google Play) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-4 py-2.5 transition active:scale-95 duration-200 text-left w-full sm:w-auto min-w-36.25"
              >
                <img
                  src={GooglePlayIcon}
                  alt="Google Play"
                  className="w-6 h-6 text-white fill-current"
                />
                <div>
                  <p className="text-[8px] uppercase tracking-wider text-blue-200 font-semibold leading-none">
                    Get it on
                  </p>
                  <p className="text-xs font-bold mt-0.5 leading-none">
                    Google Play
                  </p>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-4 py-2.5 transition active:scale-95 duration-200 text-left w-full sm:w-auto min-w-36.25"
              >
                <svg
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.74-1.2 1.88-1.05 3 .12.13 1.11.02 2.11-.9l.89-.54z" />
                </svg>
                <div>
                  <p className="text-[8px] uppercase tracking-wider text-blue-200 font-semibold leading-none">
                    Download on the
                  </p>
                  <p className="text-xs font-bold mt-0.5 leading-none">
                    App Store
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
