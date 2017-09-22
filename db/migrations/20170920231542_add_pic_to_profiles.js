
exports.up = function(knex, Promise) {
  return knex.schema.table('profiles', function(table) {
    table.string('photo_url', 100).defaultTo('https://i.imgur.com/EqJAHWF.png?1');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('profiles', function(table) {
    table.dropColumn('photo_url');
  });
};
