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

// const setup = () => {
//   const props = {
//     fetchCards: jest.fn()
//   };

//   const enzymeWrapper = mount(<ConnectedLifecycleBoard {...props} />);

//   return {
//     props,
//     enzymeWrapper
//   };
// };

// TODO: Fix
describe ('ConnectedLifecycleBoard Component rendering', function() {
  const mockStore = configureStore();
  const initialState = {
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
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MuiThemeProvider>
          <ConnectedLifecycleBoard />
        </MuiThemeProvider>
      </Provider>);
  });

  it('renders the connected(SMART) LifecycleBoard', () => {
    expect(wrapper.find(ConnectedLifecycleBoard).length).toEqual(1);
  });

  it('checks action on dispatching', () => {
    let action;
    store.dispatch(cardsAreFetched(true));
    action = store.getActions();
    expect(action[0].type.toBe('CARDS_ARE_FETCHED'));
  });



  // it('LifecycleBoard renders 4 Columns and Calls Subcomponents', () => {
  //   const component = renderer.create(
  //     <Provider store={store}>
  //       <MuiThemeProvider>
  //         <ConnectedLifecycleBoard />
  //       </MuiThemeProvider>
  //     </Provider>);

  //   const json = component.toJSON();
  //   expect(json).toMatchSnapshot();
  // });

  // it('should render self and subcomponents', () => {
  //   const { enzymeWrapper } = setup();

  //   expect(enzymeWrapper.)
  // })
});