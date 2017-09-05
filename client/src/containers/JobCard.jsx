import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class JobCard extends Component {
  render() {
    return (
      <Card className='job-entry'>
        <CardHeader
          title='Frontend SWE'
          subtitle='Quantified @ Menlo Park, CA'
        />
      </Card>
    );
  }
}