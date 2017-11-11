const PersonWebAdapter = require('../infrastructure/person_web_adapter')

class PeopleController {
  
  static get(req, res) {
    let adapter = new PersonWebAdapter()
    res.json(adapter.getPerson(req.params.cpf))
  }

  static create(req, res) { res.status(201).json({ cpf: "77777777777" }) }
  static update(req, res) { res.status(204).send() }
  static delete(req, res) { res.status(204).send() }
}
module.exports = PeopleController
