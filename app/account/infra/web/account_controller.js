const AccountWebAdapter = require('./adapter/account_web_adapter')

class AccountController {

  static getPersonAccounts(req, res) {
    new AccountWebAdapter.GetPersonAccount()
      .get(req)
      .then((accounts) => {
        res.status(200).json(accounts)
      }).catch((e) => {
        console.error(e.message)
        res.status(e.code).json({ message: e.message })
      })
  }

  static createToPerson(req, res) {
    new AccountWebAdapter.CreatePersonAccount()
      .create(req)
      .then((account) => {
        res.status(201).json({ number: account.number })
      }).catch((e) => {
        console.error(e.message)
        res.status(e.code).json({ message: e.message })
      })
  }

  static getCompanyAccounts(req, res) { res.json({ id: "dummy-dummy-dummy-dummy", number: 12345, status: 'activated', ownerId: req.params.companyId }) }
  static createToCompany(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) }
  static deactivate(req, res) { res.status(204).send() }

}
module.exports = AccountController
