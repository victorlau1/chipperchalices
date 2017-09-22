import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsAreFetched } from './reducer_jobcards.js';
import { user } from './reducer_user.js';

// any key added to the combineReducers will be added as key to the global application state

const rootReducer = combineReducers({
  //state: (state = {}) => state
  user,
  cards,
  cardsHasErrored,
  cardsAreFetched,
});

export default rootReducer;
