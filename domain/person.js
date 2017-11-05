class Person {
  constructor(name, birthday) {
    this.name = name
    this.birthday = birthday
    this._accounts = []
  }

  handleAccountCreation(accountCreationEvent){
    this._accounts.push(accountCreationEvent.account)
  }

  get accounts(){
    return this._accounts
  }
}
module.exports = Person;

