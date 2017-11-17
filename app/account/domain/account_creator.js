const Account = require('./account')
const EventProcessor = require('../../event/domain/event_processor');
const AccountCreationEvent = require('../../event/domain/account_creation_event');
const { NotFoundError } = require('../../errors');

class AccountCreator {
  constructor(accountRepository, ownerRepository, eventRepository) {
    this._accountRepository = accountRepository
    this._ownerRepository = ownerRepository
    this._eventProcessor = new EventProcessor(eventRepository)
  }

  create(accountParams) {
    return this._ownerRepository
      .get(accountParams.owner_id)
      .then((owner) => {
        if (owner === null) {
          throw new NotFoundError('Account owner cold not be found')
        }
        accountParams.owner = owner
        let account = new Account(accountParams, this._accountRepository)
        return this._eventProcessor.process(new AccountCreationEvent(account, owner))
      })
  }
}
module.exports = AccountCreator