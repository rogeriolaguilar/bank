const knex = require("knex")(require("../../../../knexfile")[process.env.NODE_ENV])
const Errors = require('../../../errors')
const Account = require('../../domain/account');


class AccountRepository {
  get(accountNumber) {
    return knex.select()
      .from('accounts')
      .where({ number: accountNumber })
      .then((accounts) => {
        if (accounts.length == 0) {
          throw new Errors.NotFoundError('Account could not be found')
        }
        return new Account(accounts[0], this)
      })
  }

  getByOwner(owner) {
    return knex.select()
      .from('accounts')
      .where({ owner_id: owner.id, owner_type: owner.type })
      .then((accounts) => {
        if (accounts.length == 0) {
          return []
        }
        console.log(">>>>>acounts" + JSON.stringify(accounts))
        return accounts
      })
  }

  save(account) {
    return knex('accounts')
      .returning('number')
      .insert({
        owner_id: account.owner.id,
        owner_type: account.owner.type,
        balance: account.balance
      }).then((results) => {
        account.number = results[0]
        return account
      }).catch((e) => {
        console.log(`AccountRepository error code:${e.code} owner: ${account.owner.cpf}: ${e.stack}`)
        throw new Errors.GenericError('Fail while saving Account')
      })
  }

  update_balance(account) {
    return knex('accounts')
      .where({ number: account.number })
      .update({
        balance: account.balance
      }).catch((e) => {
        console.log(`AccountRepository error code:${e.code}: ${e.stack}`)
        throw new Errors.GenericError('Fail while updating Account')
      })

  }
}

module.exports = AccountRepository
