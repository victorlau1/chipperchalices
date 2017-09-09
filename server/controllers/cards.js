const models = require('../../db/models');
const lifecycle = require ('./lifecycle.js');

//ping db for all card info
module.exports.getAll = (req, res) => {
  console.log('getall is working')
  return models.Card.fetchAll()
  //({withRelated: ['companies']})
  // .then(card) => {
  //   console.log('card related', card.related('companies'));
  // }
  .then(cards => {
    res.send(cards);

  })
  .catch(err => {
    res.status(503).send(err);
  })
  // models.Card.fetchAll()
  //   .then(cards => {
  //     res.status(200).send(cards);
  //   })
  //   .catch(err => {
  //     res.status(503).send(err);
  //   });
};

module.exports.create = (req, res, company) => {
  models.Card.forge({
    position: req.body.job.title,
    position_url: req.body.job.url,
    description: null,
    notes: req.body.job.notes,
    company_id: company.id,
    user_id: req.user.id,
    // recruiter_id:
    // recruiter_email:
  })
    .save()
    .then(result => {

      var card = {
        id: result.id,
        company: {
          id: company.id,
          name: company.attributes.name,
          industry: company.attributes.industry,
          logoUrl: company.attributes.logo_url,
          companyUrl: company.attributes.company_url,
          description: company.attributes.description,
          // location: company.location_id
          location: 'San Francisco, CA'
        },
        position: result.attributes.position,
        positionUrl: result.attributes.position_url,
        currentStatus: req.body.status.status,
        statusDate: req.body.status.date,
        notes: result.attributes.notes,
        // recruiterName:
        // recruiterEmail:
      };
      res.status(201).send(card);
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