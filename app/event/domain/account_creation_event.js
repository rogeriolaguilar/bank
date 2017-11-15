class AccountCreationEvent{
  constructor(account, owner){
    this._account = account
    this._owner = owner
    this._type = 'person_creation'
    this.createdAt = new Date()
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

  get type() {
    return this._type
  }

  get payload() {
    return JSON.stringify({
      owner: {
        type: this._owner.type,
        id: this._owner.id
      },
      account: {
        balance: this._account.balance,
        number: this._account.number  
      }
    })
  }
}
module.exports = AccountCreationEvent