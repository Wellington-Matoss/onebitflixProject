import express from 'express'
import { database } from './database'
import { adminJs, adminJsRouter } from './adminjs'

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.port || 3000

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log('Bando de dados conectado.')
  })

  console.log(`Servidor iniciado na porta:${PORT}.`)
})