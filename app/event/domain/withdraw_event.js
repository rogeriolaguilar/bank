const TransactionEvent = require('./transaction_event');

class WithdrawEvent extends TransactionEvent {

  process() {
    return this.account.handleWithdraw(this)
  }

  reverse() {
    return this.account.reverseWithdraw(this)
  }
}
module.exports = WithdrawEvent