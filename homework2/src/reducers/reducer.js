import { actionTypes } from '../actions/actions';

const initialState = {
    result: 0,
}

export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                result: action.payload.num1 + action.payload.num2,
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                result: action.payload.num1 - action.payload.num2,
            }
        case actionTypes.MULTIPLY:
            return {
                ...state,
                result: action.payload.num1 * action.payload.num2,
            }
        case actionTypes.DIVIDE:
            return {
                ...state,
                result: action.payload.num2 !== 0 ? action.payload.num1 / action.payload.num2 : 0,
            }
        default:
            return state;
    }
}