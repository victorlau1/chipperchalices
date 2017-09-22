import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Landing from './page-components/Landing.jsx';
import Analytic from './page-components/Analytic.jsx';
import User from './page-components/User.jsx';
import store from './store';

import { lightBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

const App = () => (
  <div>
    <main style={{ backgroundColor: "#F7F7F7", display: 'flex', flex: 1, flexDirection: 'column', minHeight: '80vh' }}>
      <Header />
      <Switch>
        <Route exact path='/' component={User} />
        <Route path='/landing' component= {Landing}/>
        <Route path='/analytic' component={Analytic}/>
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
