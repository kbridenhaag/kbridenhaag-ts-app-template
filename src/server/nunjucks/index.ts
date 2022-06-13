import { Application } from 'express'
import nunjucks from 'nunjucks'
import path from 'path'
import { addGlobals } from './filters'

const components = path.resolve(__dirname, '..', 'components')
const govukFrontend = path.resolve(__dirname, '..', '..', '..', 'node_modules', 'govuk-frontend')
const views = path.resolve(__dirname, '..', 'views')

const templateDirs = [govukFrontend, views, components]

export const setupNunjucks = (app: Application): void => {
  const nunjucksEnv = nunjucks.configure(templateDirs, {
    autoescape: true,
    noCache: true,
    express: app
  })

  addGlobals(nunjucksEnv)
}
