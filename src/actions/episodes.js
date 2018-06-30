import type Episode from '../models/episode';
import data from '../data.js';

export function fetchPosts() {
  return (function(dispatch){
    dispatch ({type: 'GET_EPISODES_REQUEST'});
    dispatch({type: 'GET_EPISODES_SUCCESS'});
  });
}
