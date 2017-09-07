const models = require('../../db/models');
const card = require ('./cards.js');
const lifecycle = require ('./lifecycle.js');

models.Company.findOrCreate = function(req, res) {
  var cloned = new models.Company({        
    name: req.body.job.company,
    industry: null,
    logo_url: null,
    linkedin_url: null,
    description: null,
    location_id: null
  });
  return cloned.fetch()
    .then(function(result, err) {
      if (result === null){  console.log('hello'); return cloned.save(); }
      return result;
    })
    .then(result => {
      card.create(req, res, result);
      res.sendStatus(201);    
    })
    .catch(err => {
      res.status(500).send(err);
    });
};


module.exports.create = (req, res) => {
  return models.Company.findOrCreate(req, res);
};

