const Account = require('../../../../account/domain/account')
const RepositoryFactory = require('../../../../repository_factory')
const EventProcessor = require('../../../../event/domain/event_processor')
const AccountCreationEvent = require('../../../../event/domain/account_creation_event')

class CreateAccount {

  constructor(
    domainPort = new EventProcessor(RepositoryFactory.eventRepository()),
    repository = RepositoryFactory.accountRepository()
  ) {
    this._domainPort = domainPort
    this._repository = repository
  }

  create(params) {
    let account = new Account(params, this._repository)

    return this._domainPort.process(new AccountCreationEvent(account))
      .catch((e) => {
        console.log(`AccountWebAdapter.Create error code: ${e.code}, message: ${e.message}, params: ${params.cpf}`)
        throw e
      })
  }
}

module.exports = {
  CreateAccount: CreateAccount
}