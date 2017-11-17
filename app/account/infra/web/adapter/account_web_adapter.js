const Account = require('../../../../account/domain/account')
const PersonRequester = require('../../../../person/domain/person_requester')
const RepositoryFactory = require('../../../../repository_factory')
const EventProcessor = require('../../../../event/domain/event_processor')
const AccountCreationEvent = require('../../../../event/domain/account_creation_event')
const WebErrors = require('../../../../web_errors')

class CreatePersonAccount {

  constructor(
    accountRepository = RepositoryFactory.accountRepository(),
    personRepository = RepositoryFactory.personRepository()
  ) {
    this._accountRepository = accountRepository
    this._personRepository = personRepository
    this._domainPort = new EventProcessor(RepositoryFactory.eventRepository())
  }

  create(params) {
    const personRequester = new PersonRequester()
    return personRequester.getPersonObject(params.cpf)
      .then((owner) => {
        params.owner = owner
        let account = new Account(params, this._accountRepository)
        return this._domainPort.process(new AccountCreationEvent(account, owner))

      }).catch((e) => {
        console.log(`AccountWebAdapter.Create error params: ${params.cpf}, code: ${e.code}, stack: ${e.stack}`)
        throw new WebErrors.InternalServerError(e.message)
      })
  }
}

module.exports = {
  CreatePersonAccount: CreatePersonAccount
}