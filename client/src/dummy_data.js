// dummy jobCard objects

const data = [
  {
    id: 1,
    company: {
      id: 12,
      name: 'Vlocity',
      companyUrl: 'www.vlocity.com',
      description: 'Vlocity is a leading industry cloud software company that delivers award winning industry-specific applications on the Salesforce platform.',
      // industry: 'Information Technology and Services Computer Software Internet',
      logoUrl: 'https://tinyurl.com/ya54jrkq',
      location: 'San Francisco, CA',
      industry: 'Internet',
      ratings: '3.8'
    },
    position: 'UI Developer',
    positionUrl: 'https://boards.greenhouse.io/vlocity/jobs/781103',
    currentStatus: 'Interested',
    statusDate: '2017-09-02',
    notes: null,
    recruiterName: 'Jane Smith',
    recruiterEmail: '123@gmail.com'
  },
  {
    id: 2,
    company: {
      id: 3,
      name: 'RHLA Technology',
      companyUrl: 'www.vlocity.com',
      description: 'RHLA Technology is a leading provider of technology professionals on a project and full-time basis.',
      logoUrl: 'https://tinyurl.com/y8z3pajs',
      location: 'San Francisco, CA',
      industry: 'Internet',
      ratings: '3.8'
    },
    position: 'Front End Developer',
    positionUrl: 'https://www.linkedin.com/jobs/view/430047268/',
    currentStatus: 'Interested',
    statusDate: '2017-08-22',
    notes: 'Recruiter reached out to me.',
    recruiterName: 'Jane Smith',
    recruiterEmail: '123@gmail.com'

  },
  {
    id: 3,
    company: {
      id: 2,
      name: 'Ladeeda',
      companyUrl: 'www.vlocity.com',
      description: 'Ladeeda is the leader in cloud security. ',
      logoUrl: 'https://tinyurl.com/y88e4djd',
      location: 'Los Altos, CA',
      industry: 'Internet',
      ratings: '3.8'
    },
    position: 'Front End UI Developer',
    positionUrl: 'https://www.linkedin.com/jobs/view/380992731/',
    currentStatus: 'Interested',
    statusDate: '2017-09-01',
    notes: null,
    recruiterName: null,
    recruiterEmail: null
  },
  {
    id: 4,
    company: {
      id: 12,
      name: 'Yadayada',
      companyUrl: 'www.vlocity.com',
      description: 'Vlocity is a leading industry cloud software company that delivers award winning industry-specific positions on the Salesforce platform.',
      logoUrl: 'https://img.brainjet.com/filter:scale/slides/3/3/9/6/5/1/3396513027/ed6eb3f201d6dd08b24b0feb74d314233a617dc2.jpeg?mw=615',
      location: 'San Francisco, CA',
      industry: 'Internet',
      ratings: '3.8'
    },
    position: 'UI Developer',
    // positionUrl: 'https://www.linkedin.com/jobs/view/383180342/'
    positionUrl: 'https://boards.greenhouse.io/vlocity/jobs/781103',
    currentStatus: 'Applied',
    statusDate: '2017-09-02',
    notes: null,
    recruiterName: 'Jane Smith',
    recruiterEmail: '123@gmail.com'

  },
  {
    id: 5,
    company: {
      id: 3,
      name: 'LetGo',
      companyUrl: 'www.vlocity.com',
      description: 'RHLA Technology is a leading provider of technology professionals on a project and full-time basis.',
      logoUrl: 'https://technofizi.net/wp-content/uploads/2016/02/LG-logos.jpg',
      location: 'San Francisco, CA'
    },
    position: 'Front End Developer',
    positionUrl: 'https://www.linkedin.com/jobs/view/430047268/',
    currentStatus: 'Applied',
    statusDate: '2017-08-22',
    notes: 'Recruiter reached out to me.',
    recruiterName: 'Jane Smith',
    recruiterEmail: '123@gmail.com'

  },
  {
    id: 6,
    company: {
      id: 2,
      name: 'Who Cares',
      companyUrl: 'www.vlocity.com',
      description: 'Ladeeda is the leader in cloud security. ',
      logoUrl: 'https://www.freelogodesign.org/img/logo-ex-1.png',
      location: 'Los Altos, CA'
    },
    position: 'Front End UI Developer',
    positionUrl: 'https://www.linkedin.com/jobs/view/380992731/',
    currentStatus: 'Applied',
    statusDate: '2017-09-01',
    notes: null,
    recruiterName: 'Jane Smith',
    recruiterEmail: '123@gmail.com'

  },
  {
    id: 7,
    company: {
      id: 1,
      name: 'Google',
      companyUrl: 'www.vlocity.com',
      description: 'Do no evil',
      logoUrl: 'https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg',
      location: 'Mountain View, CA'
    },
    position: 'UI Developer',
    positionUrl: 'https://boards.greenhouse.io/vlocity/jobs/781103',
    currentStatus: 'Interview Scheduled',
    statusDate: '2017-09-02',
    notes: null,
    recruiterName: 'Jane Smith',
    recruiterEmail: '123@gmail.com'

  },
  {
    id: 8,
    company: {
      id: 22,
      name: 'LinkedIn',
      companyUrl: 'www.vlocity.com',
      description: 'LinkedIn is a business- and employment-oriented social networking service that operates via websites and mobile apps',
      logoUrl: 'http://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png',
      location: 'Sunnyvale, CA'
    },
    position: 'Front End Developer',
    positionUrl: 'https://www.linkedin.com/jobs/view/430047268/',
    currentStatus: 'Interview Scheduled',
    statusDate: '2017-08-22',
    notes: 'Recruiter reached out to me.',
    recruiterName: 'Jane Smith',
    recruiterEmail: '123@gmail.com'

  },
  {
    id: 9,
    company: {
      id: 43,
      name: 'Airbnb',
      companyUrl: 'www.vlocity.com',
      description: 'Airbnb is an online marketplace and hospitality service, enabling people to lease or rent short-term lodging including vacation rentals, apartment rentals, homestays, hostel beds, or hotel rooms.',
      logoUrl: 'https://a0.muscache.com/airbnb/static/logos/belo-200x200-4d851c5b28f61931bf1df28dd15e60ef.png',
      location: 'San Francisco, CA'
    },
    position: 'Front End UI Developer',
    positionUrl: 'https://www.linkedin.com/jobs/view/380992731/',
    currentStatus: 'Interview Scheduled',
    statusDate: '2017-09-01',
    notes: null,
    recruiterName: 'Jane Smith',
    recruiterEmail: '123@gmail.com'

  },
  {
    id: 10,
    company: {
      id: 33,
      name: 'Pinterest',
      companyUrl: 'www.vlocity.com',
      description: 'Pinterest is a web and mobile application startup that operates a software system designed to discover information on the World Wide Web. ',
      // industry: 'Information Technology and Services Computer Software Internet',
      logoUrl: 'http://az616578.vo.msecnd.net/files/2016/07/30/636054951893647903-2090458763_Pinterest_logo-3.jpg',
      location: 'San Francisco, CA'
    },
    position: 'Fullstack Apprentice',
    // positionUrl: 'https://www.linkedin.com/jobs/view/383180342/'
    positionUrl: 'https://boards.greenhouse.io/vlocity/jobs/781103',
    currentStatus: 'Interviewed',
    statusDate: '2017-09-05',
    notes: 'Was really nervous during the on-site tech assessment, may not have given the best impression.',
    recruiterName: 'Jane Smith',
    recruiterEmail: '123@gmail.com'

  }
];

export default data;