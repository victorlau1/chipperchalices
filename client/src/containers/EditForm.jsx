import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import {DatePicker, TimePicker} from 'material-ui';
import { Button, Header, Image, Modal, Icon, Form, Dropdown, TextArea } from 'semantic-ui-react'


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
  }

  //TO DO: Refactor State into Singular Object
  componentDidMount() {
    let dat = this.props.job;
    this.setState({
      modalOpen: false,
      id: dat.id,
      title: dat.position,
      company: dat.company.name,
      company_id: dat.company.id,
      date: moment(dat.date).toDate(),
      status: dat.currentStatus,
      notes: dat.notes,
      url: dat.position_url,
      value: 0,
      recruiter: dat.recruiterName,
      recruiterEmail: dat.recruiterEmail
    });
  }

  //Move to Action/Reducer in Redux
  //TO DO: refactor into less functions

  handleOpen() {
    this.setState({ modalOpen: true })
  }

  handleClose() {
    this.setState({ modalOpen: false })
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
        url: this.state.url
      },
      status: {
        date: this.state.date,
        status: this.state.status
      }
    };

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
    ]

    return (
      <Modal trigger={<Button size='mini' floated='right' color='green' circular icon='write' onClick={this.handleOpen} />}
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
                <input defaultValue={this.state.title} onChange={this.handleTitle}/>
              </Form.Field>
              <Form.Field>
                <label>Recruiter Email</label>
                <input defaultValue={this.state.company} onChange={this.handleCompany}/>
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





// function mapDispatchToProps () {

//}

// function mapStateToProps () {

// }

export default EditForm;


/*PREVIOUS CODE
return (
      <div>
        <FlatButton style={style} labelStyle={{fontSize: '9px'}} label='Edit' onClick={this.handleClick}/>
        <Dialog
          title="Edit Form"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClick}
        >
          <TextField onChange={this.handleTitle} defaultValue={this.state.title} errorText="This field is required"/><br/>
          <TextField onChange={this.handleCompany} defaultValue={this.state.company} errorText="This field is required"/><br/>
          <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleStatus}>
            {items}
          </DropDownMenu><br/>
          <DatePicker onChange={this.handleDate} value={this.state.date}/><br/>
          <TextField onChange={this.handleURL} defaultValue={this.state.url}/><br/>
          <TextField onChange={this.handleNotes}
            defaultValue={this.state.notes}
            multiLine={this.state.notes === 'null' ? true : false}
            rows={1} rowsMax={10}
            hintText={'Notes'}/><br/>
        </Dialog>
      </div>
    );
  */