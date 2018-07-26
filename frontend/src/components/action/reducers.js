export const PARTICIPANTS_LOAD = 'PARTICIPANTS_LOAD';
export const PARTICIPANT_ADD = 'PARTICIPANT_ADD';
export const PARTICIPANTS_CLEAR = 'PARTICIPANTS_CLEAR';
export const PARTICIPANT_REMOVE = 'PARTICIPANT_REMOVE';

export const getParticipants = state => state.participants;

export function participants(state = [], { type, payload }) {
  switch(type) {
    case PARTICIPANTS_LOAD:
      return payload;
    case PARTICIPANT_ADD:
      return [...state, payload];
    case PARTICIPANTS_CLEAR:
      return payload;
    case PARTICIPANT_REMOVE:
      return payload;
    default:
      return state;
  }
}