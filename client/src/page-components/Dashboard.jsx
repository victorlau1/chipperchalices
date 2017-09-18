import React, { Component } from 'react';
import AnalyticsBoard from '../containers/AnalyticsBoard.jsx';


class Dashboard extends Component {
  
  render() {
    return (
      <div>
        <h1>Total User Stats</h1>
        <AnalyticsBoard/>
      </div>
    );
  }
}
  
export default Dashboard;