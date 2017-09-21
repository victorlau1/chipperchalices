import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

import DraggableJobCard from './DraggableJobCard.jsx';
import { toStatus } from '../helpers/status.js';
import { moveCard } from '../actions/index.js';
import { CARD_HEIGHT, CARD_MARGIN, OFFSET_HEIGHT } from '../constants.js';

const Types = {
  CARD: 'card'
};

const spec = {
  drop(targetProps, monitor, component) {
    // returns an object that will become the drop result, available to the drag source in its endDrag method
    // good place to fire redux actions
    // document.getElementById(monitor.getItem().id).style.display = 'block';

    const { status, moveCard } = targetProps;
    let item = monitor.getItem();

    const lastStatus = item.status;
    const lastX = item.x;
    const job = item.job;
    const nextStatus = status;
    // let nextX = TODO
    let nextX = '';

    var content = {
      id: job.id,
      job: {
        title: job.position,
        company: job.company.name,
        notes: job.notes,
        url: job.position_url
      },
      status: {
        date: job.updated_at,
        status: toStatus(nextStatus)
      }
    };
    //console.log('content sent to update card PUT', content);

    moveCard(content, lastStatus, nextStatus, lastX, nextX);
  },

  hover(targetProps, monitor, component) {
    // where placeholder is rendered

    // const placeholderIndex = getPlaceholderIndex(monitor.getClientOffset().x);
    // component.setState({ placeholderIndex });

    const sourceProps = monitor.getItem();
    // console.log('dragging note sourceProps:', sourceProps, 'targetProps:', targetProps);
  }
};

// specifies which props to inject into the component (TODO utilize offset to get placeholder index)
const collect = (connect, monitor) => {
  return {
    // call connectDropTarget inside render() to let reactDnD handle drag events:
    connectDropTarget: connect.dropTarget(),
    // ask monitor about the current drag state:
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    item: monitor.getItem(),
    dropTarget: monitor.getDropResult(),
    offset: monitor.getClientOffset()
  };
};


class ListContainer extends Component {
  render() {
    // props injected by React DnD, as defined by the 'collect' function above:
    const { status, jobs, isOver, canDrop, connectDropTarget, dropTarget, item, offset } = this.props;

    return connectDropTarget(
      <div>
        {jobs.map((job, i) => (
          <DraggableJobCard
            key={i}
            x={i}
            job={job}
            status={status}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCard: (item, lastStatus, nextStatus, lastX, nextX) =>
      dispatch(moveCard(item, lastStatus, nextStatus, lastX, nextX))
  };
};

ListContainer = DropTarget(Types.CARD, spec, collect)(ListContainer);
export default connect(null, mapDispatchToProps)(ListContainer);