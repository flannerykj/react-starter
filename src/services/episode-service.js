// @flow

import apiService from './api-service';

import type { Episode } from '../models/episodes';

class EpisodeService {
  // real api method
 /*
  get(ids: string = ''): Promise<Episode[]> {
    return apiService.get(`/information_requests${ids}`)
      .then((response) => response.episodes);
  }
  */

  // dummy api method
  get(ids: string = ''): Promise<Episode[]> {
    return [];
  }
}

export default new EpisodeService();
