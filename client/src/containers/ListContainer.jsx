import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

import List from './InterestList.jsx';
import { CARD_HEIGHT, CARD_MARGIN, OFFSET_HEIGHT } from '../constants.js';

const spec = {
  drop(props, monitor, component) {
    // returns an object that will become the drop result, availabl to the drag source in its endDrag method
    // good place to fire redux actions
    if (monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();
    console.log('MONITOR GET ITEM INFO:', item);

    props.moveCard(lastStatus, lastX, nextStatus, nextX);

  },

  // hover(props, monitor, component) {
  // }
};

// const DropTarget

// const DragSource

export default class ListContainer extends Component {
  render() {

  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCard: (lastStatus, lastX, nextStatus, nextX) => {
      dispatch(moveCard(lastStatus, lastX, nextStatus, nextX));
    }
  };
};

// make action for MOVE_CARD
// splices the original status array at lastX
// updates the status index by splicing at nextX
//