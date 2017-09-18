const models = require('../../db/models');
const values = [

];
const knex = require('knex')(require('../../knexfile'));
console.log(knex);

const dataUsers = (req, res) => {
  knex('profiles').count('email').groupby('')
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(503).send(err);
    });
  // var sql = '';
  // knex.raw('', values);
};

const dataJobs = () => {
  models.count()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(503).send(err);
    });
  var sql = '';
};

const dataStatus = () => {
  var sql = '';
};

module.exports = {
  dataUsers: dataUsers,
  dataJobs: dataJobs,
  dataStatus: dataStatus  
};