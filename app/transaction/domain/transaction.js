class Transaction {
  constructor(params, repository) {
    this._amount = params.amount
    this._type = params.type
    this._accountNumber = params.accountNumber
    this._repository = repository
  }

  isDeposit() {
    return this._type == 'deposit'
  }

  isWithdraw() {
    return this._type == 'withdraw'
  }

  isValid() {
    return this._amount > 0 && Number.isInteger(this._amount) && this.isValidType()
  }

  isValidType() {
    return this._type == 'deposit' || this._type == 'withdraw'
  }

  handleCreation(){
    return this._repository.save(this)
  }

  get amount(){
    return this._amount
  }

  get type(){
    return this._type
  }

  get accountNumber(){
    return this._accountNumber
  }
}
module.exports = Transaction