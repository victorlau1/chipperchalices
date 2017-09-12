const models = require('../../db/models');
const lifecycle = require ('./lifecycle.js');

//ping db for cards on page load
//query lifecycle table for max id for each unique card id
//get card id for that lifecycle id -> card info
//get company id for that card
module.exports.getAll = (req, res) => {
  //res.send('hi');
  return models.Lifecycle.forge().fetchAll({withRelated: ['card', 'company']})
  .then(cards => {
    res.send(cards);
  })
}
// module.exports.getAll = (req, res) => {
//   console.log('getall is working')

  //res.send('hi there');

  // return models.Card.forge().fetchAll()
  // .then(lifecycles => {
  //   res.send(lifecycles);
  // })
  // return models.Lifecycle.forge()
  //   .query()


  // fetchAll()
  // .then(lifecycles => {

  //   lifecycles = lifecycles.models.map(lc=>{
  //     return lc.attributes;
  //   })
  //   console.log(lifecycles);

  //   models.cards.forge
  //   res.send('ok lifecycles');

  // return models.Card.forge().fetchAll({withRelated: ['company', 'lifecycle']})
  // .then(cards => {
  //   res.json({error: false, status: 200, data: cards.toJSON()});
    //res.send(cards);


  // .catch(err => {
  //   res.status(503).send(err);
  // })
  // models.Card.fetchAll()
  //   .then(cards => {
  //     res.status(200).send(cards);
  //   })
  //   .catch(err => {
  //     res.status(503).send(err);
  //   });


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

//job card update initiated by user's edits
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