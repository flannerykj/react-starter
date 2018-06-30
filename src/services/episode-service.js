// @flow

import apiService from './api-service';

import type { Episode } from '../models/episodes';

class EpisodeService {

  get(ids: string = ''): Promise<Episode[]> {
    return apiService.get(`/episodes`)
      .then((response) => response)
      .catch((error) => error);
  }
}

export default new EpisodeService();
