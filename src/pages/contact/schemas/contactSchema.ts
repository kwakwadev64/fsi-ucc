import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string({
      error: issue =>
        issue.input === undefined
          ? 'Ce champ est requis'
          : 'la valeur inserée  n’est pas une chaîne de caractères',
    })
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères')
    .trim(),
  email: z
    .string({
      error: issue =>
        issue.input === undefined
          ? 'Ce champ est requis'
          : 'la valeur inserée  n’est pas une chaîne de caractères',
    })
    .email("Format de l'email invalide")
    .trim(),
  subject: z
    .string({
      error: issue =>
        issue.input === undefined
          ? 'Ce champ est requis'
          : 'la valeur inserée  n’est pas une chaîne de caractères',
    })
    .min(5, 'Le sujet doit contenir au moins 5 caractères')
    .max(100, 'Le sujet est trop long')
    .trim(),
  message: z
    .string({
      error: issue =>
        issue.input === undefined
          ? 'Ce champ est requis'
          : 'la valeur inserée  n’est pas une chaîne de caractères',
    })
    .min(10, 'Votre message doit contenir au moins 10 caractères')
    .max(3000, 'Message trop long (maximum 2000 caractères)')
    .trim(),
})

export type contactSchemaType = z.infer<typeof contactSchema>
