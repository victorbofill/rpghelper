export const PARTICIPANTS_LOAD = 'PARTICIPANTS_LOAD';
export const PARTICIPANT_ADD = 'PARTICIPANT_ADD';

export const getParticipants = state => state.participants;

export function participants(state = [], { type, payload }) {
  switch(type) {
    case PARTICIPANTS_LOAD:
      return payload;
    case PARTICIPANT_ADD:
      return [...state, payload];
    default:
      return state;
  }
}