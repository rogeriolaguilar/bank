const knex = require("knex")(require("../../../../knexfile")[process.env.NODE_ENV])
const Errors = require('../../../errors')

class AccountRepository {
  getByOwner(owner) {
    return knex.select()
      .from('accounts')
      .where({ owner_id: owner.id, owner_type: owner.type })
      .then((accounts) => {
        if (accounts.length == 0) {
          return null
        }
        return accounts
      })
  }

  save(account) {
    return knex('accounts')
    .returning(['id'])
    .insert({
      owner_id: account.owner.id,
      owner_type: account.owner.type,
      balance: account.balance
    }).then((results)=>{
      account.number = results[0].id || results[0]
      return account 
    }).catch((e) => {
      console.log(`AccountRepository error code:${e.code} owner: ${account.owner.cpf}: ${e.stack}`)
      throw new Errors.GenericError('Fail while saving Account')
    })
  }
}

module.exports = AccountRepository
