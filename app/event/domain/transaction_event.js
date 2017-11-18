class TransactionEvent {
  constructor(transaction, account, createdAt = new Date()) {
    this._transaction = transaction
    this._account = account
    this._createdAt = createdAt
  }

  get payload() {
    return {
      amount: this._transaction.amount,
      accountNumber: this._account.number,
    }
  }

  get transaction() {
    return this._transaction
  }

  get amount() {
    return this._transaction.amount
  }

  get createdAt() {
    return this._createdAt
  }

  get type() {
    return this._transaction.type
  }
}
module.exports = TransactionEvent