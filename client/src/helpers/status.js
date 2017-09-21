
// Used in addCardToList action creator to convert from database status to state status
module.exports.fromStatus = (status) => {
  switch (status) {
  case 'Interested':
    return 'interested';
  case 'Applied':
    return 'applied';
  case 'Interview Scheduled':
    return 'interviewScheduled';
  case 'Interviewed':
    return 'interviewed';
  }
};

// Used in spec.drop function within ListContainer to convert from state status to database status
module.exports.toStatus = (stateStatus) => {
  switch (stateStatus) {
  case 'interested':
    return 'Interested';
  case 'applied':
    return 'Applied';
  case 'interviewScheduled':
    return 'Interview Scheduled';
  case 'interviewed':
    return 'Interviewed';
  }
};
