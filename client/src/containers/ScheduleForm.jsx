import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import { Button, Header, Image, Modal, Icon, Form } from 'semantic-ui-react'
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

export default class ScheduleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      event: '',
      location: '',
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEventName = this.handleEventName.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);

  };

  handleOpen() {
    this.setState({ modalOpen: true })
  }

  handleClose() {
    this.setState({ modalOpen: false })
  }

  handleEventName(e) {
    this.setState({
      event: e.target.value
    })
  }

  handleLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  handleStartDate(e, date) {
    this.setState({
      startDate: date
    })
  }

  handleStartTime(e, time) {
    this.setState({
      startTime: time
    })
  }

  handleEndDate(e, date) {
    this.setState({
      endDate: date
    })
  }

  handleEndTime(e, time) {
    this.setState({
      endTime: time
    })
  }

  addEvent() {
    this.setState({
      modalOpen: false
    })

    console.log('schedule submitted!')
    var form = this;
    var content = {
      event: this.state.event,
      location: this.state.location,
      startDate: this.state.startDate,
      startTime: this.state.startTime,
      endDate: this.state.endDate,
      endTime: this.state.endTime
    };

    return axios.post('/calendar', content)
    .then((response) => {
      console.log('Event added to Google Calendar!');
    })
    .catch((error) => {
      console.log('Error saving event to Google Calendar: ', error);
    })
  }


  render() {

    return (
      <Modal
        trigger={<Button size='mini' floated='right' color='teal' circular icon='add to calendar' onClick={this.handleOpen} />}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
      >
        <Modal.Header> Add to Google Calendar </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Event Name:</label>
              <input placeholder='Onsite Interview @ Hack Reactor' onChange={this.handleEventName}/>
            </Form.Field>
            <Form.Field>
              <label>Location:</label>
              <input placeholder='944 Market Street, 8th Floor, San Francisco, CA 94102' onChange={this.handleLocation}/>
            </Form.Field>
            <Form.Field>
              <DatePicker hintText="Start Date" value={this.state.startDate} onChange={this.handleStartDate}/>
              <TimePicker
                format="ampm"
                hintText="Start Time"
                value={this.state.startTime}
                onChange={this.handleStartTime}
              /> <br/>
              <DatePicker hintText="End Date" value={this.state.endDate} onChange={this.handleEndDate}/>
              <TimePicker
                format="ampm"
                hintText="End Time"
                value={this.state.endTime}
                onChange={this.handleEndTime}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.addEvent}>
            <Icon name='checkmark' /> Save
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
};




