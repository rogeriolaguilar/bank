PersonRequester = require('../domain/person/person_requester')

class PersonWebAPIAdapter {
  constructor(personDomainPort = new PersonRequester(), publicationStrategy = (r) => {return r}) {
    this._personDomainPort = personDomainPort
    this._publicationStrategy = publicationStrategy
  }

  getPerson(cpf) {
    let person = this._personDomainPort.getPerson(cpf)
    return this._publicationStrategy({ cpf: person.cpf, name: person.name, birthday: person.birthday })
  }
}
module.exports = PersonWebAPIAdapter