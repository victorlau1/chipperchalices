import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import JobCard from './JobCard.jsx';

const Types = {
  CARD: 'card'
};

const cardSource = {
  beginDrag(props, monitor, component) {
    // return the data describing the dragged item
    const item = {
      x: props.x,
      id: props.job.id,
      job: props.job,
      status: props.status
    };
    // console.log('hello within BeginDrag! item:', item);
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
  },

  // Because the component gets unmounted while dragging, this function is used to retain the dragged appearance
  isDragging(props, monitor) {
    return monitor.getItem().id === props.job.id;
  }
};

// Specifies which props to inject into your component.
const collect = (connect, monitor) => {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
};

class DraggableJobCard extends Component {
  componentDIdMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const { isDragging, connectDragSource, job, x } = this.props;

    return connectDragSource(
      <div>
        {isDragging}
        <JobCard job={job} x={x}/>
      </div>
    );
  }
}

export default DragSource(Types.CARD, cardSource, collect)(DraggableJobCard);