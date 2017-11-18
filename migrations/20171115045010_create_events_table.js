
exports.up = function (knex) {
  let schema = knex.schema.createTableIfNotExists('events', function (table) {
    table.bigIncrements('id').primary()
    table.jsonb('payload').notNullable()
    table.enum('type', [
      'person_creation',
      'company_creation',
      'account_creation',
      'deposit',
      'withdraw'
    ])
    table.timestamps(false, true)
  });

  console.log(schema.toString());
  return schema;
};

exports.down = function (knex) {
  return knex.schema.dropTable('events');
};
