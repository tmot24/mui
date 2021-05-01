import {combineReducers, createStore} from "redux";
import {snackbarReducer} from "./ducks/snackbarReducer";

const reducer = combineReducers({
    snackbar: snackbarReducer,
})

export const store = createStore(reducer)