const knex = require("knex")(require("../../../../knexfile")[process.env.NODE_ENV])
const Person = require('../../domain/person');

class PersonRepository {
  get(cpf) {
    return this.getPerson(cpf)
      .then((params) => {
        if (params === null) {
          return null
        }
        return new Person(params, this._personRepository)
      })
  }

  getPerson(cpf) {
    return knex.select()
      .from('people')
      .where('cpf', cpf)
      .then((people) => {
        if (people.length == 0) {
          return null
        }
        return people[0]
      })
  }
}

module.exports = PersonRepository
