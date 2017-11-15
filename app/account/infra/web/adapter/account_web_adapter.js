const Account = require('../../../../account/domain/account')
const PersonRequester = require('../../../../person/domain/person_requester')
const RepositoryFactory = require('../../../../repository_factory')
const EventProcessor = require('../../../../event/domain/event_processor')
const AccountCreationEvent = require('../../../../event/domain/account_creation_event')
const WebErrors = require('../../../../web_errors')

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
    return this._personRequester.getPersonObject(params.cpf)
      .then((owner) => {
        params.owner = owner
        console.log(`>>>>>>>>>> Person finded ${owner.cpf}`)
        let account =  new Account(params, this._repository)
        return this._domainPort.process(new AccountCreationEvent(account, owner))
          .catch((e) => {
            console.log(`AccountWebAdapter.Create error code: ${e.code}, message: ${e.message}, params: ${params.cpf}`)
            
            throw new WebErrors.InternalServerError(e.message)
          })
      })
  }
}

module.exports = {
  CreatePersonAccount: CreatePersonAccount
}