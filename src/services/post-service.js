// @flow

import apiService from './api-service';

import type { Post } from '../models/posts';

class PostService {

  get(ids: string = ''): Promise<Post[]> {
    return apiService.get(`/posts`)
      .then((response) => response)
      .catch((error) => error);
  }
}

export default new PostService();
