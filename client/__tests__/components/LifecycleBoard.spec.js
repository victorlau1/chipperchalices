import React from 'react';
import renderer from 'react-test-renderer';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import fakeData from '../../src/dummy_data.js';
import { lightBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
//Material UI
//Wrap each MaterialUI component with MuiTheme

import LifecycleBoard from '../../src/containers/LifecycleBoard.jsx';

Describe ('LifecycleBoard Component', function() {
  let Component;

});