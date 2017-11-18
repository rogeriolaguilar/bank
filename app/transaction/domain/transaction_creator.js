const Transaction = require('./transaction')
const EventProcessor = require('../../event/domain/event_processor');
const DepositEvent = require('../../event/domain/deposit_event');
const WithdrawEvent = require('../../event/domain/withdraw_event');

class TransactionCreator {
  constructor(accountRepository, transactionRepository, eventRepository) {
    this._accountRepository = accountRepository
    this._transactionRepository = transactionRepository
    this._eventProcessor = new EventProcessor(eventRepository)
  }

  create(transactionParams) {
    return this._accountRepository
      .get(transactionParams.accountNumber)
      .then((account) => {
        let transaction = new Transaction(transactionParams, this._transactionRepository)
        let event
        if (transaction.isDeposit()) {
          event = new DepositEvent(transaction, account)
        } else if (transaction.isWithdraw()) {
          event = new WithdrawEvent(transaction, account)
        }
        return this._eventProcessor.process(event)
      })
  }
}
module.exports = TransactionCreator