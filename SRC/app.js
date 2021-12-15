//chamando as minhas dependencias:
require("dotenv-safe").config()
const express = require ('express')
const app = express()
const cors = require ('cors')

//conectando o bd:
const database = require('./database/config')
const recicla = require('./Routers/reciclaRoutes')

app.use(cors()) //usando o cors
app.use(express.json()) //usando o bodyparser

app.get('/', (req, res)=>{
  res.status(200).json({mensagem: "Condomínio, Recicla!"})
})

app.use("/recicla", recicla)

database.connect()






module.exports = app