import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Card, Header, Icon, Segment } from 'semantic-ui-react';
import Paper from 'material-ui/Paper';
// import Grid from 'material-ui/Grid';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import InterestList from './InterestList.jsx';
import AppliedList from './AppliedList.jsx';
import InterviewList from './InterviewList.jsx';
import PostInterviewList from './PostInterviewList.jsx';
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
    console.log('Fetched cards from lifecycleBoard!', this.props.fetched);

    return (
      <div>
        <Grid divided centered columns={4} padded='horizontally'>
          <Grid.Column width={3.5}>
            <Segment raised textAlign='center' size='huge' color='blue'>
              Interested
            </Segment>
            <InterestList />
          </Grid.Column>
          <Grid.Column width={3.5}>
            <Segment raised textAlign='center' size='huge' color='blue'>
              Applied
            </Segment>
            <AppliedList />
          </Grid.Column>
          <Grid.Column width={3.5}>
            <Segment raised textAlign='center' size='huge' color='blue'>
              Interview Scheduled
            </Segment>
            <InterviewList />
          </Grid.Column>
          <Grid.Column width={3.5}>
            <Segment raised textAlign='center' size='huge' color='blue'>
              Interviewed
            </Segment>
            <PostInterviewList />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

/* REDUX: everytime the application state changes, the container will re-render and update the props */

const mapStateToProps = (state) => {
  // whatever is returned will show up as props inside of InterestList
  return {
    hasErrored: state.cardsHasErrored,
    fetched: state.cardsAreFetched
  };
};

// dispatch connects to actions
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (status) => dispatch(fetchCards(status))
  };
};

LifecycleBoard = DragDropContext(HTML5Backend)(LifecycleBoard);
export default connect(mapStateToProps, mapDispatchToProps)(LifecycleBoard);

