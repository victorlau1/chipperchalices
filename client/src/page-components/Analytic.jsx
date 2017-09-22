import React, { Component } from 'react';
import UserChart from '../containers/UserChart.jsx';
import JobChart from '../containers/JobChart.jsx';
import CompanyChart from '../containers/CompanyChart.jsx';
import StatusChart from '../containers/StatusChart.jsx';
import CycleChart from '../containers/CycleChart.jsx';
import {Grid} from 'semantic-ui-react';

class Analytic extends Component {
  
  render() {
    return (
      <div>
        <br/>
        <br/>
        <Grid centered padded='horizontally'>
          <Grid.Column width={12} >
            <Grid.Row>
              <h1 align="center">Total Users</h1>
              <UserChart/>
            </Grid.Row>
            <Grid.Row>
              <h1 align="center">Total Jobs Cards </h1>
              <JobChart/>
            </Grid.Row>
            <Grid.Row>
              <h1 align="center">Total Companies </h1>
              <CompanyChart/>
            </Grid.Row>
            <Grid.Row>  
              <h1 align="center">Total Statuses</h1>
              <StatusChart/>
            </Grid.Row>
            <Grid.Row>
              <h1 align="center">Cycle Changes</h1>
              <CycleChart/>
            </Grid.Row>  
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
  
export default Analytic;