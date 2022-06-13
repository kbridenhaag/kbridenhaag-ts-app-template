import { Router } from 'express'
import { ROUTE_PATHS } from '../../constants'
import { setCsrf, validateCsrf } from '../../middleware/csrf'
import { handleAsync } from '../../middleware/handleAsync'
import { signInController } from './signInController'
import { validateSignIn } from './signInValidation'

export const signInRoutes = () => {
  const app = Router()

  app.get(ROUTE_PATHS.SIGN_IN, setCsrf, signInController.get())

  app.post(ROUTE_PATHS.SIGN_IN, validateCsrf, validateSignIn, handleAsync(signInController.post()))

  return app
}
