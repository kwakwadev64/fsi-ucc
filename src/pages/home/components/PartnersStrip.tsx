export interface Partner {
  name: string
  logoUrl: string
  href?: string
}

interface PartnersStripProps {
  partners?: Partner[]
  title?: string
}

/**
 * Bande de logos partenaires / tutelle académique (ex: UCC, ministère, partenaires tech).
 * Renforce la crédibilité institutionnelle. Passe `partners` avec uniquement de vrais
 * partenaires — tant que ce n'est pas fait, le composant ne rend rien.
 */
export default function PartnersStrip({
  partners = [],
  title = 'Ils nous accompagnent',
}: PartnersStripProps) {
  if (!partners || partners.length === 0) return null

  return (
    <section className="bg-white py-10 sm:py-12 px-6 sm:px-10 lg:px-16 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase mb-8">
          {title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {partners.map(partner => {
            const Logo = (
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="h-8 sm:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            )
            return partner.href ? (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
              >
                {Logo}
              </a>
            ) : (
              <div key={partner.name} aria-label={partner.name}>
                {Logo}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
