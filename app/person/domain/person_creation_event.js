class PersonCreationEvent{
  constructor(person, occurredAt = new Date()){
    this._occurredAt = occurredAt
    this._person = person
  }

  process(){
    return this._person.handleCreation(this)
  }

  reverse(){
    return this._person.reverseCreation(this)
  }

  get person(){
    return this._person
  }

  get occurredAt(){
    return this._occurredAt
  }
}
module.exports = PersonCreationEvent