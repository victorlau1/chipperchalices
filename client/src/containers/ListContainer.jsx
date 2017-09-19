import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

// import List from './InterestList.jsx';
import DraggableJobCard from './DraggableJobCard.jsx';
import { CARD_HEIGHT, CARD_MARGIN, OFFSET_HEIGHT } from '../constants.js';

// const getPlaceholderIndex = (y) => {
//   // shift placeholder if y position more than card height / 2
//   const yPos = y - OFFSET_HEIGHT;
//   let placeholderIndex;
//   if (yPos < CARD_HEIGHT / 2) {
//     placeholderIndex = -1; // place at the start
//   } else {
//     placeholderIndex = Math.floor((yPos - CARD_HEIGHT / 2) / (CARD_HEIGHT + CARD_MARGIN));
//   }
//   console.log('PlaceholderIndex!', placeholderIndex);
//   return placeholderIndex;
// };


const Types = {
  CARD: 'card'
};

const spec = {
  drop(targetProps, monitor, component) {
    // returns an object that will become the drop result, available to the drag source in its endDrag method
    // good place to fire redux actions
    // document.getElementById(monitor.getItem().id).style.display = 'block';

    // const { placeholderIndex } = component.state;

    let item = monitor.getItem();
    console.log('item within drop spec', item);
    const lastStatus = monitor.getItem().status;
    const lastX = item.x;
    const job = item.job;
    const nextStatus = targetProps.status;
    // let nextX = placeholderIndex;
    let nextX = 1;


    // if (lastX > nextX) { // move top
    //   nextX += 1;
    // } else if (lastStatus !== nextStatus) { // insert into another list
    //   nextX += 1;
    // }

    // if (lastStatus === nextStatus && lastX === nextX) { // if position equel
    //   return;
    // }

    console.log('After drop job', job, 'lastStatus', lastStatus, 'lastX', lastX, 'nextStatus', nextStatus, 'nextX', nextX);
    targetProps.moveCard(job, lastStatus, lastX, nextStatus, nextX);
  },

  hover(targetProps, monitor, component) {
    // where placeholder is rendered

    // const placeholderIndex = getPlaceholderIndex(monitor.getClientOffset().x);
    // component.setState({ placeholderIndex });

    const sourceProps = monitor.getItem();
    // document.getElementById(item.id)
    console.log('dragging note sourceProps:', sourceProps, 'targetProps:', targetProps);
  }
};

// specifies which props to inject into the component
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


export default DropTarget(Types.CARD, spec, collect)(ListContainer);

// export default connect(mapStateToProps)(ListContainer);



// console.log('item from ListContainer collect', item);
// console.log('dropTarget from ListContainer collect', dropTarget)
// console.log('clientOffset from ListContainer collect', offset)

