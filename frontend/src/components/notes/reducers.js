export const NOTE_POST = 'NOTE_POST';
export const NOTES_LOAD = 'NOTES_LOAD';
export const NOTE_UPDATE = 'NOTE_UPDATE';
export const NOTE_REMOVE = 'NOTE_REMOVE';

export const getNotes = state => state.notes;

export function notes(state = [], { type, payload }) {
  switch(type) {
    case NOTE_POST:
      return payload;
    case NOTES_LOAD:
      return payload;
    case NOTE_UPDATE:
      return payload;
    case NOTE_REMOVE:
      return payload;
    default:
      return state;
  }
}