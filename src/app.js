// @flow
import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import EpisodeArchive from './components/pages/episode-archive';
import history from './history';

export default class App extends Component<{}> {

  render() {
    return (
      <Router history={history}>
        <div className='main'>
          <Switch>
            <Route path='/' component={EpisodeArchive} />
          </Switch>
        </div>
      </Router>
    );
  }
}
