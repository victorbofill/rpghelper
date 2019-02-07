import {
  postLocation,
  getLocations,
  getLocation,
  putLocation,
  delLocation
} from '../../../../../../services/api';

import {
  LOCATION_POST,
  LOCATIONS_LOAD,
  LOCATION_LOAD,
  LOCATION_UPDATE,
  LOCATION_REMOVE
} from './reducers';

export function addLocation() {
  return {
    type: LOCATION_POST,
    payload: postLocation()
  };
}

export function loadLocations() {
  return {
    type: LOCATIONS_LOAD,
    payload: getLocations()
  };  
}  

export function loadLocation(id) {
  return {
    type: LOCATION_LOAD,
    payload: getLocation(id)
  };  
}  

export function updateLocation(location) {
  return {
    type: LOCATION_UPDATE,
    payload: putLocation(location)
  };
}

export function deleteLocation(id) {
  return {
    type: LOCATION_REMOVE,
    payload: delLocation(id)
  };
}
