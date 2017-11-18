class Account {
  constructor(params, repository) {
    this._number = params.number
    this._balance = params.balance
    this._owner = params.owner
    this._repository = repository
  }

  handleDeposit(depositEvent) {
    this._balance += depositEvent.amount
    return this._repository.update_balance(this)
  }

  reverseDeposit(depositEvent) {
    this._balance -= depositEvent.amount
    return this._repository.update_balance(this)
  }

  handleWithdraw(withdrawEvent) {
    this._balance -= withdrawEvent.amount
    return this._repository.update_balance(this)
  }

  reverseWithdraw(withdrawEvent) {
    this._balance += withdrawEvent.amount
    return this._repository.update_balance(this)
  }

  handleCreation(accountCreationEvent){
    return this._repository.save(accountCreationEvent.account)
  }

  reverseCreation(accountCreationEvent){
    return this._repository.delete(accountCreationEvent.account)
  }

  get transactions() {
    return this._transactions
  }

  get balance() {
    return this._balance
  }

  get owner(){
    return this._owner
  }

  get number(){
    return this._number
  }

  set number(number){
    this._number = number
  }
}
module.exports = Account