import React, { Component } from 'react';

import LifecycleBoard from '../containers/LifecycleBoard.jsx';
import JobForm from '../components/jobForm.jsx';
import ExpandedForm from '../containers/ExpandedForm.jsx';

class User extends Component {

  render() {
    return (
      <div>
        <h1>Application Lifecycle Board</h1>
        <JobForm/>
        <br/>
        <LifecycleBoard/>
      </div>
    );
  }
}

export default User;
