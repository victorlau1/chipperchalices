
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('user_count', function(table) {
      table.increments('id').unsigned().primary();
      table.dateTime('date');
      table.bigInteger('user_count');
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('job_count', function(table) {
      table.increments('id').unsigned().primary();
      table.dateTime('date');
      table.bigInteger('job_count');
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('company_count', function(table) {
      table.increments('id').unsigned().primary();
      table.dateTime('date');
      table.bigInteger('company_count');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_count'),
    knex.schema.dropTable('job_count'),
    knex.schema.dropTable('company_count')
  ]);
};
