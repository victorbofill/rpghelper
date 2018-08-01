import {
  getNotes,
  postNote,
  delNote
} from '../../services/api';

import {
  NOTES_LOAD,
  NOTES_POST,
  NOTE_REMOVE
} from './reducers';

export function loadNotes() {
  return {
    type: NOTES_LOAD,
    payload: getNotes()
  };
}

export function addNote(note) {
  return {
    type: NOTES_POST,
    payload: postNote(note)
  };
}

export function deleteNote(id) {
  return {
    type: NOTE_REMOVE,
    payload: delNote(id).then(() => ({ _id: id }))
  };
}