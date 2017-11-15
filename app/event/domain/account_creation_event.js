class AccountCreationEvent{
  constructor(account, owner, occurredAt = new Date()){
    this._occurredAt = occurredAt
    this._account = account
    this._owner = owner
    this._type = 'person_creation'
  }

  process(){
    return this._owner.handleAccountCreation(this)
  }

  reverse(){
    return this._owner.reverseAccountCreation(this)
  }

  get account(){
    return this._account
  }

  get owner(){
    return this._owner
  }

  get occurredAt(){
    return this._occurredAt
  }
}
module.exports = AccountCreationEvent