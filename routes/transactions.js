const express = require('express')
const router = express.Router()
const TransactionController = require('../app/transaction/infra/web/transaction_controller');

router.get('/accounts/:accountNumber/transactions', TransactionController.get)
router.post('/accounts/:accountNumber/transactions', TransactionController.create)

module.exports = router
