import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddelware from './promise-middleware';
import { notes } from '../components/notes/reducers';
import { entries } from '../components/journal/reducers';
import { participants, participantListId } from '../components/action/reducers';

const rootReducer = combineReducers({
  notes,
  entries,
  participants,
  participantListId
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