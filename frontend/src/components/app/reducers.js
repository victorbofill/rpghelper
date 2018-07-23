export const TEST_REDUCER = 'TEST_REDUCER';

export const getTest = state => state.test;

export function test(state = null, { type }) {
  switch(type) {
    case TEST_REDUCER:
      return 1;
    default:
      return state;
  }
}