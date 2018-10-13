import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddelware from './promise-middleware';
import { notes } from '../components/notes/reducers';
import { entries } from '../components/journal/reducers';
import { participants, participantListId } from '../components/action/reducers';
import { locations } from '../components/locations/reducers';
import { stories } from '../components/stories/reducers';

const rootReducer = combineReducers({
  notes,
  entries,
  participants,
  participantListId,
  locations,
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