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

// Note the curly braces: grab the named export instead of default export
import ConnectedLifecycleBoard, { LifecycleBoard } from '../../src/containers/LifecycleBoard.jsx';
import { cardsAreFetched, fetchCards } from '../../src/actions/index.js';

describe ('LifecycleBoard Component rendering (without Redux store)', function() {

  let Component;

  beforeEach(function() {
    Component = shallow(<LifecycleBoard />);
  });

  it('should exist', () => {
    expect(Component.length).toBeTruthy();
  });

  it('Correct child components exist within Lifecycle Board', function() {
    expect(Component.find('<InterestList />')).toBeTruthy();
    expect(Component.find('<AppliedList />')).toBeTruthy();
    expect(Component.find('<InterviewList />')).toBeTruthy();
    expect(Component.find('<PosetInterviewList />')).toBeTruthy();
  });
});
