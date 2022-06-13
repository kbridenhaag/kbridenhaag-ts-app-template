import { Router } from 'express'
import { ROUTE_PATHS } from '../constants'

export const setupHealthCheckMiddleware = (): Router => {
  const router = Router()

  router.get(ROUTE_PATHS.HEALTH_CHECK, (req, res) => {
    res.send({
      uptime: process.uptime()
    })
  })

  return router
}
