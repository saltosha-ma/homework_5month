import { createStore } from 'redux'
import { calculatorReducer} from "../reducers/reducer";

export const store = createStore(calculatorReducer);