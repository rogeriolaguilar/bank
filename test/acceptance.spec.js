let expect = require('chai').expect
let sinon = require('sinon')

Person = require('../domain/person')

describe('Bank', () => {

  let cpf = '34034034071'

  it('should give person when ask for it', () => {
    let personRequester = new PersonRequester()
    person = personRequester.getPerson(cpf)

    expect(person.name).to.be.eq('Rogério')
  });

  it('should give person when ask for it with support of PersonRepository', () => {
    personRequester = new PersonRequester(new PersonRepository())
    person = personRequester.getPerson(cpf)

    expect(person.name).to.be.eq('Yukihiro')
  });

});



//rigth port 
class PersonRepository {
  getPerson(cpf) {
    // go to real db
    return new Person('Yukihiro', new Date('1991-01-27T00:00:000.00Z'))
  }
}

//rigth por
class HardCodedPersonRepository {
  getPerson(cpf) {
    return new Person('Rogério', new Date('1991-01-27T00:00:000.00Z'))
  }
}


//left port
class PersonRequester {

  constructor(personRepository = new HardCodedPersonRepository()) {
    this._repository = personRepository
  }

  getPerson(cpf) {
    return this._repository.getPerson(cpf)
  }
}
