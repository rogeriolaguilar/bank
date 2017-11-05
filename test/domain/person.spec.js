let expect = require('chai').expect
Person = require("../../domain/person");

describe('Person', () => {
  let person

  beforeEach(() => {
    console.log(Person)
    person = new Person('Linus Torvalds', new Date('1969-12-28'))
    console.log(person)
  });

  describe('customer without account', () => {
    it('expect account to be a empty array', () => {
      expect(person.accounts).to.be.a('array');
      expect(person.accounts).to.have.lengthOf(0)
    });
  });

  describe('handleAccountCreation', () => {
    it('should add account to customer', () => {
      let accountNumber = 123123
      let accountCreationEvent = { account: { number: accountNumber } }

      person.handleAccountCreation(accountCreationEvent)

      expect(person.accounts).to.have.lengthOf(1);
      expect(person.accounts[0].number).to.eq(accountNumber)
    });
  });
});

