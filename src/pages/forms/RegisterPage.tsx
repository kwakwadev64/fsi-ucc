import { useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import LogoFsiUcc from '@/assets/logo_fsi_tranparent.png'
import GooglePlayIcon from '@/assets/logo-playsotre.png'
import {
  registerSchema,
  type RegisterValues,
} from '@/validators/registerSchema'
import { getErrorMessage } from '@/utils/api-error'
import { useMutateData } from '@/hooks/useQuery'
import axios from 'axios'
import { env } from '@/config/env'

// api
const registerUser = async (values: RegisterValues) => {
  const response = await axios.post(`${env.VITE_API_URL}/register`, values)
  return response.data
}

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()

  // Déclaration de la mutation
  const { mutate, isPending } = useMutateData<unknown, Error, RegisterValues>(
    registerUser,
    {
      onSuccess: () => {
        toast.success('Compte créé avec succès ! Connectez-vous.')
        navigate('/login')
      },
      onError: error => {
        const ErrorMessage = getErrorMessage(error)
        toast.error(
          ErrorMessage || "Échec de l'inscription. Veuillez réessayer."
        )
      },
    }
  )

  const formik = useFormik<RegisterValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      faculty: '',
      sector: '',
      academicYear: '',
      promotion: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: toFormikValidationSchema(registerSchema),
    onSubmit: values => {
      mutate(values)
    },
  })

  // Gestion propre de la validation par étape
  const nextStep = async () => {
    const fieldsToValidate: Record<number, Array<keyof RegisterValues>> = {
      1: ['firstName', 'lastName', 'email', 'phoneNumber'],
      2: ['faculty', 'sector', 'academicYear', 'promotion'],
    }

    const currentFields = fieldsToValidate[step] || []

    // Activer le mode "touched" pour afficher les erreurs visuellement
    currentFields.forEach(field => formik.setFieldTouched(field, true, false))

    // Déclencher la validation globale
    const totalErrors = await formik.validateForm()

    // CORRECTION : On filtre pour ne bloquer QUE si l'étape actuelle contient une erreur
    const hasErrorsOnCurrentStep = currentFields.some(
      field => !!totalErrors[field]
    )

    if (!hasErrorsOnCurrentStep) {
      setStep(prev => prev + 1)
    } else {
      toast.error(
        'Veuillez remplir correctement tous les champs de cette étape.'
      )
    }
  }

  const prevStep = () => {
    setStep(prev => prev - 1)
  }

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center p-4 md:p-10 font-['Poppins']">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-187.5">
        {/* GAUCHE : FORMULAIRE D'INSCRIPTION MULTI-ÉTAPES */}
        <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8 lg:mb-0">
            <img src={LogoFsiUcc} alt="logo-fsi-ucc" className="w-16 h-16" />
            <span className="font-extrabold text-xl tracking-tight text-gray-955">
              <span className="text-[#0D3B66]">Science Informatique</span>
            </span>
          </div>

          {/* Formulaire */}
          <div className="max-w-md w-full mx-auto my-auto py-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
              Créer un compte
            </h1>

            {/* Indicateur visuel d'étapes */}
            <div className="flex items-center gap-2 mb-8 mt-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex-1 flex items-center gap-2">
                  <div
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                      step >= i ? 'bg-[#0D3B66]' : 'bg-gray-200'
                    }`}
                  />
                </div>
              ))}
              <span className="text-xs font-bold text-gray-400 ml-2">
                Étape {step}/3
              </span>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* ================= ÉTAPE 1 : INFOS PERSONNELLES ================= */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Prénom
                      </label>
                      <input
                        type="text"
                        placeholder="ex : Gracia"
                        className={`w-full px-4 py-3 rounded-xl border ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 placeholder-gray-400 transition`}
                        {...formik.getFieldProps('firstName')}
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <p className="text-xs text-red-500 mt-1">
                          {formik.errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Nom
                      </label>
                      <input
                        type="text"
                        placeholder="ex : Van'siem"
                        className={`w-full px-4 py-3 rounded-xl border ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 placeholder-gray-400 transition`}
                        {...formik.getFieldProps('lastName')}
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <p className="text-xs text-red-500 mt-1">
                          {formik.errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="exemple@gmail.com"
                      className={`w-full px-4 py-3 rounded-xl border ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 placeholder-gray-400 transition`}
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+243..."
                      className={`w-full px-4 py-3 rounded-xl border ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 placeholder-gray-400 transition`}
                      {...formik.getFieldProps('phoneNumber')}
                    />
                    {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber && (
                        <p className="text-xs text-red-500 mt-1">
                          {formik.errors.phoneNumber}
                        </p>
                      )}
                  </div>
                </div>
              )}

              {/* ================= ÉTAPE 2 : PARCOURS ACADÉMIQUE ================= */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Faculté
                    </label>
                    <select
                      className={`w-full px-4 py-3 rounded-xl border bg-white ${formik.touched.faculty && formik.errors.faculty ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 transition`}
                      {...formik.getFieldProps('faculty')}
                    >
                      <option value="">Sélectionner une faculté</option>
                      <option value="FSI">
                        Faculté des Sciences Informatiques (FSI)
                      </option>
                    </select>
                    {formik.touched.faculty && formik.errors.faculty && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.faculty}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Filière
                    </label>
                    <select
                      className={`w-full px-4 py-3 rounded-xl border bg-white ${formik.touched.sector && formik.errors.sector ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 transition`}
                      {...formik.getFieldProps('sector')}
                    >
                      <option value="">Sélectionner une filière</option>
                      <option value="admin_reseau">
                        Administration Réseau
                      </option>
                      <option value="conception">
                        Conception de Logiciels
                      </option>
                    </select>
                    {formik.touched.sector && formik.errors.sector && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.sector}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Année académique
                      </label>
                      <select
                        className={`w-full px-4 py-3 rounded-xl border bg-white ${formik.touched.academicYear && formik.errors.academicYear ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 transition`}
                        {...formik.getFieldProps('academicYear')}
                      >
                        <option value="">Sélectionner</option>
                        <option value="2025-2026">2025-2026</option>
                        <option value="2026-2027">2026-2027</option>
                      </select>
                      {formik.touched.academicYear &&
                        formik.errors.academicYear && (
                          <p className="text-xs text-red-500 mt-1">
                            {formik.errors.academicYear}
                          </p>
                        )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Promotion
                      </label>
                      <select
                        className={`w-full px-4 py-3 rounded-xl border bg-white ${formik.touched.promotion && formik.errors.promotion ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 transition`}
                        {...formik.getFieldProps('promotion')}
                      >
                        <option value="">Sélectionner</option>
                        <option value="L1">Licence 1</option>
                        <option value="L2">Licence 2</option>
                        <option value="L3">Licence 3</option>
                        <option value="M1">Master 1</option>
                        <option value="M2">Master 2</option>
                      </select>
                      {formik.touched.promotion && formik.errors.promotion && (
                        <p className="text-xs text-red-500 mt-1">
                          {formik.errors.promotion}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ================= ÉTAPE 3 : SÉCURITÉ / MOT DE PASSE ================= */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className={`w-full px-4 py-3 rounded-xl border ${formik.touched.password && formik.errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 placeholder-gray-400 transition`}
                        {...formik.getFieldProps('password')}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-semibold transition"
                      >
                        {showPassword ? 'Masquer' : 'Afficher'}
                      </button>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Confirmer le mot de passe
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className={`w-full px-4 py-3 rounded-xl border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#0D3B66]/20'} focus:outline-none focus:ring-2 focus:border-[#0D3B66] text-sm text-gray-900 placeholder-gray-400 transition`}
                        {...formik.getFieldProps('confirmPassword')}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-semibold transition"
                      >
                        {showConfirmPassword ? 'Masquer' : 'Afficher'}
                      </button>
                    </div>
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <p className="text-xs text-red-500 mt-1">
                          {formik.errors.confirmPassword}
                        </p>
                      )}
                  </div>
                </div>
              )}

              {/* Barre d'actions */}
              <div className="flex gap-4 pt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={isPending}
                    className="flex-1 bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl font-bold hover:bg-gray-50 disabled:opacity-50 transition duration-200 text-sm"
                  >
                    Retour
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-[#0D3B66] text-white py-3.5 rounded-xl font-bold hover:bg-opacity-95 hover:shadow-lg active:scale-[0.99] transition duration-200 text-sm"
                  >
                    Suivant
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex-1 bg-[#0D3B66] text-white py-3.5 rounded-xl font-bold hover:bg-opacity-95 hover:shadow-lg disabled:opacity-50 active:scale-[0.99] transition duration-200 text-sm"
                  >
                    {isPending ? 'Inscription...' : "S'inscrire"}
                  </button>
                )}
              </div>
            </form>

            <div className="text-center mt-6 text-xs font-medium text-gray-500">
              Vous avez déjà un compte ?{' '}
              <Link
                to="/login"
                className="text-[#0D3B66] hover:underline font-bold"
              >
                Connectez-vous ici
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

        {/* ================= DROITE : BANNIÈRE UCC HUB ================= */}
        <div className="lg:col-span-6 bg-[#0D3B66] p-8 md:p-16 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/4 pointer-events-none"></div>

          <div className="hidden lg:block"></div>

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

            {/* Téléphone simulé */}
            <div className="relative w-full max-w-70 h-112.5 bg-slate-900 rounded-[3rem] border-4 border-slate-700/80 shadow-2xl p-3 flex flex-col overflow-hidden mb-10 group transform hover:scale-102 transition duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-slate-800"></span>
              </div>

              <div className="flex-1 bg-linear-to-br from-blue-950 via-slate-900 to-[#0D3B66] rounded-[2.3rem] p-4 pt-8 flex flex-col justify-between text-left relative overflow-hidden select-none">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#0D3B66]/30 rounded-full blur-xl"></div>

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

                <div className="flex justify-around items-center bg-white/5 backdrop-blur-md rounded-xl p-1.5 z-10 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="w-2 h-2 rounded-full bg-white/30"></span>
                  <span className="w-2 h-2 rounded-full bg-white/30"></span>
                </div>
              </div>
            </div>

            {/* Téléchargements */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-4 py-2.5 transition active:scale-95 duration-200 text-left w-full sm:w-auto min-w-36.25"
              >
                <img
                  src={GooglePlayIcon}
                  alt="Google Play"
                  className="w-6 h-6"
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
