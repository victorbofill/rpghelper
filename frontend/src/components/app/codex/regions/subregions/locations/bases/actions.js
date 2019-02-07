import {
  postBase,
  getBases,
  getBase,
  putBase,
  delBase
} from '../../../../../../../services/api';

import {
  BASE_POST,
  BASES_LOAD,
  BASE_LOAD,
  BASE_UPDATE,
  BASE_REMOVE
} from './reducers';

export function addBase() {
  return {
    type: BASE_POST,
    payload: postBase()
  };
}

export function loadBases() {
  return {
    type: BASES_LOAD,
    payload: getBases()
  };  
}  

export function loadBase(id) {
  return {
    type: BASE_LOAD,
    payload: getBase(id)
  };  
}  

export function updateBase(base) {
  return {
    type: BASE_UPDATE,
    payload: putBase(base)
  };
}

export function deleteBase(id) {
  return {
    type: BASE_REMOVE,
    payload: delBase(id)
  };
}
