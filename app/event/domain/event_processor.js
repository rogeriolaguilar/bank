class EventProcessor {
  constructor(eventRepository){
    this._eventRepository = eventRepository
  }

 process(event){
    event.process()
    this._eventRepository.save(event)
  }
}
module.exports = EventProcessor