require('mocha')
let expect = require('chai').expect

const Person = require('../domain/person/person')
const PersonRepository = require('../infrastructure/person_repository')
const RepositoryFactory = require('../infrastructure/repository_factory')
const PersonRequester = require('../domain/person/person_requester')
const PersonCreator = require('../domain/person/person_creator')
const PersonWebAdapter = require('../infrastructure/person_web_adapter')

//rigth port
class HardCodedPersonRepository {
  constructor() {
    this.saved_persons = []
  }

  getPerson(cpf) {
    return new Person({cpf: cpf, name: 'Rogério', birthday: new Date('1991-01-27T00:00:00.000Z') })
  }

  save(person) {
    this.saved_persons.push(person)
  }
}

describe('Bank Person', () => {
  const cpf = '34034034071'

  describe('get', () => {

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
      let webAdapter = new PersonWebAdapter.GetPerson(personRequester)

      let person = webAdapter.get(cpf)

      expect(person.name).to.be.eq("Rogério")
    });
  });

  describe('create', () => {

    const person_params = { cpf: cpf, name: 'Robert Martin', birthday: new Date('01-01-1952') }
    const repository = RepositoryFactory.personRepository('test')

    it('should create person when asked for it', () => {
      const personCreator = new PersonCreator(repository)
      personCreator.createPerson(person_params)

      expect(repository.getPerson(cpf).name).to.be.eq('Robert Martin')
    })

  });
});