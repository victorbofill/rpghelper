export const STORIES_LOAD = 'STORIES_LOAD';

export const getStories = state => state.stories;

export function stories(state = [], { type, payload }) {
  switch(type) {
    case STORIES_LOAD:
      return payload;
    default:
      return state;
  }
}