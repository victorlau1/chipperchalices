
exports.up = function(knex, Promise) {
  return knex.schema.table('profiles', function(table) {
    table.string('photo_url', 100).notNullable().defaultTo('https://i.imgur.com/EqJAHWF.jpg');
  });
};

exports.down = function(knex, Promise) {

};
