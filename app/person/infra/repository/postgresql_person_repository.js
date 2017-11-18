const Errors = require('../../../errors')
const PersonRepository = require('./person_repository');

const PG_CONFLICT_ERROR = '23505'

class PostgresPersonRepository extends PersonRepository {

  save(person) {
    return super.save(person).catch((e) => {
      console.log(`PostgresPersonRepository error code:${e.code} person cpf:${person.cpf}`)
      if (e.code == PG_CONFLICT_ERROR) {
        throw new Errors.ConflictError('Person already registered')
      }
      console.log(`PostgresPersonRepository person cpf:${person.cpf}: ${e.stack}`)
      throw new Errors.GenericError('Failed to save Person')
    })
  }
}

module.exports = PostgresPersonRepository
