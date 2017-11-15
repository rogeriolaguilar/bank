const express = require('express')
const router = express.Router()
const PeopleController =  require('../app/person/infra/web/people_controller')


router.get('/:cpf', PeopleController.get)
router.post('/', PeopleController.create)
router.put('/:cpf', PeopleController.update)
router.delete('/:cpf', PeopleController.delete)
module.exports = router
