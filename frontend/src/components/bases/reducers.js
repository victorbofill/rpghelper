export const BASE_POST = 'BASE_POST';
export const BASES_LOAD = 'BASES_LOAD';
export const BASE_LOAD = 'BASE_LOAD';
export const BASE_UPDATE = 'BASE_UPDATE';
export const BASE_REMOVE = 'BASE_REMOVE';

export const getBases = state => state.bases;

export function bases(state = [], { type, payload }) {
  switch(type) {
    case BASE_POST:
      return [...state, payload];
    case BASES_LOAD:
      return payload;
    case BASE_LOAD:
      return payload;
    case BASE_UPDATE:
      return payload;
    case BASE_REMOVE:
      return payload;
    default:
      return state;
  }
}
