let expect = require('chai').expect

const Account = require("../../account/domain/account");
const DepositEvent = require("../domain/deposit_event");


describe('DepositEvent', () => {
  describe('#process', () => {

    it('account with no balance', () => {
      let account = new Account({ number: 123, balance: 0 })

      new DepositEvent(100, account).process()
      expect(account.balance).to.be.eq(100)
    });

    it('account with balance', () => {
      let balance = 200
      let account = new Account({ number: 123, balance: balance })

      new DepositEvent(300, account).process()
      expect(account.balance).to.be.eq(500)
    });
  });

  describe('#reverse', () => {
    it('reverse deposit', () => {
      let account = new Account({ number: 123, balance: 0 })
      let event = new DepositEvent(100, account)

      event.process()
      expect(account.balance).to.be.eq(100)
      event.reverse()
      expect(account.balance).to.be.eq(0)
    });
  });
});