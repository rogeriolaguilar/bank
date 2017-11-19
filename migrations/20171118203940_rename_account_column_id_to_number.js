
exports.up = function (knex) {
  return knex.schema.table('accounts', function (t) {
    t.renameColumn('id', 'number');
  });
};

exports.down = function (knex) {
  return knex.schema.table('accounts', function (t) {
    t.renameColumn('number', 'id');
  });
};
