export const NPC_POST = 'NPC_POST';
export const NPCS_LOAD = 'NPCS_LOAD';
export const NPC_LOAD = 'NPC_LOAD';
export const NPC_UPDATE = 'NPC_UPDATE';
export const NPC_REMOVE = 'NPC_REMOVE';

export const getNPCs = state => state.NPCs;

export function NPCs(state = [], { type, payload }) {
  switch(type) {
    case NPC_POST:
      return [...state, payload];
    case NPCS_LOAD:
      return payload;
    case NPC_LOAD:
      return payload;
    case NPC_UPDATE:
      return payload;
    case NPC_REMOVE:
      return payload;
    default:
      return state;
  }
}
