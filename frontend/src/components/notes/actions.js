import {
  postNote,
  getNotes,
  delNote
} from '../../services/api';

import {
  NOTE_POST,
  NOTES_LOAD,
  NOTE_REMOVE
} from './reducers';

export function addNote(note) {
  return {
    type: NOTE_POST,
    payload: postNote(note)
  };
}

export function loadNotes() {
  return {
    type: NOTES_LOAD,
    payload: getNotes()
  };
}

export function deleteNote(id) {
  return {
    type: NOTE_REMOVE,
    payload: delNote(id)
  };
}