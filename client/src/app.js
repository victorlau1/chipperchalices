import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import Header from './components/Header.jsx';
import Landing from './page-components/Landing.jsx';
import User from './page-components/User.jsx';

import { lightBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/user' component={User} />
      </Switch>
    </main>
  </div>
);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
