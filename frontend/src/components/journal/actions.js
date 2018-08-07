import {
  getEntries,
  postEntry,
  delEntry
} from '../../services/api';

import {
  ENTRIES_LOAD,
  ENTRY_POST,
  ENTRY_REMOVE
} from './reducers';

export function loadEntries() {
  return {
    type: ENTRIES_LOAD,
    payload: getEntries()
  };
}

export function addEntry(entry) {
  return {
    type: ENTRY_POST,
    payload: postEntry(entry)
  };
}

export function deleteEntry(id) {
  return {
    type: ENTRY_REMOVE,
    payload: delEntry(id).then(() => ({ _id: id }))
  };
}