import { createStore, applyMiddleware } from 'redux';
import { loadState } from './localStorage';
import logger from 'redux-logger';
import todoReducer from './reducers/todo';

const persistedState = loadState();

export default createStore(
  todoReducer,
  persistedState,
  applyMiddleware(
    logger(),
  ),
);
