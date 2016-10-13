import actionTypes from '../actions/actionTypes';

const initialState = {
    name: 'Max',
    age: 25
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.USER_SET_NAME:
            state = {
                ...state,
                name: action.payload
            };
            break;

        case actionTypes.USER_SET_AGE:
            state = {
                ...state,
                age: action.payload
            };
            break;
    }

    return state;
};

export default reducer;