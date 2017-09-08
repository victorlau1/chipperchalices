exports.seed = function(knex, Promise) {

  return knex('companies').del()
    .then(function () {

      return knex('companies').insert([
        { id: 1,
          name: 'Vlocity',
          industry: 'Information Technology and Services Computer Software Internet',
          logo_url: 'https://tinyurl.com/ya54jrkq',
          company_url: 'https://www.linkedin.com/company/3652724/',
          description: 'Vlocity is a leading industry cloud software company that delivers award winning industry-specific applications on the Salesforce platform.'
        },
        { id: 2,
          name: 'RHLA Technology',
          industry: 'Information Technology and Services Computer Software Internet',
          logo_url: 'https://tinyurl.com/y8z3pajs',
          company_url: 'https://www.linkedin.com/company/3652724/',
          description: 'RHLA Technology is a leading provider of technology professionals on a project and full-time basis.'
        },
        { id: 3,
          name: 'Ladeeda',
          industry: 'Information Technology and Services Computer Software Internet',
          logo_url: 'https://tinyurl.com/y88e4djd',
          company_url: 'https://www.linkedin.com/company/3652724/',
          description: 'Ladeeda is the leader in cloud security.'
        },
        { id: 4,
          name: 'Airbnb',
          industry: 'Information Technology and Services Computer Software Internet',
          logo_url: 'https://a0.muscache.com/airbnb/static/logos/belo-200x200-4d851c5b28f61931bf1df28dd15e60ef.png',
          company_url: 'https://www.airbnb.com/',
          description: 'Airbnb is an online marketplace and hospitality service, enabling people to lease or rent short-term lodging including vacation rentals, apartment rentals, homestays, hostel beds, or hotel rooms.'
        },
        { id: 5,
          name: 'Pinterest',
          industry: 'Information Technology and Services Computer Software Internet',
          logo_url: 'http://az616578.vo.msecnd.net/files/2016/07/30/636054951893647903-2090458763_Pinterest_logo-3.jpg',
          company_url: 'https://www.pinterest.com/',
          description: 'Pinterest is a web and mobile application startup that operates a software system designed to discover information on the World Wide Web. '
        }
      ]);
    });
};
