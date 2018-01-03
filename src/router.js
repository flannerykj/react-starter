import React from 'react';
import {Router, Route, Redirect, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

import FormContainer from './containers/FormContainer';

export const router =
  (
    <Router history={history}>
        <Switch>
          <Route exact path='/' component={FormContainer} />
          <Route exact path='/posts' render={() =>
                (
                  <div>
                    Main Page!
                  </div>
                )
            }/>
        </Switch>
    </Router>
    )

