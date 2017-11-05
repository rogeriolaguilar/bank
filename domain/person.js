class Person {
  constructor(name, birthday) {
    this.name = name
    this.birthday = birthday
    this._accounts = []
  }

  handleAccountCreation(accountCreationEvent) {
    this.add_account(accountCreationEvent.account)
  }

  reverseAccountCreation(accountCreationEvent) {
    let accountNumber = accountCreationEvent.account.number
    this._accounts = this._accounts.filter( account => account.number !== accountNumber)    
  }

  add_account(account) {
    this._accounts.push(account)
  }

  get accounts() {
    return this._accounts
  }
}
module.exports = Person;

