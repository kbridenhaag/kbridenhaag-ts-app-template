import { Handler } from 'express'
import { ROUTE_PATHS } from '../../constants'

const TEMPLATE = 'sign-in/index.njk'

const signInGet = (): Handler => (req, res) => {
  res.render(TEMPLATE)
}

const signInPost = (): Handler => async (req, res, next) => {
  return res.redirect(ROUTE_PATHS.SIGN_IN)
}

export const signInController = Object.freeze({
  get: signInGet,
  post: signInPost
})
