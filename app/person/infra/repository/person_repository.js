const knex = require("knex")(require("../../../../knexfile")[process.env.NODE_ENV])
const Errors = require('../../../errors')
const PG_CONFLICT_ERROR = '23505'

class PersonRepository {
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
      throw new Errors.GenericError('Failed to save Person')
    })
  }
}

module.exports = PersonRepository
