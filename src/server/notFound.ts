import { Handler } from 'express'
import { AppError } from './appError'

const TEMPLATE = 'not-found.njk'

export const setupNotFound = (): Handler => (req, res) => {
  const notFoundError = new AppError(404, 'Not Found')

  res.status(notFoundError.status).render(TEMPLATE, {
    error: notFoundError
  })
}
