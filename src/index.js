import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import PostList from './containers/PostListContainer';


import './sass/main.scss';

class App extends React.Component {



  render() {
    return (
      <Provider store={store}>
        <div className='app-container'>
          <div className='wrapper page-content'>
            Page Content
            <PostList />
          </div>
        </div>
      </Provider>
        );
    }
};

ReactDOM.render(<App/>, document.getElementById("root"))
