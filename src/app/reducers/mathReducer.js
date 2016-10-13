import actionTypes from '../actions/actionTypes';

const initialState = {
    result: 0,
    lastValues: []
};

const reducer = (state = initialState, action) => {
    switch (action.type){
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

export default reducer;