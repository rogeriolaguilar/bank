
exports.up = function (knex, Promise) {
  let schema = knex.schema.createTableIfNotExists('people', function (table) {
    table.bigIncrements('id').primary()
    table.uuid('uuid').notNullable()
    table.string('name').notNullable()
    table.date('birthday').notNullable()
    table.unique(['uuid'])
    table.index(['uuid'])
  });

  console.log(schema.toString());
  return schema;
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('people', function (table) {
    table.dropIndex(['uuid'])
  });
}
