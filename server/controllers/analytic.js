const models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

const dataUsers = (req, res) => {
  knex('profiles').select(knex.raw('current_date as "date"')).count('email as user_count').groupBy(knex.raw('current_date'))
    .then(result => {
      return knex('user_count').insert(result).returning('id');
    })
    .then(result => {
      return knex('user_count').select('date', 'user_count').whereBetween('date', [knex.raw('current_timestamp - Interval \'4 day\''), knex.fn.now()] ).groupBy('date', 'user_count').orderByRaw('date asc').limit(6);
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

const dataJobs = (req, res) => {
  knex('cards').select(knex.raw('current_date as date')).count('id as job_count').groupBy(knex.raw('current_date'))
    .then(result => {
      return knex('job_count').insert(result);
    })
    .then(result => {
      return knex('job_count').select('date', 'job_count').whereBetween('date', [knex.raw('current_timestamp - Interval \'4 day\''), knex.fn.now()] ).groupBy('date', 'job_count').orderByRaw('date asc').limit(6);
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

const dataStatus = (req, res) => {
  knex('lifecycle').select(knex.raw('current_date, status')).count('id as status_count').groupBy(knex.raw('current_date, status'))
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

const dataCycles = (req, res) => {
  var sql = 'Select a.days as "I-A", b.days as "A-IS" , c.days as "IS-I" from (SELECT COALESCE(ROUND(AVG(to_date(b.status_start_date, \'YYYY-MM-DD\') - to_date(a.status_start_date, \'YYYY-MM-DD\')),2),0) as "days" FROM lifecycle a JOIN lifecycle b ON a.card_id = b.card_id WHERE a.status = \'Interested\' and b.status = \'Applied\') as a,(SELECT  COALESCE(ROUND(AVG(to_date(b.status_start_date, \'YYYY-MM-DD\') - to_date(a.status_start_date, \'YYYY-MM-DD\')),2),0) as "days" FROM lifecycle a JOIN lifecycle b ON a.card_id = b.card_id WHERE a.status = \'Applied\' and b.status = \'Interview Scheduled\') as b,(SELECT  COALESCE(ROUND(AVG(to_date(b.status_start_date, \'YYYY-MM-DD\') - to_date(a.status_start_date, \'YYYY-MM-DD\')),2),0) as "days" FROM lifecycle a JOIN lifecycle b ON a.card_id = b.card_id WHERE a.status = \'Interview Scheduled\' and b.status = \'Interviewed\') as c';
  knex.raw(sql)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

const dataCompanies = (req, res) => {
  knex('companies').select(knex.raw('current_date as date')).count('id as company_count').groupBy(knex.raw('current_date')).orderBy(knex.raw('current_date'))
    .then(result => {
      return knex('company_count').insert(result);
    })
    .then(result => {
      return knex('company_count').select('date', 'company_count').whereBetween('date', [knex.raw('current_timestamp - Interval \'4 day\''), knex.fn.now()] ).groupBy('date', 'company_count').orderByRaw('date asc').limit(6);
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports = {
  dataUsers: dataUsers,
  dataJobs: dataJobs,
  dataStatus: dataStatus,
  dataCycles: dataCycles,
  dataCompanies: dataCompanies
};