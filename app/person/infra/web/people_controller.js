const PersonWebAdapter = require('./adapter/person_web_adapter')

class PeopleController {

  static get(req, res) {
    new PersonWebAdapter.GetPerson()
      .get(req.params.cpf)
      .then((person) => {
        res.json(person)
      }).catch((e) => {
        console.error(e.message)
        res.status(e.code).json({ message: e.message })
      })
  }

  static create(req, res) {
    new PersonWebAdapter.CreatePerson()
      .create(req.body)
      .then(() => {
        res.status(201).json()
      }).catch((e) => {
        console.error(e.message)
        res.status(e.code).json({ message: e.message })
      })
  }

  static update(req, res) { res.status(204).send() }
  static delete(req, res) { res.status(204).send() }
}
module.exports = PeopleController
