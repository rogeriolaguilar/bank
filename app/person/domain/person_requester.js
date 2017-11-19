class PersonRequester {
  //left hexagonal port
  constructor(personRepository) {
    this._repository = personRepository
  }

  getPerson(cpf) {
    return this._repository.getPerson(cpf)
  }
}
module.exports = PersonRequester  