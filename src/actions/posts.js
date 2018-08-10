import type Post from '../models/post';
import postService from '../services/post-service';

export function fetchPosts() {
  return (function(dispatch){
    dispatch ({type: 'GET_POSTS_REQUEST'});
    postService.get()
    .then((posts) => dispatch({type: 'GET_POSTS_SUCCESS', posts }))
    .catch((error) => dispatch ({type: 'GET_POSTS_ERROR', error}));
  });
}
