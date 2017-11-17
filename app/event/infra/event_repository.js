const knex = require("knex")(require("../../../knexfile")[process.env.NODE_ENV])

class EventRepository {

  save(event) {
    knex('events').insert({
      type: event.type,
      created_at: event.createdAt,
      payload: JSON.stringify(event.payload)
    }).catch((e) => {
      console.log(`EventRepository error code:'${e.code}, ${e.stack}`)
    })
  }
}
module.exports = EventRepository
