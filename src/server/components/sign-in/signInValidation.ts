import { body } from 'express-validator'
import { validateWith } from '../../middleware/formValidation'

const signInSchema = [body('email').notEmpty().isEmail(), body('password').notEmpty()]

export const validateSignIn = validateWith(signInSchema)
