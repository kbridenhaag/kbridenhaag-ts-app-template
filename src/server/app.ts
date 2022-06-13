import express from 'express'
import { setupErrorHandler } from './appError'
import { setupRoutes } from './components'
import { setupMiddleware } from './middleware'
import { setupNotFound } from './notFound'
import { setupNunjucks } from './nunjucks'

export const createApp = () => {
  const app = express()

  setupNunjucks(app)

  app.use(setupMiddleware())
  app.use(setupRoutes())
  app.use(setupErrorHandler)
  app.use(setupNotFound)

  return app
}
