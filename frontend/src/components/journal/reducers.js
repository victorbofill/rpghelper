export const ENTRIES_LOAD = 'ENTRIES_LOAD';
export const ENTRY_POST = 'ENTRY_POST';
export const ENTRY_REMOVE = 'ENTRY_REMOVE';

export const getEntries = state => state.entries;

export function entries(state = [], { type, payload }) {
  switch(type) {
    case ENTRIES_LOAD:
      return payload;
    case ENTRY_REMOVE: {
      let copy = state.map((a) => a);
      copy.forEach((entry) => {if(entry._id === payload._id) copy.splice(copy.indexOf(entry), 1);});
      return copy;
    }
    default:
      return state;
  }
}

export function createEntry(state = null, { type, payload }) {
  switch(type) {
    case ENTRY_POST:
      return payload;
    default:
      return state;
  }
}