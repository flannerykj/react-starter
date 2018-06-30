import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './app';

import './sass/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <div className='app-container'>
      <div className='wrapper page-content'>
        Page Content
        <App/>
      </div>
    </div>
  </Provider>
 , document.getElementById("root")
)
