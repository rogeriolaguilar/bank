let express = require('express')
let router = express.Router()

const AccountsHandler = {
  getPersonAccounts(req, res) { res.json({ id: "dummy-dummy-dummy-dummy", number: 12345, status: 'activated', ownerId: req.params.personId }) },
  getCompanyAccounts(req, res) { res.json({ id: "dummy-dummy-dummy-dummy", number: 12345, status: 'activated', ownerId: req.params.companyId }) },
  createToPerson(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) },
  createToCompany(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) },
  deactivate(req, res) { res.status(204).send() }
}

router.get('/people/:personId/accounts', AccountsHandler.getPersonAccounts)
router.get('/companies/:companyId/accounts', AccountsHandler.getCompanyAccounts)
router.post('/people/:personId/accounts', AccountsHandler.createToPerson)
router.post('/companies/:companyId/accounts', AccountsHandler.createToPerson)
router.delete('/accounts/:id', AccountsHandler.deactivate)

module.exports = router
