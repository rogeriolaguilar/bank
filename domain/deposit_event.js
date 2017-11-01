class DepositEvent {
  constructor(amount, account, occurredAt = new Date()) {
    this.occurredAt = occurredAt
    this.amount = amount
    this.account = account
  }

  process() {
    this.account.handleDeposit(this)
  }

  reverse() {
    this.account.reverseDeposit(this)
  }
}
module.exports = DepositEvent