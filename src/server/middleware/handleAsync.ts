import { Handler, Request, Response, NextFunction } from 'express'

export const handleAsync = (handler: Handler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(handler(req, res, next)).catch((err) => {
      next(err)
    })
  }
}
