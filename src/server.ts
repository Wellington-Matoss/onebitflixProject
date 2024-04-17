import express from 'express'
import { database } from './database'

const app = express()

const PORT = process.env.port || 3000

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log('Bando de dados conectado.')
  })

  console.log(`Servidor iniciado na porta:${PORT}.`)
})