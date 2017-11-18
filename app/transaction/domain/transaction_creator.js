const Transaction = require('./transaction')
const EventProcessor = require('../../event/domain/event_processor');
const TransactionEventFactory = require('./transaction_event_factory');

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
        let event = TransactionEventFactory.for(transaction, account)
        return this._eventProcessor.process(event)
      })
  }
}
module.exports = TransactionCreator