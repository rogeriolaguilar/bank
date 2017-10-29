class Transaction {
  constructor(amount) {
    this.amount = amount
  }

  isDeposit() {
    return this.amount > 0
  }

  isWithdraw() {
    return this.amount < 0
  }

  isValid() {
    return this.amount != 0 && Number.isInteger(this.amount)
  }
}
module.exports = Transaction