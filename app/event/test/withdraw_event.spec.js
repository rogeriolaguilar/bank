let expect = require('chai').expect


const Account = require("../../account/domain/account");
const WithdrawEvent = require("../domain/withdraw_event");


describe('WithdrawEvent', () => {
  describe('#process', () => {

    it('account with no balance', () => {
      let account = new Account({number: 123, balance: 0})
      new WithdrawEvent(100, account).process()
      expect(account.balance).to.be.eq(-100)
    });

    it('account with balance', () => {
      let balance = 200
      let account = new Account({number: 123, balance: balance})

      new WithdrawEvent(100, account).process()
      expect(account.balance).to.be.eq(100)
    });
  });

  describe('#reverse', () => {
    it('reverse withdraw', () => {
      let account = new Account({number: 123, balance: 0})
      let withdrawEvent = new WithdrawEvent(100, account)
      
      withdrawEvent.process()
      expect(account.balance).to.be.eq(-100)
      withdrawEvent.reverse()
      expect(account.balance).to.be.eq(0)
    });
  });

});