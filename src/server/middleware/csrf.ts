import csurf from 'csurf'
import { Handler } from 'express'

const csrfProtection = csurf({ cookie: true })

const setCsrfLocals: Handler = (req, res, next) => {
  res.locals = Object.assign(res, res.locals, {
    csrfToken: req.csrfToken()
  })

  next()
}

export const setCsrf = [csrfProtection, setCsrfLocals]

export const validateCsrf = csrfProtection
