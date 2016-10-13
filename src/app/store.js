import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

import math from './reducers/mathReducer';
import user from './reducers/userReducer';

const logger = createLogger();

const store = createStore(
    combineReducers({math, user}),
    {},
    applyMiddleware(logger)
);

export default store;