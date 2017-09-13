const models = require('../../db/models');
const lifecycle = require ('./lifecycle.js');
const company = require('./companies.js');

module.exports.getAll = (req, res) => {
  models.Card.forge().where({user_id: req.user.id}).fetchAll({withRelated: ['company']})
    .then(result => {
      res.status(200).send(result);
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
    current_status: req.body.status.status,
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
        recruiterEmail: result.attributes.recruiter_email
      };
      res.status(201).send(card);
      lifecycle.create(req, res, result);
      console.log('card saved');
    })
    .catch(err => {
      console.log('card err', err);
    });
};

//job card update initiated by user's edits
module.exports.update = (req, res) => {
  console.log('UPDATE USER ID: ', req.user.id)
  models.Card.forge().where({ user_id: req.user.id }).fetch()
    .then(card => {
      if (!card) {
        throw card;
      }
      card.save({
        position: req.body.job.title,
        position_url: req.body.job.url,
        description: null,
        notes: req.body.job.notes,
        //company_id: company.id,
        //user_id: req.user.id,
        current_status: req.body.status.status,
        recruiter_name: req.body.job.recruiter_name,
        recruiter_email: req.body.job.recruiter_email
      }, { method: 'update' });
    })
    .then(result => {
      console.log('HERES THE CARD: ', card);
      //res.status(201).send(result);
      lifecycle.update(req, res, result);
      console.log('card updated in db');
    })
    .then(() => {
      company.update(req, res);
    })
    .then(() => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      console.log('CARD CONTROLLER UPDATE 404')
      res.sendStatus(404);
    });
};