import {
  postNote,
  getNotes,
  putNote,
  delNote
} from '../../../services/api';

import {
  NOTE_POST,
  NOTES_LOAD,
  NOTE_UPDATE,
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

export function updateNote(note) {
  return {
    type: NOTE_UPDATE,
    payload: putNote(note)
  };
}

export function deleteNote(id) {
  return {
    type: NOTE_REMOVE,
    payload: delNote(id)
  };
}
