export default function() {

  // will retrieve from server
  // use dummy data for cards for now
  return [
    {
      id: 1,
      company: {
        id: 12,
        name: 'Vlocity',
        description: 'Vlocity is a leading industry cloud software company that delivers award winning industry-specific applications on the Salesforce platform.',
        // industry: 'Information Technology and Services Computer Software Internet',
        logoUrl: 'https://tinyurl.com/ya54jrkq',
        location: 'San Francisco, CA'
      },
      position: 'UI Developer',
      // applicationUrl: 'https://www.linkedin.com/jobs/view/383180342/'
      applicationUrl: 'https://boards.greenhouse.io/vlocity/jobs/781103',
      currentStatus: 1,
      date: '2017-09-02',
      notes: null
    },
    {
      company: {
        id: 3,
        name: 'Robert Half Technology',
        description: 'Robert Half Technology is a leading provider of technology professionals on a project and full-time basis.',
        logoUrl: 'https://tinyurl.com/y8z3pajs',
        location: 'San Francisco, CA'
      },
      position: 'Front End Developer',
      applicationUrl: 'https://www.linkedin.com/jobs/view/430047268/',
      currentStatus: 2,
      date: '2017-08-22',
      notes: 'Recruiter reached out to me.'
    },
    {
      company: {
        id: 2,
        name: 'Netskope',
        description: 'Netskope is the leader in cloud security. ',
        logoUrl: 'https://tinyurl.com/y88e4djd',
        location: 'Los Altos, CA'
      },
      position: 'Front End UI Developer',
      applicationUrl: 'https://www.linkedin.com/jobs/view/380992731/',
      currentStatus: 2,
      date: '2017-09-01',
      notes: null
    }
  ];
}