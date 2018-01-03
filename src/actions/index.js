

export function getPosts(){
  return (function(dispatch){
    dispatch ({type: 'REQUEST_POSTS'});
    dispatch({type: 'RECEIVE_POSTS'});
  });
}
