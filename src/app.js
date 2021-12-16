//chamando as minhas dependencias:
const express = require ('express')
const app = express()
const cors = require ('cors')

//conectando o bd:
const database = require('./database/config')
const recicla = require('./Routers/reciclaRoutes')

require("dotenv-safe").config()

database.connect()

app.use(cors()) //usando o cors
app.use(express.json()) //usando o bodyparser

app.get('/', (req, res)=>{
  res.status(200).json({mensagem: "Condomínio, Recicla!"})
})

app.use("/recicla", recicla)

module.exports = app