let express = require('express')
let router = express.Router()
const AccountController =  require('../app/account/infra/web/account_controller')

router.get('/people/:cpf/accounts', AccountController.getPersonAccounts)
router.get('/companies/:companyId/accounts', AccountController.getCompanyAccounts)
router.post('/people/:cpf/accounts', AccountController.createToPerson)
router.post('/companies/:companyId/accounts', AccountController.createToCompany)
router.delete('/accounts/:id', AccountController.deactivate)
module.exports = router
