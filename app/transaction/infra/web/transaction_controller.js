class TransactionController {

  static get(req, res) { res.json([{ id: req.params.id, type: "deposit", amount: 1000 }]) }
  static create(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) }

}
module.exports = TransactionController
