const { InvalidDataError } = require('../../errors');
const DepositEvent = require('../../event/domain/deposit_event');
const WithdrawEvent = require('../../event/domain/withdraw_event');

class TransactionEventFactory {

  static for(transaction, account) {
    if (transaction.isDeposit()) {
      return new DepositEvent(transaction, account)
    } else if (transaction.isWithdraw()) {
      return new WithdrawEvent(transaction, account)
    }
    throw new InvalidDataError('Invalid transaction type')
  }
}
module.exports = TransactionEventFactory