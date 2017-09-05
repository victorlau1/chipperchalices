import React, {Component} from 'react';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

class jobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: '',
      company: '',
      date: '',
      status: '',
      value: ''
    };
  }

  handleTitle (e) {

  }

  handleCompany (e) {

  }

  saveJob (job) {
    axios.post('/newJob', {
      job: {
        title: this.state.title,
        company: this.state.company,
        date: this.state.date,
        status: this.state.status
      }
    });
  }

  handleDate (e) {

  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        //primary={true}
        //keyboardFocused={true}
        //onClick={}
      />,
      <FlatButton
        label="Save"
        //primary={true}
        //keyboardFocused={true}
        //onClick={this.saveJob()}
      />
    ];
    const items = ['What is the status of this application?', 'Interested', 'Applied', 'Interview Scheduled', 'Interviewed'];

    return (
      <div>
        <RaisedButton label='Add a job' />
        <Dialog
          title="What are the details?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleSubmit}
        >
          <TextField onChange={this.handleTitle} hintText="Job title"/><br/>
          <TextField onChange={this.handleCompany} hintText="Company"/><br/>
          <DatePicker onChange={this.handleDate} value ={this.state.date} hintText="When did you apply?"/><br/>
          <DropDownMenu maxHeight={300} value={items[0]} onChange={this.handleChange}>
            {items}
          </DropDownMenu>
        </Dialog>
      </div>
    );
  }
}

export default jobForm;