const PersonWebAdapter = require('../infrastructure/person_web_adapter')

class PeopleController {

  static get(req, res) {
    let adapter = new PersonWebAdapter()
    res.json(adapter.getPerson(req.params.cpf))
  }

  static create(req, res) {
    let adapter = new PersonWebAdapter()

    adapter.createPerson(req.body)
      .then(() => {
        res.json()
      })
      .catch(function (error) {
        console.error(error.message)
        res.status(409).json({ message: 'Duplicated user' })
      })
  }

  static update(req, res) { res.status(204).send() }
  static delete(req, res) { res.status(204).send() }
}
module.exports = PeopleController
