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
      // need to set x & y (x = list index, y = index within list)
      x: props.x,
      // y: props.y,
      id: props.job.id,
      job: props.job,
      status: props.status
    };
    console.log('hello within BeginDrag! ITEM:', item);
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log('DROP RESULT: ', dropResult);
    console.log('dropped Item!', item);
    // TODO: change dropResult --> listStatus?
    // CardActions.moveCardToList(item.id, dropResult.listId);
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
    const { isDragging, connectDragSource, job } = this.props;

    return connectDragSource(
      <div>
        {isDragging}
        <JobCard job={job} />
      </div>
    );
  }
}

export default DragSource(Types.CARD, cardSource, collect)(DraggableJobCard);