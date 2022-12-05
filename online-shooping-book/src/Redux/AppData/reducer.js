import { ADD_TO_CART, GET_CART_ERROR, GET_CART_REQUEST, GET_CART_SUCESS, UPDATE_QTY, USER_GET_ERROR, USER_GET_REQUEST, USER_GET_SUCESS } from "./actionType"

const initalState = {
    book: [],
    isLoading: false,
    isError: false,
    addCart: [],
}

export const BookReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case USER_GET_REQUEST:
            return { ...state, isLoading: true }
        case USER_GET_SUCESS:
            return { ...state, isLoading: false, book: payload }
        case USER_GET_ERROR:
            return { ...state, isLoading: false, isError: true }

        // Adding data inside addCart
        case ADD_TO_CART:
            const newData = [...state.addCart, payload]
            return { ...state, addCart: newData }

        //Update qty
        case UPDATE_QTY:
            return { ...state, addCart: [...state.addCart, payload] }

        // case REMOVE_DATA:
        // const filterData = state.addCart.filter(el=>el.id !== payload)
        // return {...state, addCart:filterData}
        // break;

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