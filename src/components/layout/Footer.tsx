import { Clock, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#070C1A] text-slate-300 py-16 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-12">
        {/* Col 1 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 tracking-wide">
            FSI-UCC
          </h3>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            La Faculté des Sciences Informatiques de l'Université Catholique du
            Congo forme les architectes du numérique de demain.
          </p>
          <div className="flex gap-3">
            {/* Facebook SVG */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            {/* Twitter/X SVG */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Linkedin SVG */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 tracking-wide">
            NAVIGATION
          </h3>
          <ul className="space-y-3 text-sm text-slate-400 font-medium">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Notes de cours
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Annales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Horaires
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Historique
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Équipe facultaire
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 tracking-wide">
            CONTACT
          </h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 shrink-0 mt-0.5" size={18} />
              <span>2 Avenue de l'Université, Kinshasa, RDC</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-blue-500 shrink-0" size={18} />
              <span>info@fsi-ucc.org</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-blue-500 shrink-0" size={18} />
              <span>Lun - Ven : 08h00 - 16h00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/50 text-center text-xs text-slate-500">
        <p>© 2026 FSI-UCC. Tous droits réservés.</p>
        <p className="mt-2">
          Conçu et développé par le Département d'Informatique - UCC
        </p>
      </div>
    </footer>
  )
}

export default Footer
