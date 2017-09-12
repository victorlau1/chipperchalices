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
  models.Card.forge({
    position: req.body.job.title,
    position_url: req.body.job.url,
    description: null,
    notes: req.body.job.notes,
    company_id: company.id,
    user_id: req.user.id,
    recruiter_name: req.body.job.recruiter_name,
    recruiter_email: req.body.job.recruiter_email
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
          // TODO: location: company.location_id
          location: 'San Francisco, CA'
        },
        position: result.attributes.position,
        positionUrl: result.attributes.position_url,
        currentStatus: req.body.status.status,
        statusDate: req.body.status.date,
        notes: result.attributes.notes,
        recruiterName: result.attributes.recruiter_name,
        recruiterEmail: result.attributes.recruiter_name,
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