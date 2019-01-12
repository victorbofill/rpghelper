import {
  postAsset,
  getAssets,
  getAsset,
  putAsset,
  delAsset
} from '../../services/api';

import {
  ASSET_POST,
  ASSETS_LOAD,
  ASSET_LOAD,
  ASSET_UPDATE,
  ASSET_REMOVE
} from './reducers';

export function addAsset() {
  return {
    type: ASSET_POST,
    payload: postAsset()
  };
}

export function loadAssets() {
  return {
    type: ASSETS_LOAD,
    payload: getAssets()
  };  
}  

export function loadAsset(id) {
  return {
    type: ASSET_LOAD,
    payload: getAsset(id)
  };  
}  

export function updateAsset(asset) {
  return {
    type: ASSET_UPDATE,
    payload: putAsset(asset)
  };
}

export function deleteAsset(id) {
  return {
    type: ASSET_REMOVE,
    payload: delAsset(id)
  };
}
