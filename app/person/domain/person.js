class Person {
  constructor(params) {
    this._cpf = params.cpf
    this._name = params.name
    this._birthday = params.birthday
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

  get birthday(){
    return this._birthday
  }

  get cpf(){
    return this._cpf
  }
}
module.exports = Person;

