import cookieParser from 'cookie-parser'
import { Router, json, urlencoded } from 'express'

export const setupParsing = () => {
  const router = Router()

  router.use(json())
  router.use(urlencoded({ extended: false }))
  router.use(cookieParser())

  return router
}
