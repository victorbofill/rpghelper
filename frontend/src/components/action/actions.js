import {
  PARTICIPANTS_LOAD,
  PARTICIPANT_ADD
} from './reducers';

export function loadParticipants() {
  if(localStorage.getItem('participants')) {
    console.log('local storage: ', localStorage.getItem('participants'));
    return {
      type: PARTICIPANTS_LOAD,
      payload: JSON.parse(localStorage.getItem('participants'))
    };
  } else {
    console.log('false');
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