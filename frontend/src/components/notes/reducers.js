export const NOTES_LOAD = 'NOTES_LOAD';
export const NOTES_POST = 'NOTES_POST';
export const NOTE_REMOVE = 'NOTE_REMOVE';

export const getNotes = state => state.notes;

export function notes(state = [], { type, payload }) {
  switch(type) {
    case NOTES_LOAD:
      return payload;
    case NOTE_REMOVE: {
      let copy = state.map((a) => a);
      copy.forEach((note) => {if(note._id === payload._id) copy.splice(copy.indexOf(note), 1);});
      return copy;
    }
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