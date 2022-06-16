import express, { Router } from 'express'
import { PATH_NAMES } from '../constants'
import path from 'path'

export const setupPublic = (): Router => {
  const router = Router()

  router.use(PATH_NAMES.PUBLIC, express.static(path.resolve(__dirname, '..', '..', 'public')))

  return router
}
