export default function() {

  // will retrieve from server
  // use dummy data for cards for now
  return [
    {
      id: 1,
      company: {
        id: 12,
        name: 'Yadayada',
        description: 'Vlocity is a leading industry cloud software company that delivers award winning industry-specific applications on the Salesforce platform.',
        // industry: 'Information Technology and Services Computer Software Internet',
        logoUrl: 'https://img.brainjet.com/filter:scale/slides/3/3/9/6/5/1/3396513027/ed6eb3f201d6dd08b24b0feb74d314233a617dc2.jpeg?mw=615',
        location: 'San Francisco, CA'
      },
      position: 'UI Developer',
      // applicationUrl: 'https://www.linkedin.com/jobs/view/383180342/'
      applicationUrl: 'https://boards.greenhouse.io/vlocity/jobs/781103',
      currentStatus: 2,
      date: '2017-09-02',
      notes: null
    },
    {
      id: 2,
      company: {
        id: 3,
        name: 'LetGo',
        description: 'RHLA Technology is a leading provider of technology professionals on a project and full-time basis.',
        logoUrl: 'https://technofizi.net/wp-content/uploads/2016/02/LG-logos.jpg',
        location: 'San Francisco, CA'
      },
      position: 'Front End Developer',
      applicationUrl: 'https://www.linkedin.com/jobs/view/430047268/',
      currentStatus: 2,
      date: '2017-08-22',
      notes: 'Recruiter reached out to me.'
    },
    {
      id: 3,
      company: {
        id: 2,
        name: 'Who Cares',
        description: 'Ladeeda is the leader in cloud security. ',
        logoUrl: 'https://www.freelogodesign.org/img/logo-ex-1.png',
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