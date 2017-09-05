import React, { Component } from 'react';

import LifecycleBoard from '../containers/LifecycleBoard.jsx';

export default class User extends Component {

  render() {
    return (
      <div>
        <h1>Application Lifecycle Board</h1>
        <LifecycleBoard />
      </div>
    );
  }
}