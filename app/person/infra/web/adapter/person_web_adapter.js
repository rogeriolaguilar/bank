const PersonRequester = require('../../../../person/domain/person_requester')
const PersonCreator = require('../../../../person/domain/person_creator')
const Person = require('../../../../person/domain/person')
const WebErrors = require('./web_errors')


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

  constructor(domainPort = new PersonCreator()) {
    this._domainPort = domainPort
  }

  create(params) {
    let person = new Person(params)
    return new PersonCreator()
      .createPerson(person)
      .catch((e) => {
        console.log(`PersonWebAdapter.create error code: ${e.code}, message: ${e.message}, params: ${params.cpf}`)
        if (e.code == 'CONFLICT') {
          throw new WebErrors.WebConflictError('Person already registered.')
        }
      })
  }
}

module.exports = {
  GetPerson: GetPerson,
  CreatePerson: CreatePerson
}