let expect = require('chai').expect
let sinon = require('sinon')


const PersonCreationEvent = require("../../event/domain/person_creation_event");
const Person = require("../../person/domain/person");

describe('PersonCreationEvent', () => {

  let person
  let event
  beforeEach(() => {
    person = new Person({ name: 'Martin', birthday: new Date() })
    event = new PersonCreationEvent(person)
  });

  describe('#process', () => {
    it('should call the person to handle creation', () => {
      let handleCreation = sinon.stub(person, 'handleCreation')

      event.process()

      expect(handleCreation.withArgs(event).calledOnce).to.eq(true)
    });
  });

  describe('#reverse', () => {
    it('should call the person to reverse creation', () => {
      let reverseCreation = sinon.stub(person, 'reverseCreation')

      event.reverse()

      expect(reverseCreation.calledOnce).to.eq(true)
    });
  })
});