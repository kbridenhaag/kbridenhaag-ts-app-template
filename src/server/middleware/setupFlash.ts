import { Router } from 'express'
import flash from 'express-flash'

export const setupFlash = () => {
  const router = Router()

  router.use(flash())

  return router
}
