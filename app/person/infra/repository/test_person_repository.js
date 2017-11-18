const Errors = require('../../../errors')
const PersonRepository = require('./person_repository');

const SQLITE_CONFLICT_ERROR = 'SQLITE_CONSTRAINT'

//rigth port 
class TestPersonRepository extends PersonRepository {

  save(person) {
    return super.save(person).catch((e) => {
      console.log(`TestPersonRepository error code:'${e.code}, cpf:${person.cpf}`)
      if (e.code.includes(SQLITE_CONFLICT_ERROR)) {
        throw new Errors.ConflictError('Person already registered')
      }
      throw new Errors.ConflictErrorGenericError('Failed to save Person')
    })
  }
}

module.exports = TestPersonRepository
