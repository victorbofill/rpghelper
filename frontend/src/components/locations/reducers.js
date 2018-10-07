export const LOCATIONS_LOAD = 'LOCATIONS_LOAD';
export const LOCATION_ADD = 'LOCATION_ADD';
export const LOCATION_REMOVE = 'LOCATION_REMOVE';

export const getLocations = state => state.locations;

export function locations(state = [], { type, payload }) {
  switch(type) {
    case LOCATIONS_LOAD:
      return payload;
    default:
      return state;
  }
}
