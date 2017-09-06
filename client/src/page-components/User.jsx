import React, { Component } from 'react';
//import Grid from 'material-ui/Grid';
import LifecycleBoard from '../containers/LifecycleBoard.jsx';
import JobForm from '../components/jobForm.jsx';

export default class User extends Component {

  render() {
    return (
      <div>
        <h1>Application Lifecycle Board</h1>
        <LifecycleBoard/>
        <JobForm/>
      </div>
    );
  }
}