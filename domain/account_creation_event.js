class AccountCreationEvent{
  constructor(account, person, occurredAt = new Date()){
    this._occurredAt = occurredAt
    this._account = account
    this._person = person
  }

  process(){
    this._account.handleCreation(this)
    this._person.handleAccountCreation(this)
  }

  reverte(){
    
  }

  get account(){
    return this._account
  }

  get person(){
    return this._person
  }

  get occurredAt(){
    return this._occurredAt
  }
}
module.exports = AccountCreationEvent