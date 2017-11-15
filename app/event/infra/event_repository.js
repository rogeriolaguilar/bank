const knex = require("knex")(require("../../../knexfile")[process.env.NODE_ENV])
const Errors = require('../../errors')

const PG_CONFLICT_ERROR = '23505'

class EventRepository {

  save(event) {
    return knex('events').insert({
      
      type: event.name,      
      occurred_at: event.occurred_at

    }).catch((e) => {
      console.log(`EventRepository error code:'${e.code}, event:${JSON.parse(event)}`)
      if (e.code.includes(PG_CONFLICT_ERROR)) {
        throw new Errors.ConflictError('Already registered')
      }
      //retry to persist
      console.log(e.stack)
    })
  }
}

module.exports = EventRepository
