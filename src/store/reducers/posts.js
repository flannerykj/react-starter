import type { Post } from '../../models/posts';
import type { Action } from '../../models/actions';
import initialStore from '../initialStore';

type PostsState = {
  data: Post[],
  loading: boolean,
  error: ?string,
  needsUpdate: boolean
}


function postsReducer(state: PostsState = initialStore.posts, action: Action): PostsState {
	switch (action.type) {

  // handling asynchronous actions
	case 'GET_POSTS_REQUEST':
    return {
      ...state,
      loading: true
    };

  case 'GET_POSTS_SUCCESS':
    return {
      ...state,
      data: action.posts,
      loading: false,
      needsUpdate: false
    };
  case 'GET_POSTS_FAILURE':
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

export default postsReducer;



