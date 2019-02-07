export const LOCATION_POST = 'LOCATION_POST';
export const LOCATIONS_LOAD = 'LOCATIONS_LOAD';
export const LOCATION_LOAD = 'LOCATION_LOAD';
export const LOCATION_UPDATE = 'LOCATION_UPDATE';
export const LOCATION_REMOVE = 'LOCATION_REMOVE';

export const getLocations = state => state.locations;

export function locations(state = [], { type, payload }) {
  switch(type) {
    case LOCATION_POST:
      return [...state, payload];
    case LOCATIONS_LOAD:
      return payload;
    case LOCATION_LOAD:
      return payload;
    case LOCATION_UPDATE:
      return payload;
    case LOCATION_REMOVE:
      return payload;
    default:
      return state;
  }
}
