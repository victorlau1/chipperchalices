import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button, Image } from 'semantic-ui-react';
import JobForm from './jobForm.jsx';

export default class Header extends Component {
  render() {
    return (
      <Menu fixed='top' size='large' inverted color='teal'>
        <Menu.Item header>Elevate</Menu.Item>
        <Menu.Item><Link to='/'><Button basic inverted color='yellow'>Job Board</Button></Link></Menu.Item>
        <Menu.Item><JobForm /></Menu.Item>
        <Menu.Item position='right'><Link to='/landing'><Button basic inverted color='yellow'>Logout</Button></Link></Menu.Item>
      </Menu>
    );
  }
}

