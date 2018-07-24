export const NOTES_LOAD = 'NOTES_LOAD';
export const NOTES_POST = 'NOTES_POST';

export const getNotes = state => state.notes;

export function notes(state = [], { type, payload }) {
  switch(type) {
    case NOTES_LOAD:
      return payload;
    default:
      return state;
  }
}

export function createNote(state = null, { type, payload }) {
  switch(type) {
    case NOTES_POST:
      return payload;
    default:
      return state;
  }
}