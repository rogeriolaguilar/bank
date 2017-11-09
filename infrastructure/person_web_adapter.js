class PersonWebAPIAdapter {
  constructor(personDomainPort, publicationStrategy = JSON.stringify) {
    this._personDomainPort = personDomainPort
    this._publicationStrategy = publicationStrategy
  }

  getPerson(cpf) {
    person = this._personDomainPort.getPerson(cpf)
    return this._publicationStrategy({ name: person.name, birthday: person.birthday })
  }
}
module.exports = PersonWebAPIAdapter