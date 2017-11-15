const RepositoryFactory = require('../../infrastructure/repository_factory')

class PersonRequester {
  //left hexagonal port
  
    constructor(personRepository = RepositoryFactory.personRepository()) {
      this._repository = personRepository
    }
  
    getPerson(cpf) {
      return this._repository.getPerson(cpf)
    }
  }
module.exports = PersonRequester  