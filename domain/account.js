class Account {
  constructor(number, status = "pending"){
    this._number = number
    this._status = status
    this._transactions = []
    this._balance = 0
  }

  add_transaction(trasaction){
    this._transaction.push(transaction)
  }

  get transactions(){
    return this.transactions
  }
}
module.exports = Account