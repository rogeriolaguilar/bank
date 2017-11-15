const knex = require("knex")(require("../../../knexfile")[process.env.NODE_ENV])
const Errors = require('../../errors')

const SQLITE_CONFLICT_ERROR = 'SQLITE_CONSTRAINT'

//rigth port 
class TestEventRepository {

  save(event) {
    return knex('events').insert({
      
      type: event.name,      
      occurred_at: event.occurred_at

    }).catch((e) => {
      console.log(`TestEventRepository error code:'${e.code}, event:${JSON.parse(event)}`)
      if (e.code.includes(SQLITE_CONFLICT_ERROR)) {
        throw new Errors.ConflictError('Already registered')
      }
      //retry to persist
      console.log(e.stack)
    })
  }
}

module.exports = TestEventRepository
