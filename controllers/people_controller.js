const PersonWebAdapter = require('../infrastructure/person_web_adapter')

class PeopleController {

  static get(req, res) {
    new PersonWebAdapter.GetPerson()
      .get(req.params.cpf)
      .then((person) => {
        res.json({ cpf: person.cpf, name: person.name, birthday: person.birthday })
      })
      .catch((e) => {
        console.error(e.message)
        res.status(e.code).json({ message: e.message })
      })
  }

  static create(req, res) {
    let adapter = new PersonWebAdapter.CreatePerson()

    adapter.create(req.body)
      .then(() => {
        res.status(201).json()
      })
      .catch((e) => {
        console.error(e.message)
        res.status(e.code).json({ message: e.message })
      })
  }

  static update(req, res) { res.status(204).send() }
  static delete(req, res) { res.status(204).send() }
}
module.exports = PeopleController
