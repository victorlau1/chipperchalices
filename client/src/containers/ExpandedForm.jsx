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
   /*PREVIOUS CODE (INCLUDED FOR UI REFACTOR REFERENCING)
    Dialog Width
    const dStyle = {
      width: '90%',
      height: '75%'
    };

    const logoStyle = {
      position: 'right',
    };

    const textStyle = {
      width: '80%',
      cursor: 'auto'
    };

    const textInputStyle = {
      cursor: 'auto',
      color: 'black'
    };

    const actions = [
      <IconButton onClick={this.handleClick}>
        <AllOut />
      </IconButton>
    ];
    */


/*PREVIOUS CODE (INCLUDED FOR UI REFACTOR REFERENCING)*/
/***************************************************************************************************
return (
      <div>
        <IconButton tooltip="See More Info" onClick={this.handleClick}>
          <AllOut />
        </IconButton>
        <Dialog
          title="Expanded Info"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClick}
          contentStyle={dStyle}
          autoScrollBodyContent={true}
        >
          <Avatar style={logoStyle} size={45} src={this.state.job.company.logo_url}/><br/>
          <TextField disabled={this.state.status} inputStyle={textInputStyle} style={textStyle} floatingLabelText={'Company Name'} id={'companyName'} value={this.state.job.company.name} /><br/>
          <TextField disabled={this.state.status} inputStyle={textInputStyle} style={textStyle} floatingLabelText={'Company Location'} id={'companyLocation'} value={this.state.job.company.location} /><br/>
          <TextField disabled={this.state.status} inputStyle={textInputStyle} style={textStyle} floatingLabelText={'Job Position'} id={'position'} value={this.state.job.position} /><br/>
          <TextField disabled={this.state.status} inputStyle={textInputStyle} style={textStyle} floatingLabelText={'Position Url'} id={'positionUrl'} value={this.state.job.position_url} /><br/>
          <TextField disabled={this.state.status} inputStyle={textInputStyle} style={textStyle} multiLine={true} rows={4} floatingLabelText={'Company Description'} id={'companyDescription'} value={this.state.job.company.description} /><br/>
          <TextField disabled={this.state.status} inputStyle={textInputStyle} style={textStyle} floatingLabelText={'Status Date'} id={'date'} value={this.state.job.statusdate} /><br/>
          <TextField disabled={this.state.status} inputStyle={textInputStyle} style={textStyle} floatingLabelText={'Recruiter Name'} id={'recruiterName'} value={this.state.job.recruiterName} /><br/>
          <TextField disabled={this.state.status} inputStyle={textInputStyle} style={textStyle} floatingLabelText={'Recruiter Email'} id={'recruiterEmail'} value={this.state.job.recruiterEmail} /><br/>
          <TextField disabled={this.state.status} inputStyle={textInputStyle} style={textStyle} multiLine={true} rows={4} floatingLabelText={'Notes'} id={'notes'} value={this.state.job.notes} /><br/>
        </Dialog>
      </div>
    );
    *********************************************************************************************/


