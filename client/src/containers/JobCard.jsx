import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { DragSource } from 'react-dnd';

import ExpandedForm from './ExpandedForm.jsx';
import EditForm from './EditForm.jsx';
const moment = require('moment');

const Types = {
  CARD: 'card'
};

const cardSource = {
  beginDrag(props) {
    const item = { id: props.id };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    CardActions.moveCardToList(item.id, dropResult.listId);
  }
};

const collect = (connect, monitor) => {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
};

class JobCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      age: moment().diff('days', moment(this.props.job.date))
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
    console.log('Newly rendered company name:', job.company.name);

    const { id } = this.props;
    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
      <div>
        {isDragging}
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
            <a href={job.positionUrl}>Job Description</a>
          </CardText>
          <EditForm job={job} updateJob={this.updateJob}/>
          <ExpandedForm job={job} />
        </Card>
      </div>
    );
  }
}

export default DragSource(Types.CARD, cardSource, collect)(JobCard);
