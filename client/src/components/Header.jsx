import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    return (
      <Menu fixed='top' color='blue'>
        <Menu.Item header>Elevate</Menu.Item>
        <Menu.Item><Link to='/'>Applications</Link></Menu.Item>
        <Menu.Item>Add a Job</Menu.Item>
        <Menu.Item position='right'><Link to='/landing'>Logout</Link></Menu.Item>
      </Menu>
    );
  }
}
