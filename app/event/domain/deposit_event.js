class DepositEvent {
  constructor(transaction, account, createdAt = new Date()) {
    this._transaction = transaction
    this._account = account
    this._createdAt = createdAt
  }

  process() {
    return this._account.handleDeposit(this)
      .then(() => {
        return this._transaction.handleCreation(this)
      })
  }

  reverse() {
    return this._account.reverseDeposit(this)
      .then(() => {
        return this._transaction.reverseCreation()
      })
  }

  get amount(){
    return this._transaction.amount
  }

  get payload(){
    return {
      amount: this._transaction.amount,
      accountNumber: this._account.number
    }
  }

  get transaction(){
    return this._transaction
  }

  get createdAt(){
    return this._createdAt
  }

  get type(){
    return this._transaction.type
  }
}
module.exports = DepositEvent