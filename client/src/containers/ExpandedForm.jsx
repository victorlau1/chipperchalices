import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import {Dialog, Avatar} from 'material-ui';
import {IconButton, FontIcon} from 'material-ui';
import {DatePicker, TimePicker} from 'material-ui';
import AllOut from 'material-ui/svg-icons/action/all-out';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

export default class ExpandedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleAppLink = this.handleAppLink.bind(this);
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  handleAppLink() {
    const { position_url } = this.props.job;
    let appLink = position_url;
    let httpCheck = position_url.slice(0, 4);

    if (httpCheck !== 'http') {
      appLink = `http://${position_url}`;
    }
    return appLink;
  }

  render() {
    const { position, position_url, recruiter_name, recruiter_email, notes } = this.props.job;
    const { name, logo_url } = this.props.job.company;


    return (
      <Modal trigger={<Button size='mini' floated='right' color='white' circular icon='expand' onClick={this.handleClick}/>}
        open={this.state.open}
        onClose={this.handleClick}
        size='small'
      >
        <Modal.Header><h2>{position} at {name}</h2></Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={logo_url} />
          <Modal.Description>

            <Header>Recruiter: {recruiter_name}</Header>
            <p>Recruiter Email: {recruiter_email}</p>
            <p>Application: <a target='_blank' href={this.handleAppLink()}>{position_url}</a></p>
            <p>Notes: {notes}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

