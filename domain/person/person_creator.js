const PersonRepository = require('../../infrastructure/person_repository')

class PersonCreator {
  //left hexagonal port
  constructor(personReporitory = new PersonRepository()){
    this._repository = personReporitory
  }

  createPerson(person){
    return this._repository.save(person)
  }

}
module.exports = PersonCreator  