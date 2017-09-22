exports.seed = function(knex, Promise) {

  return knex('lifecycle').del()
    .then(function () {

      return knex('lifecycle').insert([
        { status: 'Interested',
          status_start_date: '2017-08-27',
          card_id: 1
        },
        { status: 'Applied',
          status_start_date: '2017-09-04',
          card_id: 1
        },
        { status: 'Applied',
          status_start_date: '2017-09-05',
          card_id: 2
        },
      ]);
    });
};
