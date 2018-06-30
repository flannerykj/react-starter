import type { Episode } from '../../models/episodes';
import type { Action } from '../../models/actions';

type EpisodesState = {
  data: Episode[],
  loading: boolean,
  error: ?string,
}

const initialState: EpisodesState = {
  data: [],
  loading: false,
  error: null
};



function episodesReducer(state: EpisodesState = initialState, action: Action): EpisodesState {
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
      data: action.episodes
      loading: false
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



