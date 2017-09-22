import React, { Component } from 'react';
import LifecycleBoard from '../containers/LifecycleBoard.jsx';

class User extends Component {

  render() {
    return (
      <div style={{paddingTop: '30px'}}>
        <LifecycleBoard/>
      </div>
    );
  }
}

export default User;