const express = require("express")
const router = express.Router()
const controllers = require ("../Controllers/reciclaControlers")


router.get('/', controllers.getALL)
router.get('/buscar/:id', controllers.getById)
router.get('/morador', controllers.getMorador)
router.get('/contato', controllers.getContato)
router.get('/bloco', controllers.getBloco)
router.get('/apartamento', controllers.getApartamento)

router.post('/criar', controllers.create)

router.put('/update/:id', controllers.update)
router.delete('/delete/:id', controllers.deleteById)




module.exports = router