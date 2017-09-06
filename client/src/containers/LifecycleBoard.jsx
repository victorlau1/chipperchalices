import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
// import Grid from 'material-ui/Grid';

import InterestList from './InterestList.jsx';
import AppliedList from './AppliedList.jsx';
import InterviewList from './InterviewList.jsx';
import PostInterviewList from './PostInterviewList.jsx';


const style = {
  padding: 3,
  textAlign: 'center',
};

class LifecycleBoard extends Component {


  render() {
    return (
      <div>
        <Grid>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>
              <h2>Interest</h2>
            </Paper>
            <br />
            <InterestList />
          </Col>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>
              <h2>Applied</h2>
            </Paper>
            <br />
            <AppliedList />
          </Col>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>
              <h2>Interview</h2>
            </Paper>
            <br />
            <InterviewList />
          </Col>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>
              <h2>Post-Interview</h2>
            </Paper>
            <br />
            <PostInterviewList />
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