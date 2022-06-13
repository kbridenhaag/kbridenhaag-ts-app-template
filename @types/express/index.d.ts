import express from 'express'

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        email: string
      }
      flash: (key: string, value?: string[] | string | Record<string, unknown>) => string[] | string | Record<string, unknown> | undefined
    }
  }
}
