import {
  getParticipantList,
  postParticipantList,
  postParticipant,
  putParticipant,
  delParticipant,
  delParticipantList
} from '../../services/api';

import {
  PARTICIPANTLIST_LOAD,
  PARTICIPANTLIST_CREATE,
  PARTICIPANT_CREATE,
  PARTICIPANT_UPDATE,
  PARTICIPANT_REMOVE,
  PARTICIPANTLIST_CLEAR,
} from './reducers';

export function createParticipantList() {
  return {
    type: PARTICIPANTLIST_CREATE,
    payload: postParticipantList()
  };
}

export function createParticipant(id) {
  return {
    type: PARTICIPANT_CREATE,
    payload: postParticipant(id)
  };
}

export function loadParticipantList() {
  return {
    type: PARTICIPANTLIST_LOAD,
    payload: getParticipantList()
  };
}

export function updateParticipant(id, participant) {
  return {
    type: PARTICIPANT_UPDATE,
    payload: putParticipant(id, participant)
  };
}

export function deleteParticipant(listId, participantId) {
  return {
    type: PARTICIPANT_REMOVE,
    payload: delParticipant(listId, participantId)
  };
}

export function deleteParticipantList(id) {
  return {
    type: PARTICIPANTLIST_CLEAR,
    payload: delParticipantList(id)
  };
}