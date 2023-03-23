import { createServer } from 'node:http'
import express from 'express'
import chalk from 'chalk'
const app = express()
app.use(express.json())
const PORT = process.env.PORT as unknown as number || 5630
const httpServer = createServer(app)
app.get('/', (req, res) => {
  res.send('hello world')
})
httpServer.listen(PORT, undefined, undefined, async () => {
  // eslint-disable-next-line no-console
  console.log(chalk.green(`server is runing at http://127.0.0.1:${PORT}/`))
})
