import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import promiseMiddelware from './promise-middleware';
import { participants } from '../components/app/action/reducers';

import { stories } from '../components/app/stories/reducers';
// import { chapters } from '../components/app/stories/chapters/reducers';

import { regions } from '../components/app/codex/regions/reducers';
import { subregions } from '../components/app/codex/regions/subregions/reducers';
import { locations } from '../components/app/codex/regions/subregions/locations/reducers';
import { bases } from '../components/app/codex/regions/subregions/locations/bases/reducers';
import { assets } from '../components/app/codex/regions/subregions/locations/bases/assets/reducers';
import { NPCs } from '../components/app/codex/regions/subregions/locations/bases/NPCs/reducers';

const rootReducer = combineReducers({
  participants,
  stories,
  // chapters,
  regions,
  subregions,
  locations,
  bases,
  assets,
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