import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsAreFetched } from './reducer_jobcards.js';

// any key added to the combineReducers will be added as key to the global application state

const rootReducer = combineReducers({
  //state: (state = {}) => state
  cards,
  cardsHasErrored,
  cardsAreFetched,

});

export default rootReducer;
