import { SessionOptions } from 'express-session'
import { setupFlash } from './setupFlash'
import { setupHealthCheckMiddleware } from './setupHealthCheckMiddleware'
import { setupLocals } from './setupLocals'
import { setupParsing } from './setupParsing'
import { setupPublic } from './setUpPublic'
import { setupSecurity } from './setupSecurity'
import { setupSession } from './setupSession'

interface MiddlewareOptions {
  session?: SessionOptions
}

export const setupMiddleware = (options?: MiddlewareOptions) => [
  setupSecurity(),
  setupPublic(),
  setupParsing(),
  setupSession(options?.session),
  setupFlash(),
  setupLocals(),
  setupHealthCheckMiddleware()
]
