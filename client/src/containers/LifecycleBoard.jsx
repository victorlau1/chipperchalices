import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Card, Header, Icon, Segment } from 'semantic-ui-react';
import Paper from 'material-ui/Paper';
// import Grid from 'material-ui/Grid';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import ListContainer from './ListContainer.jsx';
import { fetchCards } from '../actions/index.js';


const style = {
  padding: 3,
  textAlign: 'center',
};

// Use named export for unconnected component (for tests)
export class LifecycleBoard extends Component {

  componentDidMount() {
    this.props.fetchCards('Interested');
  }

  render() {
    const { fetched, hasErrored, interestedJobs, appliedJobs, interviewScheduledJobs, interviewedJobs } = this.props;

    console.log('Fetched cards from lifecycleBoard!', fetched);

    return (
      <div>
        <Grid divided centered columns={4} padded='horizontally'>
          <Grid.Column width={3.5}>
            <Segment raised textAlign='center' size='huge' color='teal'>
              Interested
            </Segment>
            <ListContainer
              jobs={interestedJobs}
              status='interested'
            />
          </Grid.Column>
          <Grid.Column width={3.5}>
            <Segment raised textAlign='center' size='huge' color='teal'>
              Applied
            </Segment>
            <ListContainer
              jobs={appliedJobs}
              status='applied'
            />
          </Grid.Column>
          <Grid.Column width={3.5}>
            <Segment raised textAlign='center' size='huge' color='teal'>
              Interview Scheduled
            </Segment>
            <ListContainer
              jobs={interviewScheduledJobs}
              status='interviewScheduled'
            />
          </Grid.Column>
          <Grid.Column width={3.5}>
            <Segment raised textAlign='center' size='huge' color='teal'>
              Interviewed
            </Segment>
            <ListContainer
              jobs={interviewedJobs}
              status='interviewed'
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


/* REDUX: everytime the application state changes, the container will re-render and update the props */

const mapStateToProps = (state) => {
  return {
    interestedJobs: state.cards.interested,
    appliedJobs: state.cards.applied,
    interviewScheduledJobs: state.cards.interviewScheduled,
    interviewedJobs: state.cards.interviewed,
    hasErrored: state.cardsHasErrored,
    fetched: state.cardsAreFetched
  };
};

// dispatch connects to imported actions
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (status) => dispatch(fetchCards(status)),
  };
};

LifecycleBoard = DragDropContext(HTML5Backend)(LifecycleBoard);
export default connect(mapStateToProps, mapDispatchToProps)(LifecycleBoard);
