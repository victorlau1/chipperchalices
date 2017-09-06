const models = require('../models');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { id: 1,
          position: 'UI Developer',
          position_url: 'https://boards.greenhouse.io/vlocity/jobs/781103',
          description: 'Vlocity is a leading industry cloud software company that delivers award winning industry-specific applications on the Salesforce platform.',
          notes: null,
          company_id: 1,
          user_id: 1
        }
        // { id: 2,
        //   position: '',
        //   position_url: '',
        //   description: '',
        //   notes: '',
        //   company_id: '',
        //   user_id: ''
        // },
        // { id: 3,
        //   position: '',
        //   position_url: '',
        //   description: '',
        //   notes: '',
        //   company_id: '',
        //   user_id: ''
        // },
        // { id: 4,
        //   position: '',
        //   position_url: '',
        //   description: '',
        //   notes: '',
        //   company_id: '',
        //   user_id: ''
        // }
      ]);
    });
};
