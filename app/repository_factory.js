const PostgresqlPersonRepository = require('./person/infra/repository/postgresql_person_repository');
const TestPersonRepository = require('./person/infra/repository/test_person_repository')
const EventRepository = require('./event/infra/event_repository')
const AccountRepository = require('./account/infra/repository/account_repository')
const TransactionRepository = require('./transaction/infra/repository/transaction_repository')
const DB_CONFIG = require("../knexfile")

const isSQLite = (env) => {
  const DB_CLIENT = DB_CONFIG[env].client
  console.log(`DB client ${DB_CLIENT}`)
  return DB_CLIENT === 'sqlite3'
}

class RepositoryFactory {

  static personRepository(env = process.env.NODE_ENV) {
    if (isSQLite(env)) {
      return new TestPersonRepository()
    }
    return new PostgresqlPersonRepository()
  }

  static eventRepository() {
    return new EventRepository()
  }

  static accountRepository() {
    return new AccountRepository()
  }


  static transactionRepository() {
    return new TransactionRepository()
  }
}
module.exports = RepositoryFactory