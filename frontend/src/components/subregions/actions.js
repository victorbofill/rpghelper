import {
  postSubregion,
  getSubregions,
  putSubregion,
  delSubregion
} from '../../services/api';

import {
  SUBREGION_POST,
  SUBREGIONS_LOAD,
  SUBREGION_UPDATE,
  SUBREGION_REMOVE
} from './reducers';

export function addRegion() {
  return {
    type: SUBREGION_POST,
    payload: postSubregion()
  };
}

export function loadRegions() {
  return {
    type: SUBREGIONS_LOAD,
    payload: getSubregions()
  };  
}  

export function updateRegion(region) {
  return {
    type: SUBREGION_UPDATE,
    payload: putSubregion(region)
  };
}

export function deleteRegion(id) {
  return {
    type: SUBREGION_REMOVE,
    payload: delSubregion(id)
  };
}
