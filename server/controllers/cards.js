const models = require('../../db/models');
const lifecycle = require ('./lifecycle.js');

module.exports.getAll = (req, res) => {
  models.Card.fetchAll()
    .then(cards => {
      res.status(200).send(cards);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.create = (req, res, company) => {
  console.log('in card', req.body, company);
  models.Card.forge({
    position: req.body.job.title,
    position_url: null,
    description: null,
    notes: null,
    company_id: company.id,
    user_id: req.user.id
  })
    .save()
    .then(result => {
      lifecycle.create(req, res, result);
      console.log('card saved');
    })
    .catch(err => {
      console.log('card err', err);
    });
};

module.exports.update = (req, res) => {
  models.Card.where({ id: req.params.id }).fetch()
    .then(card => {
      if (!profile) {
        throw profile;
      }
      return card.save(req.body, { method: 'update' });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};