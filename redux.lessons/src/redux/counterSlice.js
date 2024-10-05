import { createStore } from 'redux';


const initialState = {
    count: 0,
};


const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return { ...state, count: state.count + 1 };
    } else if (action.type === 'DECREMENT') {
        return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    } else if (action.type === 'INCREMENT_BY_10') {
        return { ...state, count: state.count + 10 };
    } else if (action.type === 'DECREMENT_BY_10') {
        return { ...state, count: state.count >= 10 ? state.count - 10 : 0 };
    } else if (action.type === 'RESET') {
        return { ...state, count: 0 };
    }
    return state;
};


const store = createStore(counterReducer);

export default store;