import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Landing from './page-components/Landing.jsx';
import User from './page-components/User.jsx';
import store from './store';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={User} />
        <Route path='/landing' component= {Landing}/>
      </Switch>
    </main>
  </div>
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
