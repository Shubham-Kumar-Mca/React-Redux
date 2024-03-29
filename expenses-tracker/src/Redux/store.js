import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./Auth/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({AuthReducer})

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
