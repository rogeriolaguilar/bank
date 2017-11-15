
exports.up = function (knex) {
  let schema = knex.schema.createTableIfNotExists('accounts', function (table) {
    table.bigIncrements('id').primary()
    table.string('owner_id').notNullable()
    table.enum('owner_type', ['person','company']).notNullable()
    table.bigInteger('balance').notNullable()
    table.timestamps(false, true)
  });

  console.log(schema.toString());
  return schema;
};

exports.down = function (knex) {
  return knex.schema.dropTable('accounts');
};
