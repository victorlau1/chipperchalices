import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { lightBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

import fakeData from '../../src/dummy_data.js';
import JobCard from '../../src/containers/JobCard.jsx';


const OriginalJobCard = JobCard.DecoratedComponent;

describe('Snapshot (JobCard without DnD wrapping)', () => {

  const renderer = new ShallowRenderer();

  it('JobCard should render using fakeData', () => {
    const wrap = renderer.render(
      <MuiThemeProvider>
        <OriginalJobCard job={fakeData[0]}/>
      </MuiThemeProvider>);

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});

describe('JobCard Props', () => {
  let jobcard;

  beforeEach(() => {
    jobcard = shallow(
      <MuiThemeProvider>
        <OriginalJobCard job={fakeData[0]}/>
      </MuiThemeProvider>
    );
  });

  it('should receive all props', () => {
    expect(Object.keys(jobcard.props().job).length).toEqual(9);
  });

  it('should have position', () => {
    expect(jobcard.props().job.position).toEqual('UI Developer');
  });

  it('should have position id', () => {
    expect(jobcard.props().job.id).toEqual(1);
  });

  it('should have company name', () => {
    expect(jobcard.props().job.company.name).toEqual('Vlocity');
  });

  it('should have company id', () => {
    expect(jobcard.props().job.company.id).toEqual(12);
  });

  it('should have date of recent status', () => {
    expect(jobcard.props().job.statusDate).toEqual('2017-09-02');
  });

  it('should have position url', () => {
    expect(jobcard.props().job.positionUrl).toEqual('https://boards.greenhouse.io/vlocity/jobs/781103');
  });

  it ('should have recruiter email', () => {
    expect(jobcard.props().job.recruiterEmail).toEqual('123@gmail.com');
  });

  it ('should have recruiter name', () => {
    expect(jobcard.props().job.recruiterName).toEqual('Jane Smith');
  });
});



// describe('Job Card Component', function() {
//   // Obtain the reference to the component before React DnD wrapping

//   let originalJobCard;
//   beforeEach(() => {
//     originalJobCard = JobCard.DecoratedComponent;

//   })

//   // Stub the React DnD connector functions with an identity function
//   const identity = el => el;


// }

describe('JobCard', () => {
  let card;

  beforeEach(() => {
    card = shallow(<MuiThemeProvider><JobCard job={fakeData[0]}/></MuiThemeProvider>);
  });

  it('Props should be passed through properly', () => {
    expect(card.props().job.position).toEqual('UI Developer');
  });
});