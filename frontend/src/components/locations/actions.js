import {
  getLocations
} from '../../services/api';

import {
  LOCATIONS_LOAD
} from './reducers';

export function loadLocations() {
  return {
    type: LOCATIONS_LOAD,
    payload: getLocations()
  };
}
