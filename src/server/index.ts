import { config } from '../config'
import { createApp } from './app'
import { logger } from './logger'

(async () => {
  const app = createApp()

  const server = app.listen(config.port, () => {
    logger.info(`HTTP Server listening on port ${config.port}`)
  })

  process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received: closing HTTP server')
    server.close(() => {
      logger.info('HTTP server closed')
    })
  })
})().catch((err) => {
  logger.error(`A HTTP server error occurred: ${err}`)
  process.exit(1)
})
