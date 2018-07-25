import {
  PARTICIPANTS_LOAD,
  PARTICIPANT_ADD
} from './reducers';

const participants = [];

export function loadParticipants() {
  return {
    type: PARTICIPANTS_LOAD,
    payload: participants
  };
}

export function addParticipant(state) {
  return {
    type: PARTICIPANT_ADD,
    payload: state
  };
}