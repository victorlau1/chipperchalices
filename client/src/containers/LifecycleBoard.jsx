import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import InterestList from './InterestList.jsx';
import AppliedList from './AppliedList.jsx';
// import InterviewList from './InterviewList.jsx';
// import PostInterviewList from './PostInterviewList.jsx';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const LifecycleBoard = props => {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Interest</Paper>
          <InterestList />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Applied</Paper>
          <AppliedList />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Interview</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Post-Interview</Paper>
        </Grid>
      </Grid>
    </div>
  );
};


export default withStyles(styles)(LifecycleBoard);

// class LifecycleBoard extends Component {
//   render() {
//     return (
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>Interest</th>
//             <th>Applied</th>
//             <th>Interview</th>
//             <th>Post-Interview</th>
//           </tr>
//         </thead>
//         <tbody>
//         </tbody>
//       </table>
//     )
//   }
// }