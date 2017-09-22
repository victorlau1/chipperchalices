import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__INITIAL_STATE__;

// Redux store holds the complete state tree of your app.
const store = createStore (
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

