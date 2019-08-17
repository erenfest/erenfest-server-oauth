import Express from 'express'
import Helmet from 'helmet'
import BodyParser from 'body-parser'
import CookieParser from 'cookie-parser'

import { config } from './config'
import { routes } from './routes'
import { initializeModels } from './models'

const app = Express()

app.use((request, response, next) => {
  initializeModels().then(next)
})
app.use(Helmet())
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))
app.use(CookieParser())
if (config.isLocal) {
  app.use(require('cors')())
}
app.use(routes)

export const server = app
