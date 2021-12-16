const reciclaCollection = require("../Models/reciclaSchema")


const getALL = async(req, res) =>{
  


  const recicla = await reciclaCollection.find()
  return res.status(200).send(recicla)
}

const getMorador = async (req, res) =>{
  const morador = await reciclaCollection.find({morador: req.query.morador})
   
  return res.status(200).send(morador)
}

const getContato = async (req, res) =>{
  const contato = await reciclaCollection.find({contato: req.query.contato}) 
   
  return res.status(200).send(contato)
}

const getBloco = async (req, res) =>{
  const bloco = await reciclaCollection.find({bloco: req.query.bloco})
  return res.status(200).send(bloco)
}

const getApartamento = async (req, res) =>{
  const apartamento = await reciclaCollection.find({apartamento: req.query.apartamento})
  return res.status(200).send(apartamento)
}

const getById = async (req, res)=>{
  try {
    const {id} = req.params

    const recicla = await reciclaCollection.findById(id)

    return res.status(200).send(recicla)
  
  } catch (error) {
    return res.satus(404).send({mensagem: 'Esse Morador não Está em Nosso Cadastro!'})
  }
}

const create = async(req, res)=>{
  try {
    const recicla = await reciclaCollection.create(req.body)
    
    return res.status(201).json({mensagem: "Morador cadastrado!", recicla})

  } catch (error) {
    return res.status(400).send({mensagem: error.message})
  }
}

const update = async (req, res) =>{
  try {
    
    const {morador} = req.params
    const body = req.body
    const update = {new: true}

    const recicla = await reciclaCollection.findOneAndUpdate(morador, body, update)
    return res.status(200).json({mensagem: "Cadastro atualizado com sucesso!", recicla})

  } catch (error) {
    return res.satatus(404).send({message: error.message})
  }
}

const deleteById = async (request, response) => {
  try {
      const morador = await morador.findById(request.params.id)

      if (morador == null) {
          return response.status(404).json({message: "Morador não encontrado!"})
      }
      await morador.remove()
      return response.status(200).json({message: "Morador deletado com sucesso!"})
  }catch (error) {
      return response.status(500).json({message: error.message})
  }
} 



module.exports = {
getALL,
getMorador,
getContato,
getBloco,
getApartamento,
getById,
create,
update,
deleteById
}