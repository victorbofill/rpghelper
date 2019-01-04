import {
  getRegions,
  postRegion,
  delRegion
} from '../../services/api';

import {
  REGIONS_LOAD,
  REGION_POST,
  REGION_REMOVE
} from './reducers';

export function loadRegions() {
  return {
    type: REGIONS_LOAD,
    payload: getRegions()
  };
}

export function addRegion(region) {
  return {
    type: REGION_POST,
    payload: postRegion(region)
  };
}

export function deleteRegion(id) {
  return {
    type: REGION_REMOVE,
    payload: delRegion(id).then(() => ({ _id: id }))
  };
}