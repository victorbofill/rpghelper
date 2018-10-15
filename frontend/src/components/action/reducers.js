export const PARTICIPANTS_LOAD = 'PARTICIPANTS_LOAD';

export const getParticipants = state => state.participants;

export function participants(state = [], { type, payload }) {
  switch(type) {
    case PARTICIPANTS_LOAD:
      return payload;
    default:
      return state;
  }
}
