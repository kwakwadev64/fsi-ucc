// src/env.ts
import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  /*
   * Spécifie à l'outil le préfixe utilisé par ton framework (Vite utilise VITE_)
   */
  clientPrefix: 'VITE_',

  /*
   * Variables d'environnement disponibles côté client.
   * TypeScript hurlera si elles ne commencent pas par VITE_.
   */
  client: {
    VITE_API_URL: z.string().url('VITE_API_URL doit être une URL valide'),
  },

  runtimeEnv: import.meta.env,
})
