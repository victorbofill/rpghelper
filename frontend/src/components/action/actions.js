import {
  PARTICIPANTS_LOAD,
  PARTICIPANT_ADD,
  PARTICIPANTS_CLEAR,
  PARTICIPANT_REMOVE
} from './reducers';

export function loadParticipants() {
  if(localStorage.getItem('participants')) {
    return {
      type: PARTICIPANTS_LOAD,
      payload: JSON.parse(localStorage.getItem('participants'))
    };
  } else {
    return {
      type: PARTICIPANTS_LOAD,
      payload: []
    };
  }
}

export function addParticipant(state) {
  return {
    type: PARTICIPANT_ADD,
    payload: state
  };
}

export function clearParticipants() {
  return {
    type: PARTICIPANTS_CLEAR,
    payload: []
  };
}

export function removeParticipant(state) {
  return {
    type: PARTICIPANT_REMOVE,
    payload: state
  };
}