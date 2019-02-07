export const ASSET_POST = 'ASSET_POST';
export const ASSETS_LOAD = 'ASSETS_LOAD';
export const ASSET_LOAD = 'ASSET_LOAD';
export const ASSET_UPDATE = 'ASSET_UPDATE';
export const ASSET_REMOVE = 'ASSET_REMOVE';

export const getAssets = state => state.assets;

export function assets(state = [], { type, payload }) {
  switch(type) {
    case ASSET_POST:
      return [...state, payload];
    case ASSETS_LOAD:
      return payload;
    case ASSET_LOAD:
      return payload;
    case ASSET_UPDATE:
      return payload;
    case ASSET_REMOVE:
      return payload;
    default:
      return state;
  }
}
