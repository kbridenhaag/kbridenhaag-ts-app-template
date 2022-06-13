import express, { Router } from 'express'
import { ROUTE_PATHS } from '../constants'
import path from 'path'

export const setupPublic = (): Router => {
  const router = Router()

  router.use(ROUTE_PATHS.PUBLIC, express.static(path.resolve(__dirname, '..', '..', 'public')))

  return router
}
