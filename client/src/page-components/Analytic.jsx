import React, { Component } from 'react';
import UserChart from '../containers/UserChart.jsx';
import JobChart from '../containers/JobChart.jsx';
import CompanyChart from '../containers/CompanyChart.jsx';
import StatusChart from '../containers/StatusChart.jsx';
import CycleChart from '../containers/CycleChart.jsx';

class Analytic extends Component {
  
  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <h1>Total User Cards</h1>
        <UserChart/>
        <h1>Total Jobs Cards </h1>
        <JobChart/>
        <h1>Total Companies </h1>
        <CompanyChart/>
        <h1>Total Statuses</h1>
        <StatusChart/>
        <h1>Cycle Changes</h1>
        <CycleChart/>
      </div>
    );
  }
}
  
export default Analytic;