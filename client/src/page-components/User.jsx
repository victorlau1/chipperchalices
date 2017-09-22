import React, { Component } from 'react';
import LifecycleBoard from '../containers/LifecycleBoard.jsx';

class User extends Component {

  render() {
    return (
      <div style={ {backgroundColor: "#F8F8F9"} }>
        <LifecycleBoard/>
      </div>
    );
  }
}

export default User;