import {
  postParticipant,
  getParticipants,
  putParticipant,
  delParticipant
} from '../../../services/api';

import {
  PARTICIPANT_POST,
  PARTICIPANTS_LOAD,
  PARTICIPANT_UPDATE,
  PARTICIPANT_REMOVE
} from './reducers';

export function addParticipant() {
  return {
    type: PARTICIPANT_POST,
    payload: postParticipant()
  };
}

export function loadParticipants() {
  return {
    type: PARTICIPANTS_LOAD,
    payload: getParticipants()
  };
}

export function updateParticipant(participant) {
  return {
    type: PARTICIPANT_UPDATE,
    payload: putParticipant(participant)
  };
}

export function deleteParticipant(id) {
  return {
    type: PARTICIPANT_REMOVE,
    payload: delParticipant(id)
  };
}
