class Account {
  constructor(params, repository) {
    this._number = params.number
    this._balance = params.balance
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


  get transactions() {
    return this._transactions
  }

  get balance() {
    return this._balance
  }
}
module.exports = Account