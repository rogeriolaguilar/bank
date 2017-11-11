const PersonRequester = require('../domain/person/person_requester')
const Person = require('../domain/person/person')

class PersonWebAdapter {
  constructor(personDomainPort = new PersonRequester(), publicationStrategy = (r) => {return r}) {
    this._personDomainPort = personDomainPort
    this._publicationStrategy = publicationStrategy
  }

  getPerson(cpf) {
    let person = this._personDomainPort.getPerson(cpf)
    return this._publicationStrategy({ cpf: person.cpf, name: person.name, birthday: person.birthday })
  }

  createPerson(person_params){
    let person = new Person(person_params)
    this._personDomainPort.createPerson(person) 
  }
}
module.exports = PersonWebAdapter