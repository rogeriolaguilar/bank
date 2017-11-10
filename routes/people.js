const express = require('express')
const router = express.Router()
const PeopleController =  require('../controllers/people_controller')


router.get('/:id', PeopleController.get)
router.post('/', PeopleController.create)
router.put('/:id', PeopleController.update)
router.delete('/:id', PeopleController.delete)
module.exports = router




