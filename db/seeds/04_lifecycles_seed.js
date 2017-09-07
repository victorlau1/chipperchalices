exports.seed = function(knex, Promise) {

  return knex('lifecycle').del()
    .then(function () {

      return knex('lifecycle').insert([
        { status: 'Interested',
          status_start_date: 'August 10, 2017',
          card_id: 1
        },
        { status: 'Applied',
          status_start_date: 'September 4, 2017',
          card_id: 1
        },
        { status: 'Applied',
          status_start_date: 'September 7, 2017',
          card_id: 2
        },
      ]);
    });
};
