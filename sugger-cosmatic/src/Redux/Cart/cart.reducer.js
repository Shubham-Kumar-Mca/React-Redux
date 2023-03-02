import { ADD_TO_CART, GET_CART_ERROR, GET_CART_REQUEST, GET_CART_SUCESS, UPDATE_QTY } from "./cart.actionType"

const initalState = {
    isLoading: false,
    isError: false,
    addCart: [],
}

export const cartReducer = (state=initalState, {type, payload}) =>{
    switch(type){
        case ADD_TO_CART:
            return {...state, addCart : [...state.addCart, payload]}

        case UPDATE_QTY:
            return { ...state, addCart: [...state.addCart, payload] }

        case GET_CART_REQUEST:
            return { ...state, isLoading: true }

        case GET_CART_SUCESS:
            return { ...state, isLoading: false, addCart: payload }

        case GET_CART_ERROR:
            return { ...state, isLoading: false, isError: true }
            
        default:
            return state
    }
}