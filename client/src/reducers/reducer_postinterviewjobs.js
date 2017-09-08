export default function() {

  // will retrieve from server
  // use dummy data for cards for now
  return [
    {
      id: 10,
      company: {
        id: 33,
        name: 'Pinterest',
        description: 'Pinterest is a web and mobile application startup that operates a software system designed to discover information on the World Wide Web. ',
        // industry: 'Information Technology and Services Computer Software Internet',
        logoUrl: 'http://az616578.vo.msecnd.net/files/2016/07/30/636054951893647903-2090458763_Pinterest_logo-3.jpg',
        location: 'San Francisco, CA'
      },
      position: 'Fullstack Apprentice',
      // applicationUrl: 'https://www.linkedin.com/jobs/view/383180342/'
      applicationUrl: 'https://boards.greenhouse.io/vlocity/jobs/781103',
      currentStatus: 'Interviewed',
      date: '2017-09-05',
      notes: 'Was really nervous during the on-site tech assessment, may not have given the best impression.'
    }
  ];
}