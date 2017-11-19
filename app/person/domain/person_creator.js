const EventProcessor = require('../../event/domain/event_processor');
const Person = require('./person');
const PersonCreationEvent = require('../../event/domain/person_creation_event');


class PersonCreator {
  constructor(personRepository, eventRepository) {
    this._repository = personRepository
    this._eventProcessor = new EventProcessor(eventRepository)
  }

  create(personParams) {
    let person = new Person(personParams, this._repository)
    return this._eventProcessor.process(new PersonCreationEvent(person))
  }
}
module.exports = PersonCreator