const models = require('../../db/models');
const card = require ('./cards.js');
const lifecycle = require ('./lifecycle.js');


module.exports.create = (req, res) => {
  var data = req;
  return models.Company.forge({
    name: req.body.job.company,
    industry: null,
    logo_url: null,
    linkedin_url: null,
    description: null,
    location_id: null
  })
    .save()
    .then(result => {
      card.create(req, res, result);
      res.sendStatus(201);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
