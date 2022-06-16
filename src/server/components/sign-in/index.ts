import { Router } from 'express'
import { PATH_NAMES } from '../../constants'
import { setCsrf, validateCsrf } from '../../middleware/csrf'
import { handleAsync } from '../../middleware/handleAsync'
import { signInController } from './signInController'
import { validateSignIn } from './signInValidation'

export const signInRoutes = () => {
  const app = Router()

  app.get(PATH_NAMES.SIGN_IN, setCsrf, signInController.get())

  app.post(PATH_NAMES.SIGN_IN, validateCsrf, validateSignIn, handleAsync(signInController.post()))

  return app
}
