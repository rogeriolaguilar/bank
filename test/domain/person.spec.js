let expect = require('chai').expect
Person = require("../../domain/person");

describe('Person', () => {
  describe('#add_account', () => {
    let person

    beforeEach(() => {
      console.log(Person)
      person = new Person('Linus Torvalds', '1969-12-28')
    });

    it('add account', () => {
      person.add_account({ number: 123123 })
      expect(person.accounts).to.be.a('array');
      expect(person.accounts).to.have.lengthOf(1);
    });
  });
});

