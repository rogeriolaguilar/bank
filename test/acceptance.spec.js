let expect = require('chai').expect
let sinon = require('sinon')

Person = require('../domain/person/person')
PersonRepository = require('../domain/person/person_repository')
PersonRequester = require('../domain/person/person_requester')
PersonWebAPIAdapter = require('../infrastructure/person_web_adapter')

//rigth port
class HardCodedPersonRepository {
  getPerson(cpf) {
    return new Person('Rogério', new Date('1991-01-27T00:00:00.000Z'))
  }
}


describe('Bank get Person', () => {

  let cpf = '34034034071'

  it('should give person when ask for it', () => {
    let personRequester = new PersonRequester(new HardCodedPersonRepository())
    person = personRequester.getPerson(cpf)

    expect(person.name).to.be.eq('Rogério')
  });

  it('should give person when ask for it with support of PersonRepository', () => {
    personRequester = new PersonRequester(new PersonRepository())
    person = personRequester.getPerson(cpf)

    expect(person.name).to.be.eq('Yukihiro')
  });

  it('should provide the person when ask for it with support of RestAdapter', () => {
    personRequester = new PersonRequester(new HardCodedPersonRepository())

    webAdapter = new PersonWebAPIAdapter(personRequester)

    person = webAdapter.getPerson(cpf)

    expect(person.name).to.be.eq("Rogério")
  });

});
