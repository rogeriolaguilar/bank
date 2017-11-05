class Account {
  constructor(number, active = true, balance = 0) {
    this._number = number
    this._active = active
    this._balance = balance
  }

  handleCreation(accountCreationEvent){
    console.log('handleCreation: save account in query model')
  }

  handleDeposit(depositEvent) {
    this._balance += depositEvent.amount
  }

  reverseDeposit(depositEvent){
    this._balance -= depositEvent.amount
  }

  handleWithdraw(withdrawEvent) {
    this._balance -= withdrawEvent.amount
  }

  reverseWithdraw(withdrawEvent) {
    this._balance += withdrawEvent.amount
  }


  get transactions() {
    return this._transactions
  }

  get balance() {
    return this._balance
  }
}
module.exports = Account