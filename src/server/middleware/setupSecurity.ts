import { Router } from 'express'
import helmet from 'helmet'

export const setupSecurity = () => {
  const router = Router()

  router.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'sha256-+6WnXIl4mbFTCARd8N3COQmT3bJJmo32N8q8ZSQAIcU='"],
          styleSrc: ["'self'"],
          fontSrc: ["'self'"]
        }
      },
      crossOriginEmbedderPolicy: true
    })
  )

  return router
}
