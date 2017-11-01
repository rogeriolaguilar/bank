class WithdrawEvent {
  constructor(amount, account, occurredAt) {
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