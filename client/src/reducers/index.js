import { combineReducers } from 'redux';
import JobsReducer from './reducer_jobcards.js';
import InterestJobsReducer from './reducer_interestjobs.js';

// any key added to the combineReducers will be added as key to the global application state

const rootReducer = combineReducers({
  //state: (state = {}) => state
  dummyJobs: JobsReducer,
  interestJobs: InterestJobsReducer
});

export default rootReducer;
