import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

class InterestList extends Component {
  renderList() {
  }

  render() {
    return (
      <div>
        <h2>Test</h2>
      </div>
    )
  }
}

/*REDUX: everytime the application state changes, the container/InterestList will re-render and update the props*/

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of InterestList
  return {
    interestJobs: state.interestJobs
  }
}

// class InterestList extends Component {
//   render() {
//     return (
//       <Card className='job-entry'>
//         <CardHeader
//           title='Frontend SWE'
//           subtitle='Quantified @ Menlo Park, CA'
//         />
//       </Card>
//     )
//   }
// }

export default InterestList;