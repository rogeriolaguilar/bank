const Account = require('./account')
const EventProcessor = require('../../event/domain/event_processor');
const AccountCreationEvent = require('../../event/domain/account_creation_event');

class AccountCreator {
  constructor(accountRepository, ownerRepository, eventRepository) {
    this._accountRepository = accountRepository
    this._ownerRepository = ownerRepository
    this._eventProcessor = new EventProcessor(eventRepository)
  }

  create(accountParams) {
    console.log(`account params ${JSON.stringify(accountParams)}`)
    return this._ownerRepository
      .get(accountParams.owner_id)
      .then((owner) => {
        accountParams.owner = owner
        let account = new Account(accountParams, this._accountRepository)
        
        return this._eventProcessor.process(new AccountCreationEvent(account, owner))
      })
  }
}
module.exports = AccountCreator