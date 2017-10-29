let expect = require('chai').expect

Account = require("../../domain/account");
Transaction = require("../../domain/transaction");


describe('Account', () => {
  describe('#add_transaction', () => {

    it('account is active and transaction is valid', () => {
      let account = new Account(123)
      let transaction = new Transaction(100)

      expect(account.add_transaction(transaction)).to.be.eq(true)
      expect(account.balance).to.be.eq(100)
      expect(account.transactions).to.be.length(1)
    });

    it('account is not active', () => {
      let account = new Account(123, false)
      let transaction = new Transaction(100)

      expect(account.add_transaction(transaction)).to.be.eq(false)
      expect(account.balance).to.be.eq(0)
      expect(account.transactions).to.be.length(0)
    });

    it('account is active and transaction is invalid', () => {
      let account = new Account(123)
      let transaction = { isValid: () => { false } }

      expect(account.add_transaction(transaction)).to.be.eq(false)
      expect(account.balance).to.be.eq(0)
      expect(account.transactions).to.be.length(0)
    });
  });

});