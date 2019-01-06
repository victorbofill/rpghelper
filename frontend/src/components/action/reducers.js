export const PARTICIPANT_POST = 'PARTICIPANT_POST';
export const PARTICIPANTS_LOAD = 'PARTICIPANTS_LOAD';
export const PARTICIPANT_UPDATE = 'PARTICIPANT_UPDATE';
export const PARTICIPANT_REMOVE = 'PARTICIPANT_REMOVE';

export const getParticipants = state => state.participants;

export function participants(state = [], { type, payload }) {
  switch(type) {
    case PARTICIPANT_POST:
      return payload;
    case PARTICIPANTS_LOAD:
      return payload;
    case PARTICIPANT_UPDATE:
      return payload;
    case PARTICIPANT_REMOVE:
      return payload;
    default:
      return state;
  }
}