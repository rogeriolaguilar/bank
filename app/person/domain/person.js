class Person {
  constructor(params, repository) {
    this._cpf = params.cpf
    this._name = params.name
    this._birthday = params.birthday
    this._accounts = []
    this._repository = repository
  }

  handleAccountCreation(accountCreationEvent) {
    let account = accountCreationEvent.account
    this.add_account(account)
    return account.handleCreation(accountCreationEvent)
  }

  reverseAccountCreation(accountCreationEvent) {
    let accountNumber = accountCreationEvent.account.number
    this._accounts = this._accounts.filter(account => account.number !== accountNumber)
    //return  account.delete
  }

  handleCreation(personCreationEvent) {
    return this._repository.save(personCreationEvent.person)
  }

  reverseCreation(personCreationEvent) {
    //return this._repository.delete(personCreationEvent.person())
  }

  add_account(account) {
    this._accounts.push(account)
  }

  get payload() {
    return {
      cpf: this._cpf,
      name: this._name,
      birthday: this._birthday
    }
  }

  get accounts() {
    return this._accounts
  }

  get name() {
    return this._name
  }

  get birthday() {
    return this._birthday
  }

  get cpf() {
    return this._cpf
  }

  get id() {
    return this._cpf
  }

  get type(){
    return 'person'
  }
}
module.exports = Person;

