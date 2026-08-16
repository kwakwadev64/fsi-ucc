/**
 * Retourne uniquement les annonces publiées il y a moins d'un mois.
 * @param annonces - liste d'annonces, chacune avec un champ date (createdAt)
 * @param dateField - nom du champ date à utiliser (par défaut "createdAt")
 */
export function filtrerAnnoncesRecentes<T extends Record<string, any>>(
  annonces: T[],
  dateField: keyof T = 'createdAt' as keyof T
): T[] {
  const maintenant = new Date()
  const ilYaUnMois = new Date(maintenant)
  ilYaUnMois.setMonth(ilYaUnMois.getMonth() - 1)

  return annonces.filter(annonce => {
    const dateAnnonce = new Date(annonce[dateField])
    return dateAnnonce >= ilYaUnMois
  })
}
