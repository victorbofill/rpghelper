export const REGIONS_LOAD = 'REGIONS_LOAD';
export const REGION_POST = 'REGION_POST';
export const REGION_REMOVE = 'REGION_REMOVE';

export const getRegions = state => state.regions;

export function regions(state = [], { type, payload }) {
  switch(type) {
    case REGIONS_LOAD:
      return payload;
    case REGION_REMOVE: {
      let copy = state.map((a) => a);
      copy.forEach((note) => {if(note._id === payload._id) copy.splice(copy.indexOf(note), 1);});
      return copy;
    }
    default:
      return state;
  }
}

export function createRegion(state = null, { type, payload }) {
  switch(type) {
    case REGION_POST:
      return payload;
    default:
      return state;
  }
}