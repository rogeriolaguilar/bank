const PersonRequester = require('../../../../person/domain/person_requester')
const WebErrors = require('../../../../web_errors')
const RepositoryFactory = require('../../../../repository_factory')
const PersonCreator = require('../../../domain/person_creator');

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

  constructor(eventRepository = RepositoryFactory.eventRepository(), personRepository = RepositoryFactory.personRepository()) {
    this._personCreator = new PersonCreator(personRepository, eventRepository)
  }

  create(params) {
    return this._personCreator.create(params).catch((e) => {
      console.log(`PersonWebAdapter.create error code: ${e.code}, message: ${e.message}, params: ${params.cpf}`)
      if (e.code == 'CONFLICT') {
        throw new WebErrors.WebConflictError('Person already registered.')
      }
      throw new WebErrors.InternalServerError(e.message)
    })
  }
}

module.exports = {
  GetPerson: GetPerson,
  CreatePerson: CreatePerson
}