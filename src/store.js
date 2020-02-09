import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import dataReducer from './reducer';

const logger = createLogger();

export default (initialState = {}, history) => {
  const middlewares = [thunk, routerMiddleware(history)];

  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'preprod'
  ) {
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    combineReducers({
      data: dataReducer,
      router: connectRouter(history),
    }),
    initialState,
    compose(...enhancers)
  );

  return store;
};
