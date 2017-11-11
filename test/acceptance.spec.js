require('mocha')
let expect = require('chai').expect

const Person = require('../domain/person/person')
const PersonRepository = require('../domain/person/person_repository')
const PersonRequester = require('../domain/person/person_requester')
const PersonCreator = require('../domain/person/person_creator')
const PersonWebAPIAdapter = require('../infrastructure/person_web_adapter')

//rigth port
class HardCodedPersonRepository {
  constructor() {
    this.saved_persons = []
  }

  getPerson(cpf) {
    return new Person({ name: 'Rogério', birthday: new Date('1991-01-27T00:00:00.000Z') })
  }

  createPerson(person_params) {
    this.saved_persons.put(new Person(person_params))
  }
}

describe('Bank Person', () => {
  describe('get', () => {

    const cpf = '34034034071'

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

});