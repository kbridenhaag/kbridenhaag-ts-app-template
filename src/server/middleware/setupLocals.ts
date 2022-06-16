import { Router } from 'express'
import { config } from '../../config'
import { PATH_NAMES } from '../constants'

export const setupLocals = () => {
  const router = Router()

  router.use((req, res, next) => {
    res.locals = Object.assign(res.locals, {
      appName: config.appName,
      appNameColor: config.appNameColor,
      isDev: process.env.NODE_ENV === 'production',
      assetPath: PATH_NAMES.PUBLIC
    })

    next()
  })

  return router
}
