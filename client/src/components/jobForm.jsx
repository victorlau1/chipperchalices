import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { Button, Header, Image, Modal, Icon, Form, Dropdown, TextArea } from 'semantic-ui-react';
const moment = require('moment');

import { addCardToList } from '../actions/index.js';

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      title: '',
      company: '',
      date: null,
      status: '',
      notes: '',
      url: '',
      recruiter_name: '',
      recruiter_email: '',
      value: 0
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.saveJob = this.saveJob.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleURL = this.handleURL.bind(this);
    this.handleRecruiter = this.handleRecruiter.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleOpen() {
    this.setState({ modalOpen: true })
  }

  handleClose() {
    this.setState({ modalOpen: false })
  }

  handleTitle (e) {
    this.setState({
      title: e.target.value
    });
  }

  handleCompany (e) {
    this.setState({
      company: e.target.value
    });
  }


  handleNotes (e) {
    this.setState({
      notes: e.target.value
    });
  }

  handleURL (e) {
    this.setState({
      url: e.target.value
    });
  }

  handleRecruiter (e) {
    this.setState({
      recruiter_name: e.target.value
    });
  }

  handleEmail (e) {
    this.setState({
      recruiter_email: e.target.value
    });
  }

  handleStatus (event, index, value) {
    this.setState({
      status: event.target.textContent,
      value: value,
    });
  }

  saveJob () {
    this.handleClose();
    var form = this;
    console.log(this.state);
    //this.props.addCardToList(this.state.status);

    axios.post('/card', {
      job: {
        title: this.state.title,
        company: this.state.company,
        notes: this.state.notes,
        url: this.state.url,
        recruiter_name: this.state.recruiter_name,
        recruiter_email: this.state.recruiter_email
      },
      status: {
        date: this.state.date,
        status: this.state.status
      }
    })
      .then(function(response) {
        console.log('new card response from jobForm', response.data);
        form.props.addCardToList(form.state.status, response.data);
      })
      .then(() => {
        form.setState({
          open: false,
          value: 0
        });
        console.log('sent to server');
      })
      .catch(function(error) {
        form.setState({
          open: false,
          value: 0
        });
        console.log('error', error);
      });
  }


  handleDate (e, date) {
    this.setState({
      date: date
    });
  }

  render() {

    const options = [
    { key: 'Interested', text: 'Interested', value: 'Interested' },
    { key: 'Applied', text: 'Applied', value: 'Applied' },
    { key: 'Interview Scheduled', text: 'Interview Scheduled', value: 'Interview Scheduled' },
    { key: 'Interviewed', text: 'Interviewed', value: 'Interviewed' },
    { key: 'Applied', text: 'Applied', value: 'Applied' },
    { key: 'No response', text: 'No response', value: 'No response' },
    { key: 'Rejected', text: 'Rejected', value: 'Rejected' },
    { key: 'Offer made', text: 'Offer made', value: 'Offer made' },
    { key: 'Archived', text: 'Archived', value: 'Archived' },
    ]

    return (
      <Modal trigger={<Button basic inverted color='yellow' onClick={this.handleOpen}>Add Job</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='large'>
        <Modal.Header>Add a Job</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field required>
                <label>Position</label>
                <input onChange={this.handleTitle}/>
              </Form.Field>
              <Form.Field required>
                <label>Company</label>
                <input onChange={this.handleCompany}/>
              </Form.Field>
              <Form.Field required>
                <label>Application Link</label>
                <input onChange={this.handleURL}/>
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Recruiter Name</label>
                <input onChange={this.handleRecruiter}/>
              </Form.Field>
              <Form.Field>
                <label>Recruiter Email</label>
                <input onChange={this.handleEmail}/>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field required>
                <Button.Group color='teal'>
                <Button>Status</Button>
                <Dropdown onChange={this.handleStatus} options={options} floating button />
                </Button.Group>
              </Form.Field>
              <Form.Field>
                <DatePicker onChange={this.handleDate} value={this.state.date} hintText="Date of Status"/>
              </Form.Field>
            </Form.Group>
              <Form.Field>
                <label>Notes</label>
                <TextArea onChange={this.handleNotes} />
              </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='teal' onClick={this.saveJob}>
            <Icon name='checkmark' /> Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addCardToList: (status, jobCard) => dispatch(addCardToList(status, jobCard))
  };
};

export default connect(null, mapDispatchToProps)(JobForm);