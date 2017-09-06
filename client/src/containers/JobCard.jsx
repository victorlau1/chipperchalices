import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class JobCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const job = this.props.job;

    return (
      <Card className='job-entry'>
        <CardHeader
          title={job.position}
          subtitle='Quantified @ Menlo Park, CA'
        />
      </Card>
    );
  }
}