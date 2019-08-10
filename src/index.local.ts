import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

import Chalk from 'chalk'

import { config } from './config'
import { server } from './server.mockup'

server.listen(process.env.PORT, () => {
  const { nodeEnv, port } = config
  const mode = nodeEnv.slice(0, 1).toUpperCase() + nodeEnv.slice(1).toLowerCase()

  console.clear()
  console.log(Chalk`{green {bold ${mode} server}} is running on {bold http://localhost:${port}/}`)
})
