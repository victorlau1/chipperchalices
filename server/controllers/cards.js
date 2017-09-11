const models = require('../../db/models');
const lifecycle = require ('./lifecycle.js');

//ping db for cards on page load
//query lifecycle table for max id for each unique card id
//get card id for that lifecycle id -> card info
//get company id for that card
module.exports.getAll = (req, res) => {
  return models.Lifecycle.forge().where({ card_id: 1 }).fetchAll({
    withRelated: ['card', 'company']
  })
  .then((lifecycles) => {
    res.send(lifecycles);
  })

  // return models.Lifecycle.forge().query((qb) => {
  //     qb
  //     .leftJoin('lifecycle1', () => {
  //       this.on('lifecycle1.card_id', '=', 'lifecycle2.card_id')
  //           .andOn('lifecycle1.id', '<', 'lifecycle2.id')
  //     })
  //     .where('lifecycle2.id', '=', 'null')
  // }).fetchAll({withRelated: ['card', 'company']})
  // .then(cards => {
  //   res.send(cards);
  // })
}

// SELECT l1.*
// FROM lifecycle l1 LEFT JOIN lifecycle l2
//  ON (l1.card_id = l2.card_id AND l1.id < l2.id)
// WHERE l2.id IS NULL;
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