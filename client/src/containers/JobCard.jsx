import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import EditForm from './EditForm.jsx';

class JobCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.updateJob = this.updateJob.bind(this);
  }

  handleExpandChange(expanded) {
    this.setState({expanded});
  }

  updateJob(data) {
    console.log(data);
  }
  render() {
    const job = this.props.job;

    return (
      <Card className='job-card' expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={job.company.name}
          subtitle={job.position}
          avatar={job.company.logoUrl}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title={job.company.name} subtitle={job.company.location} expandable={true} />
        <CardText expandable={true}>
          {job.company.description}
          <br/>
          <a href={job.applicationUrl}>Job Description</a>
        </CardText>
        <EditForm job={job} updateJob={this.updateJob}/>
      </Card>
    );
  }
}

export default JobCard;