import Express from 'express'
import CORS from 'cors'

const app = Express()

app.use(CORS())

export const server = app
