export const SUBREGION_POST = 'SUBREGION_POST';
export const SUBREGIONS_LOAD = 'SUBREGIONS_LOAD';
export const SUBREGION_LOAD = 'SUBREGION_LOAD';
export const SUBREGION_UPDATE = 'SUBREGION_UPDATE';
export const SUBREGION_REMOVE = 'SUBREGION_REMOVE';

export const getSubregions = state => state.subregions;

export function subregions(state = [], { type, payload }) {
  switch(type) {
    case SUBREGION_POST:
      return [...state, payload];
    case SUBREGIONS_LOAD:
      return payload;
    case SUBREGION_LOAD:
      return payload;
    case SUBREGION_UPDATE:
      return payload;
    case SUBREGION_REMOVE:
      return payload;
    default:
      return state;
  }
}
