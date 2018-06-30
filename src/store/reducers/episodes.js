import type { Episode } from '../../models/episodes';
import type { Action } from '../../models/actions';
import initialStore from '../initialStore';

type EpisodesState = {
  data: Episode[],
  loading: boolean,
  error: ?string,
  needsUpdate: boolean
}


function episodesReducer(state: EpisodesState = initialStore.episodes, action: Action): EpisodesState {
	switch (action.type) {

  // handling asynchronous actions
	case 'GET_EPISODES_REQUEST':
    return {
      ...state,
      loading: true
    };

  case 'GET_EPISODES_SUCCESS':
    return {
      ...state,
      data: action.episodes,
      loading: false,
      needsUpdate: false
    };
  case 'GET_EPISODES_FAILURE':
    return {
      ...state,
      loading: false,
      error: action.error
    };
  default:
      return {
        ...state
      }
  }
}

export default episodesReducer;



