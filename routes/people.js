let express = require('express')
let router = express.Router()


PeopleHandler = {
  get(req, res) { res.json({ id: req.params.id, name: "Ryan", birthday: '1991-01-20' }) },
  create(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) },
  update(req, res) { res.status(204).send() },
  delete(req, res) { res.status(204).send() }
}

router.get('/:id', PeopleHandler.get)
router.post('/', PeopleHandler.create)
router.put('/:id', PeopleHandler.update)
router.delete('/:id',PeopleHandler.delete)

module.exports = router
