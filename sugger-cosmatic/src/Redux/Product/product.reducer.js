import { PRODUCT_FAILURE, PRODUCT_LOADING, PRODUCT_SUCESS } from "./product.actionType";

const initialState = {
    isLoading: false,
    isError: false,
    data: []
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_LOADING:
            return { ...state, isLoading: true };
        case PRODUCT_SUCESS:
            return { ...state, isLoading: false, data: payload }
        case PRODUCT_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}