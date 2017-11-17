const knex = require("knex")(require("../../../../knexfile")[process.env.NODE_ENV])
const Errors = require('../../../errors')
const PG_CONFLICT_ERROR = '23505'
const Person = require('../../domain/person');



class PersonRepository {
  get(cpf) {
    this.getPerson(cpf)
      .then((params) => {
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

  save(person) {
    return knex('people').insert({
      name: person.name,
      cpf: person.cpf,
      birthday: person.birthday
    }).catch((e) => {
      console.log(`PersonRepository error code:${e.code} person cpf:${person.cpf}`)
      if (e.code == PG_CONFLICT_ERROR) {
        throw new Errors.ConflictError('Person already registered')
      }
      console.log(`PersonRepository person cpf:${person.cpf}: ${e.stack}`)
      throw new Errors.GenericError('Failed to save Person')
    })
  }
}

module.exports = PersonRepository
