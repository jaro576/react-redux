import actionTypes from './actionTypes';

export function add(value) {
    return {
        type: actionTypes.MATH_ADD,
        payload: value
    };
}

export function subtract(value) {
    return {
        type: actionTypes.MATH_SUBTRACT,
        payload: value
    };
}