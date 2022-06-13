import { ValidationError } from 'express-validator'
import { Environment } from 'nunjucks'

const errorList = (errors: Record<string, ValidationError>) => {
  const errorKeys = Object.keys(errors)

  return errorKeys.reduce((acc: { text: string; href: string }[], current) => {
    acc.push({
      text: errors[current].msg,
      href: `#${current}`
    })
    return acc
  }, [])
}

export const addGlobals = (env: Environment) => {
  env.addFilter('errorList', errorList)
}
