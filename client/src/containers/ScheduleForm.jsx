// import React from 'react'
// import { Button, Icon,  Header, Image, Modal } from 'semantic-ui-react'

// const ScheduleForm = () => (
//   <Modal trigger={<Button floated='right' color='teal' circular icon='add to calendar'/>}>
//     <Modal.Header>Add to Calendar</Modal.Header>
//     <Modal.Content >
//       <Modal.Description>
//         <Header>Default Profile Image</Header>
//         <p>We've found the following gravatar image associated with your e-mail address.</p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )

// export default ScheduleForm;


import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

export default class ScheduleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

  };

  handleOpen() {
    this.setState({ modalOpen: true })
  }

  handleClose() {
    this.setState({ modalOpen: false })
  }

  // componentDidMount() {

  // }


  render() {

    return (
      <Modal trigger={<Button floated='right' color='teal' circular icon='add to calendar' onClick={this.handleOpen}/>}
      onClose={this.handleClose}
      >
        <Modal.Header>Add Interview to Google Calendar</Modal.Header>
        <Modal.Content >
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Add to Calendar
          </Button>
        </Modal.Actions>
      </Modal>
    )

  }

};




