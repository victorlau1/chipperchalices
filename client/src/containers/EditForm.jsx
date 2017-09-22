import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import {DatePicker, TimePicker} from 'material-ui';
import { Button, Header, Image, Modal, Icon, Form, Dropdown, TextArea } from 'semantic-ui-react';

import { moveCard } from '../actions/index.js';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      title: '',
      company: '',
      date: moment().toDate(),
      status: '',
      notes: '',
      url: '',
      value: 0,
      change: false,
      recruiter: '',
      recruiterEmail: ''
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

  //TO DO: Refactor State into Singular Object
  componentDidMount() {
    let dat = this.props.job;
    console.log('this.props.job!!', dat);
    this.setState({
      modalOpen: false,
      id: dat.id,
      title: dat.position,
      company: dat.company.name,
      company_id: dat.company.id,
      date: moment(dat.updated_at).toDate(),
      status: dat.current_status,
      notes: dat.notes,
      url: dat.position_url,
      value: 0,
      recruiter_name: dat.recruiter_name,
      recruiter_email: dat.recruiter_email
    });
  }

  //Move to Action/Reducer in Redux
  //TO DO: refactor into less functions

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  handleTitle (e) {
    this.setState({
      change: true,
      title: e.target.value
    });
  }

  handleCompany (e) {
    this.setState({
      change: true,
      company: e.target.value
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

  handleNotes (e) {
    this.setState({
      change: true,
      notes: e.target.value
    });
  }

  handleURL (e) {
    this.setState({
      change: true,
      url: e.target.value
    });
  }

  handleStatus (event, index, value) {
    this.setState({
      change: true,
      status: event.target.textContent,
      value: value,
    });
  }

  handleDate (e, date) {
    this.setState({
      change: true,
      date: moment(date).toDate()
    });
  }

  saveJob () {
    const { x, job } = this.props;

    this.handleClose();
    //If change then saveJob
    if (!this.state.change) {
      return 'No Changes';
    }
    //Is an action instead of a CB
    var form = this;
    // Add more to object later
    var content = {
      id: this.state.id,
      job: {
        title: this.state.title,
        company: this.state.company,
        notes: this.state.notes,
        url: this.state.url,
        recruiter_name: this.state.recruiter,
        recruiter_email: this.state.recruiterEmail
      },
      status: {
        date: this.state.date,
        status: this.state.status
      }
    };

    // moveCard(content, job.current_status, this.state.status, x)
    //   .then(function(response) {
    //     form.setState({
    //       open: false,
    //     });
    //     console.log('sent to server');
    //   })
    //   .catch(function(error) {
    //     form.setState({
    //       open: false,
    //     });
    //     console.log('error in editForm moveCard', error);
    //   })

    return axios.put('/card/update', content)
      .then(function(response) {
        form.setState({
          open: false,
        });
        console.log('sent to server');
      })
      .catch(function(error) {
        form.setState({
          open: false,
        });
        console.log('error', error);
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
    ];

    return (
      <Modal trigger={<Button size='mini' floated='right' color='white' circular icon='write' onClick={this.handleOpen} />}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='large'>
        <Modal.Header>Edit Application</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={this.props.job.company.logo_url} />
          <Form>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Position</label>
                <input defaultValue={this.state.title} onChange={this.handleTitle}/>
              </Form.Field>
              <Form.Field>
                <label>Company</label>
                <input defaultValue={this.state.company} onChange={this.handleCompany}/>
              </Form.Field>
              <Form.Field>
                <label>Application Link</label>
                <input defaultValue={this.state.url} onChange={this.handleURL}/>
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Recruiter Name</label>
                <input defaultValue={this.state.recruiter_name} onChange={this.handleRecruiter}/>
              </Form.Field>
              <Form.Field>
                <label>Recruiter Email</label>
                <input defaultValue={this.state.recruiter_email} onChange={this.handleEmail}/>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field>
                <Button.Group color='teal'>
                  <Button>Status</Button>
                  <Dropdown onChange={this.handleStatus} options={options} floating button />
                </Button.Group>
              </Form.Field>
              <Form.Field>
                <DatePicker onChange={this.handleDate} defaultValue={this.state.date} value={this.state.date}/>
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Notes</label>
              <TextArea defaultValue={this.state.notes} onChange={this.handleNotes} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='teal' onClick={this.saveJob}>
            <Icon name='checkmark' /> Update
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCard: (card, lastStatus, nextStatus, lastX, nextX) => dispatch(moveCard(card, lastStatus, nextStatus, lastX, nextX))
  };
};

// function mapStateToProps () {

// }

export default connect(null, mapDispatchToProps)(EditForm);
