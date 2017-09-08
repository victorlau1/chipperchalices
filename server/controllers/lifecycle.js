const models = require('../../db/models');

module.exports.create = (req, res, card) => {
  models.Lifecycle.forge({
    status: req.body.status.status,
    status_start_date: req.body.status.date,
    card_id: card.id
  })
    .save()
    .then(result => {
      console.log('lifecycle saved');
    })
    .catch(err => {
      console.log(err);
    });
};