export const DATA_POST = 'DATA_POST';
export const DATA_LOAD = 'DATA_LOAD';
export const DATA_UPDATE = 'DATA_UPDATE';
export const DATA_REMOVE = 'DATA_REMOVE';

export const getData = state => state.data;

export function data(state = [], { type, payload }) {
  switch(type) {
    case DATA_POST:
      return [...state, payload];
    case DATA_LOAD:
      return payload;
    case DATA_UPDATE:
      return payload;
    case DATA_REMOVE:
      return payload;
    default:
      return state;
  }
}
