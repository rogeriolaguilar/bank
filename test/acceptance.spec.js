require('mocha')
let expect = require('chai').expect

const Person = require('../domain/person/person')
const PersonRepository = require('../domain/person/person_repository')
const PersonRequester = require('../domain/person/person_requester')
const PersonWebAPIAdapter = require('../infrastructure/person_web_adapter')

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
    let person = personRequester.getPerson(cpf)

    expect(person.name).to.be.eq('Rogério')
  });

  it('should give person when ask for it with support of PersonRepository', () => {
    let personRequester = new PersonRequester(new PersonRepository())
    let person = personRequester.getPerson(cpf)

    expect(person.name).to.be.eq('Yukihiro')
  });

  it('should provide the person when ask for it with support of RestAdapter', () => {
    let personRequester = new PersonRequester(new HardCodedPersonRepository())

    let webAdapter = new PersonWebAPIAdapter(personRequester)

    let person = webAdapter.getPerson(cpf)

    expect(person.name).to.be.eq("Rogério")
  });

});
