const RepositoryFactory = require('../../../../repository_factory')
const WebErrors = require('../../../../web_errors')
const TransactionCreator = require('../../../domain/transaction_creator');


class Create {

  constructor(
    accountRepository = RepositoryFactory.accountRepository(),
    transactionRepository = RepositoryFactory.transactionRepository(),
    eventRepository = RepositoryFactory.eventRepository()
  ) {
    this._transactionCreator = new TransactionCreator(accountRepository, transactionRepository, eventRepository)
  }

  create(request) {
    return this._transactionCreator.create({

      type: request.body.type,
      accountNumber: request.params.accountNumber,
      amount: request.body.amount

    }).catch((e) => {
      if (e.code === 'NOTFOUND') {
        throw new WebErrors.BadRequestError(e.message)
      }
      console.log(`TransactionWebAdapter.Create error params: ${request.params.cpf}, code: ${e.code}, stack: ${e.stack}`)
      throw new WebErrors.InternalServerError(e.message)
    })
  }
}

module.exports = {
  Create: Create
}