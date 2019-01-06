import {
  postEntry,
  getEntries,
  putEntry,
  delEntry
} from '../../services/api';

import {
  ENTRY_POST,
  ENTRIES_LOAD,
  ENTRY_UPDATE,
  ENTRY_REMOVE
} from './reducers';

export function addEntry(entry) {
  return {
    type: ENTRY_POST,
    payload: postEntry(entry)
  };
}

export function loadEntries() {
  return {
    type: ENTRIES_LOAD,
    payload: getEntries()
  };
}

export function updateEntry(entry) {
  return {
    type: ENTRY_UPDATE,
    payload: putEntry(entry)
  };
}

export function deleteEntry(id) {
  return {
    type: ENTRY_REMOVE,
    payload: delEntry(id)
  };
}
