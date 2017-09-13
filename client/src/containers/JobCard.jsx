import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { DragSource } from 'react-dnd';

import EditForm from './EditForm.jsx';
const moment = require('moment');

const now = moment();

const colors = {
  Green: '#8CC152',
  darkGreen: '#008000',
  Red: '#E9573F',
  Yellow: '#F6BB42',
  chartreuse: '#7fff00',
  greenYellow: '#adff2f',
  salmon: '#ffa07a',
  orange: '#ffa500'
};

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
      expanded: false
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
    //console.log('Newly rendered company name:', job.company.name);
    const start = moment(job.date).format('YYYY-MM-DD');
    const { id } = this.props;
    const { isDragging, connectDragSource } = this.props;

    var age = now.diff(moment(start), 'days');
    var styles =  function() {
      if (age <= 4) {
        return colors.darkGreen;
      } else if (age <=8) {
        return colors.green;
      // } else if (age <=11){
      //   return colors.greenYellow;
      } else if (age <= 14) {
        return colors.Yellow;
      } else if (age <= 17 ) {
        return colors.orange;
      } else {
        return colors.Red;
      }
    };
    return connectDragSource(
      <div>
        {isDragging}
        <Card className='job-card' expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{backgroundColor: styles()}}>
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
        </Card>
      </div>
    );
  }
}

export default DragSource(Types.CARD, cardSource, collect)(JobCard);