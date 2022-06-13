import { ErrorRequestHandler } from 'express'

export class AppError extends Error {
  public readonly status: number
  public readonly message: string
  public readonly redirect?: string

  constructor(status: number, message: string, redirect?: string) {
    super(message)
    this.status = status
    this.message = message
    this.redirect = redirect
  }
}

export const setupErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    if (err.redirect) {
      return res.status(err.status).redirect(err.redirect)
    }

    return res.status(err.status || 400).render('error.njk', {
      error: err
    })
  }

  res.status(400).render('error.njk')
}
