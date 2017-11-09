let expect = require('chai').expect

Account = require("../../../domain/account/account");
DepositEvent = require("../../../domain/transaction/deposit_event");


describe('DepositEvent', () => {
  describe('#process', () => {

    it('account with no balance', () => {
      let balance = 0
      let account = new Account(123)
      
      new DepositEvent(100, account).process()
      expect(account.balance).to.be.eq(100)
    });

    it('account with balance', () => {
      let balance = 200
      let account = new Account(123, true, balance)
      
      new DepositEvent(300, account).process()
      expect(account.balance).to.be.eq(500)
    });
  });

  describe('#reverse', () => {
    it('reverse deposit', () => {
      let account = new Account(123)
      let event = new DepositEvent(100, account)
      
      event.process()
      expect(account.balance).to.be.eq(100)
      event.reverse()
      expect(account.balance).to.be.eq(0)
    });
  });
});