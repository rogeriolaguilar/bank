let expect = require('chai').expect
let sinon = require('sinon')


PersonCreationEvent = require("../../../domain/person/person_creation_event");
Account = require("../../../domain/account/account");
Person = require("../../../domain/person/person");

describe('PersonCreationEvent', () => {

  let account
  let person
  let event
  beforeEach(() => {
    account = new Account(123)
    person = new Person('Martin', new Date())
    event = new PersonCreationEvent(person)
  });


  describe('#process', () => {
    it('should call the person to handle creation', () => {
      let handleCreation = sinon.spy(person, 'handleCreation')

      event.process()

      expect(handleCreation.withArgs(event).calledOnce).to.eq(true)
    });
  });


  describe('#reverse', () => {
    it('should call the person to reverse creation', () => {
      let reverseCreation = sinon.spy(person, 'reverseCreation')

      event.reverse()

      expect(reverseCreation.calledOnce).to.eq(true)
    });
  })

});