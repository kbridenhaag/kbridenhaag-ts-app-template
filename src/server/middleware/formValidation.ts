import { Request, Response, NextFunction } from 'express'
import { ValidationChain, ValidationError, validationResult } from 'express-validator'

export class FormValidationError extends Error {
  public status = 400

  constructor(public readonly errors: Record<string, ValidationError>, public readonly redirect: string) {
    super('Form validation error')
  }
}

export const validateWith = (validations: ValidationChain | ValidationChain[], redirect?: string) => {
  const validationChain = Array.isArray(validations) ? validations : [validations]

  return [
    ...validationChain,
    (req: Request, res: Response, next: NextFunction) => {
      const validationErrors = validationResult(req)

      if (!validationErrors.isEmpty()) {
        const error = new FormValidationError(validationErrors.mapped(), redirect || req.originalUrl)

        req.flash('errors', error.errors)
        req.flash('values', req.body)

        return res.status(400).redirect(error.redirect)
      }

      next()
    }
  ]
}
