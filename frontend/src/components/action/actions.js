import { getParticipants } from '../../services/api';
import { PARTICIPANTS_LOAD } from './reducers';

export function loadParticipants() {
  return {
    type: PARTICIPANTS_LOAD,
    payload: getParticipants()
  };
}
