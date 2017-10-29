class Person {
  constructor(name, birthday) {
    this.name = name
    this.birthday = birthday
    this._accounts = []
  }

  add_account(account) {
    this.accounts.push(account)
  }

  get accounts(){
    return this._accounts
  }
}
module.exports = Person;

