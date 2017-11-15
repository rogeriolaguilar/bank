class PersonCreationEvent {
  constructor(person) {
    this._person = person
    this._type = 'person_creation'
    this.createdAt = new Date()
  }

  process() {
    return this._person.handleCreation(this)
  }

  reverse() {
    return this._person.reverseCreation(this)
  }

  get person() {
    return this._person
  }

  get type() {
    return this._type
  }

  get payload() {
    return this._person.toJson()
  }
}
module.exports = PersonCreationEvent