const PersonRequester = require('../domain/person/person_requester')
const PersonCreator = require('../domain/person/person_creator')
const Person = require('../domain/person/person')

class PersonWebAdapter {
  constructor(publicationStrategy = (r) => {return r}) {
    this._publicationStrategy = publicationStrategy
  }

  getPerson(cpf) {
    let person = new PersonRequester().getPerson(cpf)
    return this._publicationStrategy({ cpf: person.cpf, name: person.name, birthday: person.birthday })
  }

  createPerson(person_params){
    let person = new Person(person_params)
    return new PersonCreator().createPerson(person)
  }
}
module.exports = PersonWebAdapter