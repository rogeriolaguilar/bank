let expect = require('chai').expect

EventProcessor = require("../../domain/event_processor");
DepositEvent = require("../../domain/deposit_event");
WithdrawEvent = require("../../domain/withdraw_event");
AccountCreationEvent = require("../../domain/account_creation_event");
Account = require("../../domain/account");
Person = require("../../domain/person/person");

describe('EventProcessor', () => {

  let account
  let eventProcessor
  let person

  beforeEach(() => {
    account = new Account(123)
    person = new Person('Martin', new Date())
    eventProcessor = new EventProcessor()
  });

  describe('#process', () => {
    it('account transaction events', () => {
      expect(account.balance).to.be.eq(0)
      eventProcessor.process(new DepositEvent(10, account))
      expect(account.balance).to.be.eq(10)
      eventProcessor.process(new WithdrawEvent(20, account))
      expect(account.balance).to.be.eq(-10)
    });

    it('create account event', () => {
      expect(person.accounts).to.be.empty
      eventProcessor.process(new AccountCreationEvent(account, person))
      expect(person.accounts).to.have.lengthOf(1)
    });
  });

});