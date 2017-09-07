export default function() {

  // will retrieve from server
  // use dummy data for cards for now
  return [
    {
      id: 1,
      company: {
        id: 1,
        name: 'Google',
        description: 'Do no evil',
        logoUrl: 'https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg',
        location: 'Mountain View, CA'
      },
      position: 'UI Developer',
      applicationUrl: 'https://boards.greenhouse.io/vlocity/jobs/781103',
      currentStatus: 'Interview Scheduled',
      date: '2017-09-02',
      notes: null
    },
    {
      id: 2,
      company: {
        id: 22,
        name: 'LinkedIn',
        description: 'LinkedIn is a business- and employment-oriented social networking service that operates via websites and mobile apps',
        logoUrl: 'http://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png',
        location: 'Sunnyvale, CA'
      },
      position: 'Front End Developer',
      applicationUrl: 'https://www.linkedin.com/jobs/view/430047268/',
      currentStatus: 'Interview Scheduled',
      date: '2017-08-22',
      notes: 'Recruiter reached out to me.'
    },
    {
      id: 3,
      company: {
        id: 43,
        name: 'Airbnb',
        description: 'Airbnb is an online marketplace and hospitality service, enabling people to lease or rent short-term lodging including vacation rentals, apartment rentals, homestays, hostel beds, or hotel rooms.',
        logoUrl: 'https://a0.muscache.com/airbnb/static/logos/belo-200x200-4d851c5b28f61931bf1df28dd15e60ef.png',
        location: 'San Francisco, CA'
      },
      position: 'Front End UI Developer',
      applicationUrl: 'https://www.linkedin.com/jobs/view/380992731/',
      currentStatus: 'Interview Scheduled',
      date: '2017-09-01',
      notes: null
    }
  ];
}