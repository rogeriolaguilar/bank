const PersonRepository = require('./person/infra/repository/person_repository')
const TestPersonRepository = require('./person/infra/repository/test_person_repository')
const EventRepository = require('./event/infra/event_repository')
const AccountRepository = require('./account/infra/repository/account_repository')

const ENVS_USING_MEMORY_DB = ['test', 'development']
const DEFAULT_ENV = process.env.NODE_ENV

const isTest = (env) => {
  return ENVS_USING_MEMORY_DB.includes(env.toLowerCase())
}

class RepositoryFactory {

  static personRepository(env = DEFAULT_ENV) {
    if (isTest(env)) {
      return new TestPersonRepository()
    }
    return new PersonRepository()
  }

  static eventRepository() {
    return new EventRepository()
  }

  static accountRepository() {
    return new AccountRepository()
  }
  
}
module.exports = RepositoryFactory