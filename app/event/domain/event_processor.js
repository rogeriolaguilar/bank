class EventProcessor {
  constructor(eventRepository) {
    this._eventRepository = eventRepository
  }

  process(event) {
    return event.process()
      .then((r) => { 
        this._eventRepository.save(event) 
        return r
      })
  }
}
module.exports = EventProcessor