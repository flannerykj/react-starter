import type Episode from '../models/episode';
import episodeService from '../services/episode-service';

export function fetchPosts() {
  return (function(dispatch){
    dispatch ({type: 'GET_EPISODES_REQUEST'});
    episodeService.get()
    .then((episodes) => dispatch({type: 'GET_EPISODES_SUCCESS', episodes }))
    .catch((error) => dispatch ({type: 'GET_EPISODES_ERROR', error}));
  });
}
