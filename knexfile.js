module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      user: 'bank',
      password: 'bank',
      database: 'db_bank'
    },
    pool: {
      min: 1,
      max: 20
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};