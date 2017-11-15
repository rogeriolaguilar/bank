const RepositoryFactory = require('../../repository_factory')
const Person = require('./person');


class PersonRequester {
  //left hexagonal port

  constructor(personRepository = RepositoryFactory.personRepository()) {
    this._repository = personRepository
  }

  getPerson(cpf) {
    return this._repository.getPerson(cpf)
  }

  getPersonObject(cpf) {
    return this.getPerson(cpf).then((params) => {
      return new Person(params, this._personRepository)
    })
  }
}
module.exports = PersonRequester  