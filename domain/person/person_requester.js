const PersonRepository = require('./person_repository') 

class PersonRequester {
  //left hexagonal port
  
    constructor(personRepository = new PersonRepository()) {
      this._repository = personRepository
    }
  
    getPerson(cpf) {
      return this._repository.getPerson(cpf)
    }
  }
module.exports = PersonRequester  