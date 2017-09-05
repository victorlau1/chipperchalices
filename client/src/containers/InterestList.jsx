import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

// import JobCard from './JobCard.jsx';

class InterestList extends Component {
  renderList() {
  }

  render() {
    return (
      <div>
        <h2>Test</h2>
      </div>
    );
  }
}

/*REDUX: everytime the application state changes, the container/InterestList will re-render and update the props*/

const mapStateToProps = (state) => {
  // whatever is returned will show up as props inside of InterestList
  return {
    interestJobs: state.interestJobs
  };
};
export default InterestList;