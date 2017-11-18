
exports.up = function(knex) {
  let schema = knex.schema.createTableIfNotExists('transactions', function (table) {
    table.bigIncrements('id').primary()
    table.enum('type', ['deposit','withdraw']).notNullable()
    table.bigInteger('amount').notNullable()
    table.bigInteger('account_number').notNullable()
    table.timestamps(false, true)
  });

  console.log(schema.toString());
  return schema;
};

exports.down = function(knex) {
  return knex.schema.dropTable('transactions');
};
