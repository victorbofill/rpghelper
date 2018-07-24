import {
  getNotes,
  postNote
} from '../../services/api';

import {
  NOTES_LOAD,
  NOTES_POST
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