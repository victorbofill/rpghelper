import {
  postRegion,
  getRegions,
  getRegion,
  putRegion,
  delRegion
} from '../../../../services/api';

import {
  REGION_POST,
  REGIONS_LOAD,
  REGION_LOAD,
  REGION_UPDATE,
  REGION_REMOVE
} from './reducers';

export function addRegion() {
  return {
    type: REGION_POST,
    payload: postRegion()
  };
}

export function loadRegions() {
  return {
    type: REGIONS_LOAD,
    payload: getRegions()
  };  
}  

export function loadRegion(id) {
  return {
    type: REGION_LOAD,
    payload: getRegion(id)
  };  
}  

export function updateRegion(region) {
  return {
    type: REGION_UPDATE,
    payload: putRegion(region)
  };
}

export function deleteRegion(id) {
  return {
    type: REGION_REMOVE,
    payload: delRegion(id)
  };
}