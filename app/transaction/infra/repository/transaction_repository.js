const knex = require("knex")(require("../../../../knexfile")[process.env.NODE_ENV])
const Errors = require('../../../errors')

class TransactionRepository {

  save(transaction) {
    return knex('transactions')
      .insert({
        type: transaction.type,
        account_number: transaction.accountNumber,
        amount: transaction.amount
      }).catch((e) => {
        console.log(`TransactionRepository error code:${e.code}: ${e.stack}`)
        throw new Errors.GenericError('Fail while saving Transaction')
      })
  }
}

module.exports = TransactionRepository
