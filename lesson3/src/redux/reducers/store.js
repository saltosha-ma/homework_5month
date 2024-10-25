import { combineReducers } from 'redux';
import factReducer from './factReducer';

const rootReducer = combineReducers({
  facts: factReducer,
});

export default rootReducer;
