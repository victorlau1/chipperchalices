
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('cards', function (table) {
      table.increments('id').unsigned().primary();
      table.string('position', 100).nullable();
      table.string('position_url', 100).nullable();
      table.string('description', 500).nullable();
      table.string('notes', 500).nullable();
      table.bigInteger('company_id').unsigned().index().references('id').inTable('companies');
      table.bigInteger('user_id').unsigned().index().references('id').inTable('profiles');
    }),
    knex.schema.createTableIfNotExists('location', function (table) {
      table.increments('id').unsigned().primary();
      table.string('street', 255).nullable();
      table.string('street_2', 255).nullable();
      table.string('city', 255);
      table.string('state', 255).nullable();
      table.bigInteger('zipcode').nullable();
      table.string('country', 255);
      table.string('country_iso_code');
    }),
    knex.schema.createTableIfNotExists('companies', function (table) {
      table.increments('id').unsigned().primary();
      table.string('name', 100).index();
      table.string('industry', 100).nullable();
      table.string('logo_url', 255).nullable();
      table.string('linkedin_url', 255).nullable();
      table.string('description', 500).nullable();
      table.bigInteger('location_id').unsigned().index().references('id').inTable('location').nullable();
    }),
    knex.schema.createTableIfNotExists('news', function (table) {
      table.increments('id').unsigned().primary();
      table.string('news_date', 100).nullable();
      table.string('news_link', 250);
      table.bigInteger('company_id').unsigned().index().references('id').inTable('companies').nullable();
      table.bigInteger('news_company_id').unsigned().index().references('id').inTable('companies').nullable();
    }),
    knex.schema.createTableIfNotExists('lifecycle', function (table) {
      table.increments('id').unsigned( ).primary();
      table.string('status', 100).index().nullable();
      table.string('status_start_date', 100).nullable();
      table.bigInteger('card_id').unsigned().index().references('id').inTable('cards');
    }),
    knex.schema.createTableIfNotExists('interaction', function(table) {
      table.increments('id').unsigned().primary();
      table.string('interaction_type', 250).index();
      table.string('interaction_date').index();
      table.bigInteger('status_id').unsigned().references('id').inTable('lifecycle');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw('DROP TABLE posts CASCADE'),
    knex.raw('DROP TABLE location CASCADE'),
    knex.raw('DROP TABLE companies CASCADE'),
    knex.raw('DROP TABLE news CASCADE'),
    knex.raw('DROP TABLE lifecycle CASCADE'),
    knex.raw('DROP TABLE interaction CASCADE')
  ]);
};
