import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button, Image } from 'semantic-ui-react';

import JobForm from './jobForm.jsx';

// retain named export to test unconnected component
export class Header extends Component {

  render() {
    const { display, photo_url } = this.props;

    return (
      <Menu fixed='top' size='large' inverted>
        <Menu.Item header>
        <Link to='/'><Image src='https://i.imgur.com/IFOyk8I.png?1' /></Link>
        </Menu.Item>
        <Menu.Item><JobForm /></Menu.Item>
        <Menu.Item><Button basic inverted color='teal'>Insights</Button></Menu.Item>
        <Menu.Item position='right'><a href="/logout"><Button basic inverted color='teal'>Logout</Button></a></Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  const { display, photo_url } = state.user;
  return {
    display,
    photo_url
  };
};

export default connect(mapStateToProps)(Header);