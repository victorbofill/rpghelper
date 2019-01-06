import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import promiseMiddelware from './promise-middleware';
import { entries } from '../components/journal/reducers';
import { locations } from '../components/locations/reducers';
import { notes } from '../components/notes/reducers';
import { participants } from '../components/action/reducers';
import { regions } from '../components/regions/reducers';
import { stories } from '../components/stories/reducers';

const rootReducer = combineReducers({
  entries,
  locations,
  notes,
  participants,
  regions,
  stories
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