import React from 'react';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import ExpandedForm from '../src/containers/ExpandedForm.jsx';

//
import fakeData from '../src/dummy_data.js';
import { lightBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

//Shallow Render to reduce snapshot output
describe('Expanded Form Screenshot', () => {
  it('should render using fakeData (enzyme)', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <ExpandedForm job={fakeData[0]}/>
      </MuiThemeProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

// describe('Expandedform State Should Render Items', () => {
  
//   let form;
//   const muiTheme = getMuiTheme();
//   beforeEach(() => {
//     // mount = createMount();
//     form = mount(<MuiThemeProvider><ExpandedForm job={fakeData[0]}/></MuiThemeProvider>);
//     form = form.find(EditForm);
//   });
//   // afterEach(() => {
//   //   mount.cleanUp();
//   // });

//   it('should call componentDidMount once', () => {
    
//     sinon.spy(EditForm.prototype, 'componentDidMount');
//     expect(EditForm.prototype.componentDidMount.calledOnce).toEqual(true);
//   });

//   it('should not be open when launched', () => {
//     expect(form.state().open).toEqual(false);
//   });
// });

describe('Expanded Form Props', () => {
  let form;

  beforeEach(()=> {
    form = shallow(<MuiThemeProvider><ExpandedForm job={fakeData[0]}/></MuiThemeProvider>);
  });
  
  it('should Receive All Props', () => {
    expect(Object.keys(form.props().job).length).toEqual(9);
  });

  it('should have position', () => {
    expect(form.props().job.position).toEqual('UI Developer');
  });

  it('should have position id', () => {
    expect(form.props().job.id).toEqual(1);
  });

  it('should have company object', () => {
    expect(Object.keys(form.props().job.company).length).toEqual(8);
  });

  it('should have company name', () => {
    expect(form.props().job.company.name).toEqual('Vlocity');
  });

  it('should have company id', () => {
    expect(form.props().job.company.id).toEqual(12);
  });

  it('should have date', () => {
    expect(form.props().job.statusDate).toEqual('2017-09-02');
  });

  it('should have position url', () => {
    expect(form.props().job.positionUrl).toEqual('https://boards.greenhouse.io/vlocity/jobs/781103');
  });

  it('should have recruiter name', () => {
    expect(form.props().job.recruiterName).toEqual('Jane Smith');
  });

  it('should have recruiter email', () => {
    expect(form.props().job.recruiterEmail).toEqual('123@gmail.com');
  });

});

describe('Expanded Form', () => {
  
  let form;
  const muiTheme = getMuiTheme();
  beforeEach(() => {
    form = mount(<ExpandedForm job={fakeData[0]}/>, {
      context: {muiTheme},
      childContextTypes: {muiTheme: React.PropTypes.object}
    });
  });

  it('should allow to open and close form', () => {
    expect(form.state().open).toEqual(false);
    form.find('IconButton').find('button').simulate('click');
    expect(form.state().open).toEqual(true);
    form.find('IconButton').find('button').simulate('click');
    expect(form.state().open).toEqual(false);
  });

  describe('Expanded form handleclick functions', () => {

    let form;
    const muiTheme = getMuiTheme();

    beforeEach(() => {
      form = mount(<ExpandedForm job={fakeData[0]}/>, {
        context: {muiTheme},
        childContextTypes: {muiTheme: React.PropTypes.object}
      });
    });

    it('should change state to be clicked', () => {
      expect(form.state().open).toEqual(false);
      
      form.instance().handleClick();
  
      expect(form.state().open).toEqual(true);
    });

  });
});
