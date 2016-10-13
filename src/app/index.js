import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

import actionTypes from './constants/actionTypes';
import App from './components/App';

let initialMathState = {
    result: 1,
    lastValues: [],
    username: "Max"
};

let math = (state = initialMathState, action) => {
    switch (action.type) {
        case actionTypes.MATH_ADD:
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case actionTypes.MATH_SUBTRACT:
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }

    return state;
};

let userInitialState = {
    name: "Max",
    age: 20
};

let user = (state = userInitialState, action) => {
    switch (action.type) {
        case actionTypes.USER_SET_AGE:
            state = {
                ...state,
                age: action.payload
            };
            break;
        case actionTypes.USER_SET_NAME:
            state = {
                ...state,
                name: action.payload
            };
            break;
    }

    return state;
};

let logger = createLogger();

let store = createStore(
    combineReducers({math, user}),
    {},
    applyMiddleware(logger)
);

store.dispatch({type: actionTypes.MATH_ADD, payload: 10});
store.dispatch({type: actionTypes.MATH_ADD, payload: 100});
store.dispatch({type: actionTypes.MATH_SUBTRACT, payload: 50});

store.dispatch({type: actionTypes.USER_SET_AGE, payload: 47});
store.dispatch({type: actionTypes.USER_SET_NAME, payload: "New name"});


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);