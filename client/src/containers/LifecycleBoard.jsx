import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
// import Grid from 'material-ui/Grid';

import InterestList from './InterestList.jsx';
import AppliedList from './AppliedList.jsx';
// import InterviewList from './InterviewList.jsx';
// import PostInterviewList from './PostInterviewList.jsx';


const style = {
  padding: 16,
  textAlign: 'center',
};

class LifecycleBoard extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>
              Interest
            </Paper>
            <InterestList />
          </Col>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>Applied</Paper>
            <AppliedList />
          </Col>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>Interview</Paper>
          </Col>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>Post-Interview</Paper>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default LifecycleBoard;


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