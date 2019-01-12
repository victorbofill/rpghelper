import {
  postSubregion,
  getSubregions,
  getSubregion,
  putSubregion,
  delSubregion
} from '../../services/api';

import {
  SUBREGION_POST,
  SUBREGIONS_LOAD,
  SUBREGION_LOAD,
  SUBREGION_UPDATE,
  SUBREGION_REMOVE
} from './reducers';

export function addSubregion() {
  return {
    type: SUBREGION_POST,
    payload: postSubregion()
  };
}

export function loadSubregions() {
  return {
    type: SUBREGIONS_LOAD,
    payload: getSubregions()
  };  
}  

export function loadSubregion(id) {
  return {
    type: SUBREGION_LOAD,
    payload: getSubregion(id)
  };  
}  

export function updateSubregion(subregion) {
  return {
    type: SUBREGION_UPDATE,
    payload: putSubregion(subregion)
  };
}

export function deleteSubregion(id) {
  return {
    type: SUBREGION_REMOVE,
    payload: delSubregion(id)
  };
}
