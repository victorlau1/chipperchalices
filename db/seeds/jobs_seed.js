const models = require('../models');

exports.seed = function (knex, Promise) {

  return models.Card.where({ }).fetch()
    .then((card) => {

    })






};