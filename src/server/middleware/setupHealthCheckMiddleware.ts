import { Router } from 'express'
import { PATH_NAMES } from '../constants'

export const setupHealthCheckMiddleware = (): Router => {
  const router = Router()

  router.get(PATH_NAMES.HEALTH_CHECK, (req, res) => {
    res.send({
      uptime: process.uptime()
    })
  })

  return router
}
