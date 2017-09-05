import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class PostInterviewList extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title='Frontend SWE'
          subtitle='Quantified @ Menlo Park, CA'
        />
      </Card>
    );
  }
}