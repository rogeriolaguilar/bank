const expect = require('chai').expect
const Person = require("../domain/person")
const Account = require('../../account/domain/account');


describe('Person', () => {
  let person
  let accountCreationEvent
  let account = new Account({ number: 123123, balance: 0 })

  beforeEach(() => {
    person = new Person({ cpf: '71046356372', name: 'Linus Torvalds', birthday: new Date('1969-12-28') })

    accountCreationEvent = { account: account }
  });

  describe('customer without account', () => {
    it('expect account to be a empty array', () => {
      expect(person.accounts).to.be.a('array');
      expect(person.accounts).to.have.lengthOf(0)
    });
  });

  describe('handleAccountCreation', () => {
    it('should add account to customer', () => {
      person.handleAccountCreation(accountCreationEvent)

      expect(person.accounts).to.have.lengthOf(1)
      expect(person.accounts[0].number).to.eq(account.number)
    });
  });

  describe('reverseAccountCreation', () => {
    it('should remove account from customer', () => {
      person.add_account(account)
      expect(person.accounts).to.have.lengthOf(1)

      person.reverseAccountCreation(accountCreationEvent)

      expect(person.accounts).to.have.lengthOf(0)
    })

    it('should remove the correct account from customer', () => {
      let otherAccount = { number: 9999 }
      person.add_account(account)
      person.add_account(otherAccount)
      expect(person.accounts).to.have.lengthOf(2)

      person.reverseAccountCreation(accountCreationEvent)

      expect(person.accounts).to.have.lengthOf(1)
      expect(person.accounts[0]).to.eq(otherAccount)
    });
  });

  describe('toJson', () => {
    it('should return JSON', () => {
      expect(person.toJson()).to.be.eq(`{"cpf":"${person.cpf}","name":"${person.name}","birthday":"${person.birthday.toISOString()}"}`)
    });
  });

});
