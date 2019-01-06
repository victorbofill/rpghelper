export const ENTRY_POST = 'ENTRY_POST';
export const ENTRIES_LOAD = 'ENTRIES_LOAD';
export const ENTRY_UPDATE = 'ENTRY_UPDATE';
export const ENTRY_REMOVE = 'ENTRY_REMOVE';

export const getEntries = state => state.entries;

export function entries(state = [], { type, payload }) {
  switch(type) {
    case ENTRY_POST:
      return payload;
    case ENTRIES_LOAD:
      return payload;
    case ENTRY_UPDATE:
      return payload;
    case ENTRY_REMOVE:
      return payload;
    default:
      return state;
  }
}