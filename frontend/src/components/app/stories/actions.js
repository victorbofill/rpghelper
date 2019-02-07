import { getStories } from '../../services/api';

import { STORIES_LOAD } from './reducers';

export function loadStories() {
  return {
    type: STORIES_LOAD,
    payload: getStories()
  };
}
