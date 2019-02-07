export const REGION_POST = 'REGION_POST';
export const REGIONS_LOAD = 'REGIONS_LOAD';
export const REGION_UPDATE = 'REGION_UPDATE';
export const REGION_REMOVE = 'REGION_REMOVE';

export const getRegions = state => state.regions;

export function regions(state = [], { type, payload }) {
  switch(type) {
    case REGION_POST:
      return [...state, payload];
    case REGIONS_LOAD:
      return payload;
    case REGION_UPDATE:
      return payload;
    case REGION_REMOVE:
      return payload;
    default:
      return state;
  }
}
