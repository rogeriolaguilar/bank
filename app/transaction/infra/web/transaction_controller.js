const TransactionWebAdapter = require('./adapter/transaction_web_adapter');

class TransactionController {

  static get(req, res) { res.json([{ id: req.params.id, type: "deposit", amount: 1000 }]) }
  static create(req, res) {
    let adapter = new TransactionWebAdapter.Create()

    adapter.create(req)
      .then(() => {
        res.status(201).json()
      })
      .catch((e) => {
        console.error(e.message)
        res.status(e.code).json({ message: e.message })
      })
  }

}
module.exports = TransactionController
