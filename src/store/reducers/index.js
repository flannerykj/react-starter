import {combineReducers} from 'redux';
import initialStore from "../initialStore";


const postsReducer = (currentState, action) => {
  switch(action.type){
    case 'REQUEST_POSTS':
      return Object.assign({}, currentState, {
        items: [],
        dataReceived: false
      });
    case 'RECEIVE_POSTS':
      return Object.assign({}, currentState, {
        items: ['my post'],
        dataReceived: true
      });
    case 'ADD_POST':
      return Object.assign({}, currentState, {
        items: ["new post added"]
      });
    case 'CLEAR_POSTS':
      return Object.assign({},currentState,{
        items: []
      });
    default:
      return currentState || initialStore.posts;
	}
};


const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;

