// @flow
import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/pages/home';
import history from './history';

export default class App extends Component<{}> {

  render() {
    return (
      <Router history={history}>
        <div className='main'>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
