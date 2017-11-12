exports.up = function (knex) {
  let schema = knex.schema.createTableIfNotExists('people', function (table) {
    table.bigIncrements('id').primary()
    table.string('cpf').notNullable()
    table.string('name').notNullable()
    table.date('birthday').notNullable()
    table.timestamps(false, true)
    table.unique('cpf')
  });

  // eslint-disable-next-line no-console
  console.log(schema.toString());
  return schema;
}

exports.down = function (knex) {
  return knex.schema.dropTable('people', function (table) {
    table.dropIndex(['cpf'])
  });
}
