let expect = require('chai').expect
let sinon = require('sinon')


AccountCreationEvent = require("../../domain/account_creation_event");
Account = require("../../domain/account");
Person = require("../../domain/person");

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
    it('should call owner to handle creation', () => {
      let handleAccountCreation = sinon.spy(person, 'handleAccountCreation' )
      
      event.process()    

      expect(handleAccountCreation.withArgs(event).calledOnce).to.eq(true)      
    });

    it('should call account to handle creation', () => {
      let handleCreation = sinon.spy(account, 'handleCreation' )
      
      event.process()      
      expect(handleCreation.withArgs(event).calledOnce).to.eq(true)      
    });
  });

});