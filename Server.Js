
const app = require ('./src/app')

const PORT = process.env.PORT


//iniciando o servidor
app.listen (PORT, () =>{
  console.log(`Condominio, Recicla! Rodando na porta: ${PORT}.`)})
