import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './app';

import './sass/main.scss';


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
 , document.getElementById("root")
)
