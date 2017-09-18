import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Landing from './page-components/Landing.jsx';
import Dashboard from './page-components/Dashboard.jsx';
import User from './page-components/User.jsx';
import store from './store';

import { lightBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={User} />
        <Route path='/about' component={Landing}/>
        <Route path='/test' component={Dashboard}/>
      </Switch>
    </main>
  </div>
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
