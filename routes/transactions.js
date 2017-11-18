const express = require('express')
const router = express.Router()
const TransactionController = require('../app/transaction/infra/web/transaction_controller');

router.get('/accounts/:number/transactions', TransactionController.get)
router.post('/accounts/:number/transactions', TransactionController.create)

module.exports = router
