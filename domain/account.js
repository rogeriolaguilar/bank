class Account {
  constructor(number, active = true, balance = 0) {
    this._number = number
    this._active = active
    this._transactions = []
    this._balance = balance
  }

  add_transaction(transaction) {
    if (this._active && transaction.isValid()) {
      this._balance += transaction.amount
      this._transactions.push(transaction)
      return true
    }else{
      return false
    }
  }

  get transactions() {
    return this._transactions
  }

  get balance() {
    return this._balance
  }
}
module.exports = Account