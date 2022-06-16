import { Handler } from 'express'
import { PATH_NAMES } from '../../constants'

const TEMPLATE = 'sign-in/index.njk'

const signInGet = (): Handler => (req, res) => {
  res.render(TEMPLATE)
}

const signInPost = (): Handler => async (req, res, next) => {
  return res.redirect(PATH_NAMES.SIGN_IN)
}

export const signInController = Object.freeze({
  get: signInGet,
  post: signInPost
})
