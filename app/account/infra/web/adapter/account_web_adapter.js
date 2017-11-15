const Account = require('../../../../account/domain/account')
const PersonRequester = require('../../../../person/domain/person_requester')
const RepositoryFactory = require('../../../../repository_factory')
const EventProcessor = require('../../../../event/domain/event_processor')
const AccountCreationEvent = require('../../../../event/domain/account_creation_event')

class CreatePersonAccount {

  constructor(
    domainPort = new EventProcessor(RepositoryFactory.eventRepository()),
    repository = RepositoryFactory.accountRepository(), 
    personRequester = new PersonRequester()
  ) {
    this._domainPort = domainPort
    this._repository = repository
    this._personRequester = personRequester
  }

  create(params) {
    let account = new Account(params, this._repository)

    return this._domainPort.process(new AccountCreationEvent(account, this._personRequester.getPerson(params.cpf)))
      .catch((e) => {
        console.log(`AccountWebAdapter.Create error code: ${e.code}, message: ${e.message}, params: ${params.cpf}`)
        throw e
      })
  }
}

module.exports = {
  CreatePersonAccount: CreatePersonAccount
}