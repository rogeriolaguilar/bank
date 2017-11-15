const PersonRequester = require('../../../../person/domain/person_requester')
const PersonCreator = require('../../../../person/domain/person_creator')
const Person = require('../../../../person/domain/person')
const WebErrors = require('./web_errors')
const RepositoryFactory = require('../../../../repository_factory')
const EventProcessor = require('../../../../event/domain/event_processor')
const PersonCreationEvent = require('../../../domain/person_creation_event')

class GetPerson {

  constructor(domainPort = new PersonRequester()) {
    this._domainPort = domainPort
  }

  get(cpf) {
    return this._domainPort.getPerson(cpf)
      .then((person) => {
        if (person === null) {
          throw new WebErrors.NotFoundError('Person not found.')
        }
        return person
      })
  }
}

class CreatePerson {

  constructor(
    domainPort = new PersonCreator(),
    repository = RepositoryFactory.personRepository(),
    eventRepository = RepositoryFactory.eventRepository()
  ) {
    this._domainPort = domainPort
    this._repository = repository
    this._eventRepository = eventRepository
  }

  create(params) {
    let person = new Person(params, this._repository)
    
    return new EventProcessor(this._eventRepository).process(new PersonCreationEvent(person))
      .catch((e) => {
        console.log(`PersonWebAdapter.create error code: ${e.code}, message: ${e.message}, params: ${params.cpf}`)
        if (e.code == 'CONFLICT') {
          throw new WebErrors.WebConflictError('Person already registered.')
        }
        throw e
      })
  }
}

module.exports = {
  GetPerson: GetPerson,
  CreatePerson: CreatePerson
}