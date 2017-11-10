let expect = require('chai').expect
let sinon = require('sinon')


const AccountCreationEvent = require("../../../domain/account/account_creation_event");
const Account = require("../../../domain/account/account");
const Person = require("../../../domain/person/person");

describe('AccountCreationEvent', () => {

  let account
  let person
  let event
  beforeEach(() => {
    account = new Account(123)
    person = new Person('Martin', new Date())
    event = new AccountCreationEvent(account, person)
  });


  describe('#process', () => {
    it('should call the account owner to handle creation', () => {
      let handleAccountCreation = sinon.spy(person, 'handleAccountCreation')

      event.process()

      expect(handleAccountCreation.withArgs(event).calledOnce).to.eq(true)
    });
  });


  describe('#reverse', () => {
    it('should call the account owner to reverse creation', () => {
      let reverseAccountCreation = sinon.spy(person, 'reverseAccountCreation')

      event.reverse()

      expect(reverseAccountCreation.calledOnce).to.eq(true)
    });
  })

});