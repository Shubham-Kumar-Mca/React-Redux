import {legacy_createStore, compose, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./Cart/cart.reducer";
import { productReducer } from "./Product/product.reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({product: productReducer, cart : cartReducer})
export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))