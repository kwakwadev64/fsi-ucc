import { z } from 'zod'

export const registerSchema = z
  .object({
    firstName: z.string().min(2, 'Le prénom doit avoir au moins 2 caractères'),
    lastName: z.string().min(2, 'Le nom doit avoir au moins 2 caractères'),
    email: z.string().email('Adresse email invalide'),
    phoneNumber: z
      .string()
      .min(9, 'Numéro de téléphone invalide (min 9 chiffres)'),
    faculty: z.string().min(1, 'Veuillez sélectionner une faculté'),
    sector: z.string().min(1, 'Veuillez sélectionner une filière'),
    academicYear: z.string().min(1, "Veuillez sélectionner l'année académique"),
    promotion: z.string().min(1, 'Veuillez sélectionner votre promotion'),
    password: z
      .string()
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })

export type RegisterValues = z.infer<typeof registerSchema>
