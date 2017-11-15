let expect = require('chai').expect
let sinon = require('sinon')


const AccountCreationEvent = require("../domain/account_creation_event");
const Account = require("../../account/domain/account");
const Person = require("../../person/domain/person");

describe('AccountCreationEvent', () => {

  let account
  let person
  let event
  beforeEach(() => {
    account = new Account(123)
    person = new Person({ name: 'Martin', birthday: new Date(), cpf: '777777777' })
    event = new AccountCreationEvent(account, person)
  });


  describe('#process', () => {
    it('should call the account owner to handle creation', () => {
      let handleAccountCreation = sinon.stub(person, 'handleAccountCreation')

      event.process()

      expect(handleAccountCreation.withArgs(event).calledOnce).to.eq(true)
    });
  });


  describe('#reverse', () => {
    it('should call the account owner to reverse creation', () => {
      let reverseAccountCreation = sinon.stub(person, 'reverseAccountCreation')

      event.reverse()

      expect(reverseAccountCreation.calledOnce).to.eq(true)
    });
  })

});