const RepositoryFactory = require('../../../../repository_factory')
const WebErrors = require('../../../../web_errors')
const AccountCreator = require('../../../domain/account_creator');


class CreatePersonAccount {

  constructor(
    accountRepository = RepositoryFactory.accountRepository(),
    personRepository = RepositoryFactory.personRepository(),
    eventRepository = RepositoryFactory.eventRepository()
  ) {
    this._accountCreator = new AccountCreator(accountRepository, personRepository, eventRepository)
  }

  create(request) {
    return this._accountCreator.create({

      owner_type: 'person',
      owner_id: request.params.cpf,
      balance: request.body.balance

    }).catch((e) => {
      if (e.code === 'NOTFOUND') {
        throw new WebErrors.BadRequestError(e.message)
      }
      console.log(`AccountWebAdapter.Create error params: ${request.params.cpf}, code: ${e.code}, stack: ${e.stack}`)
      throw new WebErrors.InternalServerError(e.message)
    })
  }
}

module.exports = {
  CreatePersonAccount: CreatePersonAccount
}