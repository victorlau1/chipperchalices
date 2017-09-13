import React from 'react';
import renderer from 'react-test-renderer';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import fakeData from '../src/dummy_data.js';
import { lightBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
//Material UI
//Wrap each MaterialUI component with MuiTheme

import LifecycleBoard from '../src/containers/LifecycleBoard.jsx';
import { InterestList } from '../src/containers/InterestList.jsx';
import JobCard from '../src/containers/JobCard.jsx';



describe('Snapshots', () => {
  const mockStore = configureStore();
  const initialStore = {
    cards: {
      interested: [],
      applied: [],
      interviewScheduled: [],
      interviewed: []
    },
    cardsHasErrored: false,
    cardsAreFetched: false,
    // interestJobs: fakeData,
    // appliedJobs: fakeData,
    // postInterviewJobs: fakeData,
    // interviewJobs: fakeData
  };
  const store = mockStore(initialStore);


  describe('InterestList', () => {
    let list;

    beforeEach(() => {
      list = shallow(<MuiThemeProvider><InterestList interestJobs={fakeData}/></MuiThemeProvider>);
    });

    it('Should have all the data mapped', () => {
      expect(list.props().interestJobs.length).toEqual(10);
    });
  });
});