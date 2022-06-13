import { Router } from 'express'

export const setupFlash = () => {
  const router = Router()

  router.use((req, res, next) => {
    if (!req.session) {
      throw new Error('Flash requires sessions')
    }

    const flashMessages = req.session.flash || {}

    req.flash = (key: string, value?: string | string[] | Record<string, unknown>) => {
      if (value) {
        req.session.flash = Object.assign(flashMessages, {
          [key]: value
        })

        return value
      }

      return flashMessages[key] || undefined
    }

    next()
  })

  router.use((req, res, next) => {
    res.locals.flash = (key: string) => req.flash(key)

    req.session.flash = {}

    next()
  })

  return router
}
