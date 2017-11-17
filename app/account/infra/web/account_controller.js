const AccountWebAdapter = require('./adapter/account_web_adapter')

class AccountController {

  static getPersonAccounts(req, res) { res.json({ id: "dummy-dummy-dummy-dummy", number: 12345, status: 'activated', ownerId: req.params.cpf, ownerType: 'person' }) }
  static getCompanyAccounts(req, res) { res.json({ id: "dummy-dummy-dummy-dummy", number: 12345, status: 'activated', ownerId: req.params.companyId }) }

  static createToPerson(req, res){
    let adapter = new AccountWebAdapter.CreatePersonAccount()

    adapter.create({cpf: req.params.cpf, amount: req.body.amount})
      .then((accountNumber) => {
        res.status(201).json({ id: accountNumber})
      })
      .catch((e) => {
        console.error(e.message)
        res.status(e.code).json({ message: e.message })
      })
  }

  static createToCompany(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) }
  static deactivate(req, res) { res.status(204).send() }

}
module.exports = AccountController
