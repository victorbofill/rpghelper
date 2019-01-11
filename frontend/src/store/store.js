import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import promiseMiddelware from './promise-middleware';
import { entries } from '../components/journal/reducers';
import { notes } from '../components/notes/reducers';
import { participants } from '../components/action/reducers';

import { stories } from '../components/stories/reducers';
// import { chapters } from '../components/chapters/reducers';

import { regions } from '../components/regions/reducers';
import { subregions } from '../components/subregions/reducers';
import { locations } from '../components/locations/reducers';
// import { bases } from '../components/bases/reducers';
// import { assets } from '../components/assets/reducers';
import { NPCs } from '../components/NPCs/reducers';

const rootReducer = combineReducers({
  entries,
  notes,
  participants,
  stories,
  // chapters,
  regions,
  subregions,
  locations,
  // bases,
  // assets,
  NPCs
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddelware
    )
  )
);

export default store;