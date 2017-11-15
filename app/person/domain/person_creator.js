const RepositoryFactory = require('../../repository_factory')

class PersonCreator {
  //left hexagonal port
  constructor(personReporitory = RepositoryFactory.personRepository()){
    this._repository = personReporitory
  }

  createPerson(person){
    return this._repository.save(person)
  }

}
module.exports = PersonCreator  