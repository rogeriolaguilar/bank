let expect = require('chai').expect

const EventProcessor = require("../domain/event_processor");
const DepositEvent = require("../../transaction/domain/deposit_event");
const WithdrawEvent = require("../../transaction/domain/withdraw_event");
const AccountCreationEvent = require("../../account/domain/account_creation_event");
const Account = require("../../account/domain/account");
const Person = require("../../person/domain/person");
const MockEventRepository = require("../infra/mock_event_repository")

describe('EventProcessor', () => {

  let account
  let eventProcessor
  let person

  beforeEach(() => {
    account = new Account(123)
    person = new Person({name: 'Martin', birthday: new Date()})
    eventProcessor = new EventProcessor(new MockEventRepository())
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