let express = require('express')
let router = express.Router()


CompaniesHandler = {
  get(req, res) { res.json({ id: req.params.id, name: "Google Brasil", cnpj: '06.990.590/0001-23' }) },
  create(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) },
  update(req, res) { res.status(204).send() },
  delete(req, res) { res.status(204).send() }
}

router.get('/:id', CompaniesHandler.get)
router.post('/', CompaniesHandler.create)
router.put('/:id', CompaniesHandler.update)
router.delete('/:id',CompaniesHandler.delete)

module.exports = router
