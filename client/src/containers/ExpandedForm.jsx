import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import {Dialog, Avatar} from 'material-ui';
import {IconButton, FontIcon} from 'material-ui';
import {DatePicker, TimePicker} from 'material-ui';
import AllOut from 'material-ui/svg-icons/action/all-out';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default class ExpandedModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      job: this.props.job,
      status: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {

    return (
      <Modal trigger={<Button size='mini' floated='right' color='blue' circular icon='expand' onClick={this.handleClick}/>}
        open={this.state.open}
        onClose={this.handleClick}
        size='small'
      >
        <Modal.Header>{this.state.job.position} at {this.state.job.company.name}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={this.state.job.company.logo_url} />
          <Modal.Description>
            <Header>Recruiter: {this.state.job.recruiter_name}</Header>
            <p>Recruiter Email: {this.state.job.recruiter_email}</p>
            <p>Application: <a href={this.state.job.position_url}>{this.state.job.position_url}</a></p>
            <p>Notes: {this.state.job.notes}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
