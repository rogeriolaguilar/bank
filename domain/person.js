class Person {
  constructor(name, birthday) {
    this._name = name
    this.birthday = birthday

    // change account array to a account repository
    this._accounts = []
  }

  handleAccountCreation(accountCreationEvent) {
    this.add_account(accountCreationEvent.account)
    // account.save
  }

  reverseAccountCreation(accountCreationEvent) {
    let accountNumber = accountCreationEvent.account.number
    this._accounts = this._accounts.filter( account => account.number !== accountNumber)    
    // account.delete
  }

  handleCreation(personCreationEvent){
    //save
  }

  reverseCreation(personCreationEvent){
    //delete
  }

  add_account(account) {
    this._accounts.push(account)
  }

  get accounts() {
    return this._accounts
  }

  get name(){
    return this._name
  }
}
module.exports = Person;

