import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import {quoteReducer} from "./quoteReducer";


export const rootReducer = combineReducers({
    usersReducer,
    quoteReducer
})

