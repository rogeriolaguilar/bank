class Account {
  constructor(params, repository) {
    this._number = params.number
    this._balance = params.balance
    this._owner = params.owner
    this._repository = repository
  }

  handleDeposit(depositEvent) {
    this._balance += depositEvent.amount
  }

  reverseDeposit(depositEvent) {
    this._balance -= depositEvent.amount
  }

  handleWithdraw(withdrawEvent) {
    this._balance -= withdrawEvent.amount
  }

  reverseWithdraw(withdrawEvent) {
    this._balance += withdrawEvent.amount
  }

  handleCreation(accountCreationEvent){
    return this._repository.save(accountCreationEvent.account)
  }

  reverseCreation(accountCreationEvent){
    //this._repository.delete(accountCreationEvent.account)
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
}
module.exports = Account