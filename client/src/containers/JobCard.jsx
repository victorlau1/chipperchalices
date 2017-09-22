import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { Button, Icon, Card, Image, Grid, Modal, Segment, Label } from 'semantic-ui-react';
import ExpandedForm from './ExpandedForm.jsx';
import EditForm from './EditForm.jsx';
const moment = require('moment');
const now = moment();

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: moment().diff('days', moment(this.props.job.statusDate)),
      status: this.props.job.current_status
    };


    this.updateJob = this.updateJob.bind(this);
  }

  updateJob(data) {
    console.log(data);
  }

  render() {
    const { x, job, id } = this.props;
    const start = moment(job.statusDate).format('YYYY-MM-DD');

    var age = now.diff(moment(start), 'days');

    var statusChange, calendar;

    if (age <= 1) {
      statusChange = <Label circular color='green' inverted><Icon name='time' /> 1 day</Label>;
    } else if (age === 2) {
      statusChange = <Label circular color='green' inverted><Icon name='time' /> 2 days</Label>;
    } else if (age === 3) {
      statusChange = <Label circular color='green' inverted><Icon name='time' /> 3 days</Label>;
    } else if (age === 4) {
      statusChange = <Label circular color='olive' inverted><Icon name='time' /> 4 days</Label>;
    } else if (age === 5) {
      statusChange = <Label circular color='olive' inverted><Icon name='time' /> 5 days</Label>;
    } else if (age === 6) {
      statusChange = <Label circular color='olive' inverted><Icon name='time' /> 6 days</Label>;
    } else if (age === 7) {
      statusChange = <Label circular color='yellow' inverted><Icon name='time' /> 1 week</Label>;
    } else if (age > 7 && age <= 14) {
      statusChange = <Label circular color='yellow' inverted><Icon name='time' /> 1-2 weeks</Label>;
    } else if (age > 14 && age <= 21) {
      statusChange = <Label circular color='orange' inverted><Icon name='time' /> 2-3 weeks</Label>;
    } else if (age > 21) {
      statusChange = <Label circular color='red' inverted><Icon name='time' /> >3 weeks</Label>;
    }

    const googleLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${job.position}+Interview+at+${job.company.name}`;

    if (this.state.status === 'Interview Scheduled') {
      calendar = <Button target='_blank' href={googleLink} size='mini' floated='right' color='blue' circular icon='add to calendar'/>;
    } else {
      calendar = null;
    }

    var companyLink = `http://${job.company.company_url}`;

    return (
      <div>
        <Grid centered>
          <Grid.Row>
            <Card className='job-card'>
              <Card.Content >
                <Image target='_blank' href={companyLink} floated='left' size='tiny' src={job.company.logo_url} />
                <Card.Header>{job.company.name}</Card.Header>
                <Card.Meta>
                  {job.position}
                  <br/><br/>
                  {statusChange}
                  {calendar}
                  <ExpandedForm job={job} />
                  <EditForm job={job} x={x}/>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default JobCard;
