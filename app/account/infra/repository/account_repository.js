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
    return knex('accounts').insert({
      owner_id: account.owner_id,
      owner_type: account.owner_type,
      balance: account.balance
    }).catch((e) => {
      console.log(`AccountRepository error code:${e.code} account to owner:${account.owner_id}: ${e.stack}`)
      throw new Errors.GenericError('fail to save Account')
    })
  }
}

module.exports = AccountRepository
