import {
  postNPC,
  getNPCs,
  getNPC,
  putNPC,
  delNPC
} from '../../services/api';

import {
  NPC_POST,
  NPCS_LOAD,
  NPC_LOAD,
  NPC_UPDATE,
  NPC_REMOVE
} from './reducers';

export function addNPC() {
  return {
    type: NPC_POST,
    payload: postNPC()
  };
}

export function loadNPCs() {
  return {
    type: NPCS_LOAD,
    payload: getNPCs()
  };  
}  

export function loadNPC(id) {
  return {
    type: NPC_LOAD,
    payload: getNPC(id)
  };  
}  

export function updateNPC(NPC) {
  return {
    type: NPC_UPDATE,
    payload: putNPC(NPC)
  };
}

export function deleteNPC(id) {
  return {
    type: NPC_REMOVE,
    payload: delNPC(id)
  };
}
