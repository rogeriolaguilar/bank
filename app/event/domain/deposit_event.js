const TransactionEvent = require('./transaction_event');

class DepositEvent extends TransactionEvent {

  process() {
    return this._account.handleDeposit(this)
      .then(() => {
        return this._transaction.handleCreation(this)
      })
  }

  reverse() {
    return this._account.reverseDeposit(this)
      .then(() => {
        return this._transaction.reverseCreation()
      })
  }
}
module.exports = DepositEvent