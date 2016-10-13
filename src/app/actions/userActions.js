import actionTypes from './actionTypes';

export function setName(value) {
    return {
        type: actionTypes.USER_SET_NAME,
        payload: value
    };
}

export function setAge(value) {
    return {
        type: actionTypes.USER_SET_AGE,
        payload: value
    };
}