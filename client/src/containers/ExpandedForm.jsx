import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import {Dialog, Avatar} from 'material-ui';
import {IconButton, FontIcon} from 'material-ui';
import {DatePicker, TimePicker} from 'material-ui';
import AllOut from 'material-ui/svg-icons/action/all-out';
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react';

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
    const { name, logo_url, description, industry, rating } = this.props.job.company;

    return (
      <Modal trigger={<Button size='mini' floated='right' color='white' circular icon='expand' onClick={this.handleClick}/>}
        open={this.state.open}
        onClose={this.handleClick}
        size='small'
      >
        <Modal.Header style={{ fontSize: '2em' }}>{position} at {name}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid columns='two' divided>
              <Grid.Row columns={2} >
                <Grid.Column width={6}>
                  <Image src={logo_url} />
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                  <Header as='h3'>
                    <b>Recruiter:</b> {recruiter_name}
                  </Header>
                  <p><b>Recruiter Email:</b> {recruiter_email}</p>
                  <p><b>Application: </b><a target='_blank' href={this.handleAppLink()}>{position_url}</a></p>
                  <p><b>Notes:</b></p>
                  {notes}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column width={8}>
                  <Header as='h3' style={{ fontSize: '2em' }}>"{description}"</Header>
                </Grid.Column>
                <Grid.Column>
                  <p style={{ fontSize: '1.33em' }}>
                    <b>Glassdoor rating:</b> {rating}
                    <p/>
                    <b>Industry:</b> {industry}
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}