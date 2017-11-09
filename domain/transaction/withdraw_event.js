class WithdrawEvent {
  constructor(amount, account, occurredAt = new Date()) {
    this.occurredAt = occurredAt
    this.amount = amount
    this.account = account
  }

  process() {
    this.account.handleWithdraw(this)
  }

  reverse() {
    this.account.reverseWithdraw(this)
  }
}
module.exports = WithdrawEvent