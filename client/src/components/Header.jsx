import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to='/'>User Page </Link>
          /
          <Link to='/about'> About</Link>
          /
          <Link to='/cal'> Calendar</Link>
        </header>
      </div>
    );
  }
}