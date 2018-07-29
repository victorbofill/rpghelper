export const PARTICIPANTLIST_CREATE = 'PARTICIPANTLIST_CREATE';
export const PARTICIPANT_CREATE = 'PARTICIPANT_CREATE';
export const PARTICIPANTLIST_LOAD = 'PARTICIPANTLIST_LOAD';
export const PARTICIPANT_UPDATE = 'PARTICIPANT_UPDATE';
export const PARTICIPANT_REMOVE = 'PARTICIPANT_REMOVE';
export const PARTICIPANTLIST_CLEAR = 'PARTICIPANTLIST_CLEAR';

export const getParticipants = state => state.participants;
export const getParticipantListId = state => state.participantListId;

export function participants(state = {}, { type, payload }) {
  switch(type) {
    case PARTICIPANTLIST_CREATE:
      return payload;
    case PARTICIPANT_CREATE:
      return payload;
    case PARTICIPANTLIST_LOAD:
      return payload;
    case PARTICIPANT_UPDATE:
      return payload;
    case PARTICIPANT_REMOVE:
      return payload;
    case PARTICIPANTLIST_CLEAR:
      return payload;
    default:
      return state;
  }
}

export function participantListId(state = null, { type, payload }) {
  switch(type) {
    case PARTICIPANTLIST_CREATE:
      return payload.id;
    case PARTICIPANTLIST_LOAD:
      return payload.id;
    default:
      return state;
  }
}