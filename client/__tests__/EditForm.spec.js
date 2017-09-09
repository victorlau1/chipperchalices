import React from 'react';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import JobCard from '../src/containers/JobCard.jsx';
import EditForm from '../src/containers/EditForm.jsx';

// import request from '__mocks__/request.js';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import fakeData from '../src/dummy_data.js';
import { lightBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';


describe('Snapshot (EditForm)', () => {
  const renderer = new ShallowRenderer();
  it('EditForm should render using fakeData', () => {
    const wrap = renderer.render(
      <MuiThemeProvider>
        <EditForm job={fakeData[0]}/>
      </MuiThemeProvider>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  
  it('EditForm should render using fakeData (enzyme)', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <EditForm job={fakeData[0]}/>
      </MuiThemeProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});

describe('Editform Props ', () => {
  let form;
  beforeEach(()=> {
    form = shallow(<MuiThemeProvider><EditForm job={fakeData[0]}/></MuiThemeProvider>);
  });
  
  it('should Receive All Props', () => {
    expect(Object.keys(form.props().job).length).toEqual(7);
  });

  it('should have position', () => {
    expect(form.props().job.position).toEqual('UI Developer');
  });

  it('should have position id', () => {
    expect(form.props().job.id).toEqual(1);
  });

  it('should have company name', () => {
    expect(form.props().job.company.name).toEqual('Vlocity');
  });

  it('should have company id', () => {
    expect(form.props().job.company.id).toEqual(12);
  });

  it('should have date', () => {
    expect(form.props().job.date).toEqual('2017-09-02');
  });

  it('should have application url', () => {
    expect(form.props().job.applicationUrl).toEqual('https://boards.greenhouse.io/vlocity/jobs/781103');
  });
  
});

// describe('Editform State Should Render Items', () => {
  
//   let form;
//   const muiTheme = getMuiTheme();
//   beforeEach(() => {
//     // mount = createMount();
//     form = mount(<MuiThemeProvider><EditForm job={fakeData[0]}/></MuiThemeProvider>);
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

describe('EditForm Update Button and Function', () => {
  
  let form;
  const muiTheme = getMuiTheme();
  beforeEach(() => {
    form = mount(<EditForm job={fakeData[0]}/>, {
      context: {muiTheme},
      childContextTypes: {muiTheme: React.PropTypes.object}
    });
  });

  it('should allow to open and close form', () => {
    expect(form.state().open).toEqual(false);
    form.find('FlatButton').find('button').simulate('click');
    expect(form.state().open).toEqual(true);
    form.find('FlatButton').find('button').simulate('click');
    expect(form.state().open).toEqual(false);
  });

  it('should not send anything if no change', () => {
    expect(toJson(form.state().job)).toEqual(toJson(fakeData));
    var result = form.instance().saveJob();
    expect(toJson(form.state().job)).toEqual(toJson(fakeData));
    expect(result).toEqual('No Changes');
  });
  
  //Can potentially refactor to use stub API mocking
  it('should send new items if change', () => {
    expect(toJson(form.state().job)).toEqual(toJson(fakeData));
    form.setState({company: 'Booga Booga', change: true});
    var result = form.instance().saveJob();
    expect(result).not.toEqual('No Changes');
  });
});

describe('Editform handle functions should change state', () => {

  let form;
  const muiTheme = getMuiTheme();

  beforeEach(() => {
    form = mount(<EditForm job={fakeData[0]}/>, {
      context: {muiTheme},
      childContextTypes: {muiTheme: React.PropTypes.object}
    });
  });

  it('should change state to be clicked', () => {
    expect(toJson(form.state())).toEqual(toJson(fakeData));
    expect(form.state().change).toEqual(false);
    
    form.instance().handleClick();
    
    expect(form.state().change).toEqual(false);
    expect(form.state().open).toEqual(true);
    expect(toJson(form.state())).toEqual(toJson(fakeData));
  });

  it('should change title', () => {
    expect(toJson(form.state())).toEqual(toJson(fakeData));
    expect(form.state().change).toEqual(false);
    expect(form.state().title).not.toEqual('Booga Booga');
    
    form.instance().handleTitle({target: {value: 'Booga Booga'}});
    
    expect(form.state().change).toEqual(true);
    expect(form.state().title).toEqual('Booga Booga');
  });

  //Add test for company id as well later
  it('should change company name', () => {
    expect(toJson(form.state())).toEqual(toJson(fakeData));
    expect(form.state().change).toEqual(false);
    expect(form.state().company).not.toEqual('Constantinople');
    
    form.instance().handleCompany({target: {value: 'Constantinople'}});
    
    expect(form.state().change).toEqual(true);
    expect(form.state().company).toEqual('Constantinople');
  });

  it('should change notes', () => {
    expect(toJson(form.state())).toEqual(toJson(fakeData));
    expect(form.state().change).toEqual(false);
    expect(form.state.notes).not.toEqual('What a test!');
    
    form.instance().handleNotes({target: {value: 'What a test!'}});
    
    expect(form.state().change).toEqual(true);
    expect(form.state().notes).toEqual('What a test!');
  });

  it('should change URL', () => {
    expect(toJson(form.state())).toEqual(toJson(fakeData));
    expect(form.state().change).toEqual(false);
    expect(form.state.url).not.toEqual('www.google.com/req/id/5000');
    
    form.instance().handleURL({target: {value: 'www.google.com/req/id/5000'}});
    
    expect(form.state().change).toEqual(true);
    expect(form.state().url).toEqual('www.google.com/req/id/5000');
  });

  it('should change Status', () => {
    expect(toJson(form.state())).toEqual(toJson(fakeData));
    expect(form.state().change).toEqual(false);
    expect(form.state().status).not.toEqual('Interviewed');
    expect(form.state().value).not.toEqual(3);

    form.instance().handleStatus({target: {textContent: 'Interviewed'}}, 3, 3);
    
    expect(form.state().change).toEqual(true);
    expect(form.state().status).toEqual('Interviewed');
    expect(form.state().value).toEqual(3);
  });

  it('should change Date (store as Date obj from string input)', () => {
    expect(toJson(form.state())).toEqual(toJson(fakeData));
    expect(form.state().change).toEqual(false);
    expect(form.state().date.toISOString().split('T')[0]).not.toEqual('2049-01-01');

    form.instance().handleDate({target: {value: 'BladeRunner 2049'}}, '2049-01-01');
  
    expect(form.state().change).toEqual(true);
    expect(form.state().date.toISOString().split('T')[0]).toEqual('2049-01-01');
  });

});