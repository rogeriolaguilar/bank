let express = require('express')
let router = express.Router()

const TransactionsHandler = {
  get(req, res) { res.json({ id: req.params.id, type: "deposit", amount: 1000 }) },
  create(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) },
}

router.get('/:id', TransactionsHandler.get)
router.post('/', TransactionsHandler.create)

module.exports = router
