const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const reciclaSchema = new Schema
({
   _id: 
   {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
   },

   morador: 
   {
     type: String,
     required: true  
   },

   contato: 
   {
      type: String,
      required: true
   },

   condominio: 
   {
    type: String,
    required: true
   },

   bloco: 
   {
     type: String,
     required: true
   },

   apartamento: 
   {
     type: String,
     required: true
   },
})

const reciclaCollection = mongoose.model('recila', reciclaSchema)

module.exports = reciclaCollection