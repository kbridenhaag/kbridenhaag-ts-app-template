import $ from 'jquery'
import { initAll as mojInitAll } from '@ministryofjustice/frontend'
import { initAll as govukInitAll } from 'govuk-frontend'

window.$ = $
govukInitAll()
mojInitAll()
