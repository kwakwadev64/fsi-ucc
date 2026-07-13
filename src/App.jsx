import React from 'react';
import { 
  Home, GraduationCap, Users, Clock, Image as ImageIcon, 
  Mail, MapPin, ChevronDown, BookOpen, FileText, 
  Layers, Archive, Calendar, UserCheck
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/images/logo_fsi.jpeg" alt="" className='w-16 h-16'/>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-slate-900 tracking-tight">FSI-UCC</span>
                <span className="text-xs text-slate-500 font-medium">Faculté des Sciences Informatiques</span>
              </div>
            </div>

            {/* Menu Links */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Home size={18} /> Accueil
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <GraduationCap size={18} /> Études <ChevronDown size={14} className="mt-0.5" />
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Users size={18} /> Équipe
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Clock size={18} /> Historique
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <ImageIcon size={18} /> Galerie
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail size={18} /> Contact
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <MapPin size={18} /> Localisation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[#0B132B]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-blue-800/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex ">
          <div className='text-left'>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              FSI-UCC Officiel
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Bienvenue à la Faculté des <br className="hidden md:block" />
              <span className="text-blue-400">Sciences Informatiques</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 font-light">
              Formons ensemble les ingénieurs et informaticiens de demain.
            </p>

            <div className="flex-row justify-left gap-4">
              <button className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer">
                <BookOpen size={20} />
                Accéder aux cours
              </button>
              <button className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5 cursor-pointer">
                <FileText size={20} />
                Voir les annales
              </button>
            </div>
          </div>
          <div className='hidden md:flex w-[600px] h-[500px]'>
            <img src="/images/logo_fsi_tranparent.png" alt="" className='w-full h-full'/>
          </div>
        </div>
      </section>

      {/* STATS OVERLAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 lg:-mt-24 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {[
            { icon: <GraduationCap className="text-blue-600" size={28} />, count: "0", label: "Notes de cours" },
            { icon: <Archive className="text-blue-600" size={28} />, count: "0", label: "Annales" },
            { icon: <Layers className="text-blue-600" size={28} />, count: "5", label: "Promotions" },
            { icon: <ImageIcon className="text-blue-600" size={28} />, count: "0", label: "Photos" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stat.count}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCÈS RAPIDES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 inline-block relative">
            Accès rapides
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/3 w-2/3 h-px bg-slate-200"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { 
              icon: <BookOpen size={32} />, title: "Notes de cours", 
              desc: "Téléchargez les supports de cours par promotion en un clic." 
            },
            { 
              icon: <Archive size={32} />, title: "Annales", 
              desc: "Consultez et préparez vos examens avec les sessions précédentes." 
            },
            { 
              icon: <Calendar size={32} />, title: "Horaires", 
              desc: "Suivez en temps réel l'évolution des emplois du temps." 
            },
            { 
              icon: <UserCheck size={32} />, title: "Délégués", 
              desc: "Restez en contact permanent avec vos représentants de promotion." 
            }
          ].map((card, index) => (
            <div key={index} className="bg-white px-6 py-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#070C1A] text-slate-300 py-16 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-12">
          
          {/* Col 1 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-wide">FSI-UCC</h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              La Faculté des Sciences Informatiques de l'Université Catholique du Congo forme les architectes du numérique de demain.
            </p>
            <div className="flex gap-3">
              {/* Facebook SVG */}
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              {/* Twitter/X SVG */}
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Linkedin SVG */}
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-wide">NAVIGATION</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Notes de cours</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Annales</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Horaires</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Historique</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Équipe facultaire</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-wide">CONTACT</h3>
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
          <p className="mt-2">Conçu et développé par le Département d'Informatique - UCC</p>
        </div>
      </footer>

    </div>
  );
}