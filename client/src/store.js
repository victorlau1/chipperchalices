import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];


// Redux store holds the complete state tree of your app.
const store = createStore (
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;

