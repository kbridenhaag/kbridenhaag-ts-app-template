import { Router } from 'express'
import session from 'express-session'

export const setupSession = (options?: session.SessionOptions) => {
  const router = Router()

  if (!options?.secret) {
    console.warn('No secret provided for session. Using default secret.')
  }

  router.use(
    session({
      secret: 'keyboard-cat',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'lax'
      },
      ...options
    })
  )

  router.use((req, res, next) => {
    res.locals = Object.assign(res.locals, {
      sessionId: req.sessionID
    })

    next()
  })

  return router
}
