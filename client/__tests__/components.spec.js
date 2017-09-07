import React from 'react';
import renderer from 'react-test-renderer';
import expect from 'expect';
import { shallow } from 'enzyme';
import JobCard from '../src/containers/JobCard.jsx';
import LifecycleBoard from '../src/containers/LifecycleBoard.jsx';
import { InterestList } from '../src/containers/InterestList.jsx';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import fakeData from '../src/dummy_data.js';
import { lightBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
//Material UI
//Wrap each MaterialUI component with MuiTheme


describe('Snapshots', () => {
  const mockStore = configureStore();
  const initialStore = { interestJobs: fakeData};
  const store = mockStore(initialStore);

  it('JobCard renders a JobCard', () => {
    const component = renderer.create(<MuiThemeProvider><JobCard job={fakeData[0]} /></MuiThemeProvider>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('LifeCycleBoard renders 4 Columns and Calls Subcomponents', () => {
    const component = renderer.create(<Provider store={store}><MuiThemeProvider><LifecycleBoard /></MuiThemeProvider></Provider>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('List should render fakeData Jobs', () => {
    const component = renderer.create(<MuiThemeProvider><InterestList interestJobs={fakeData}/></MuiThemeProvider>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('JobCard', () => {
  let card;

  beforeEach(() => {
    card = shallow(<MuiThemeProvider><JobCard job={fakeData[0]}/></MuiThemeProvider>);
  });

  it('Props should be passed through properly', () => {
    expect(card.props().job.position).toEqual('UI Developer');
  });
});

describe('InterestList', () => {
  let list;

  beforeEach(() => {
    list = shallow(<MuiThemeProvider><InterestList interestJobs={fakeData}/></MuiThemeProvider>);
  });

  it('Should have all the data mapped', () => {
    expect(list.props().interestJobs.length).toEqual(3);
  });
});