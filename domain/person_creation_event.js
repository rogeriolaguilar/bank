class PersonCreationEvent{
  constructor(person, occurredAt = new Date()){
    this._occurredAt = occurredAt
    this._person = person
  }

  process(){
    this._person.handleCreation(this)
  }

  reverse(){
    this._person.reverseCreation(this)
  }

  get account(){
    return this._person
  }

  get occurredAt(){
    return this._occurredAt
  }
}
module.exports = PersonCreationEvent