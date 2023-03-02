import axios from "axios";
import { ADD_TO_CART, GET_CART_ERROR, GET_CART_REQUEST, GET_CART_SUCESS, UPDATE_QTY } from "./cart.actionType";

//for adding data in Cart
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });

//Update qty
export const updateQty = (payload) => ({ type: UPDATE_QTY, payload })


//for display all cart data
export const getCartRequest = () => ({ type: GET_CART_REQUEST })
export const getCartSucess = (payload) => ({ type: GET_CART_SUCESS, payload })
export const getCartError = () => ({ type: GET_CART_ERROR })


/* For adding data in 'Add to Cart' Section */

export const postAddToCart = (props) => (dispatch) => {
    dispatch(getCartRequest())
    return axios.post("http://localhost:3030/Cart", props).then(res => {
        dispatch(addToCart(res.data))
    }).catch(err => {
        dispatch(getCartError(err))
    })
}

/* Get All Cart Data */

export const getCarts = () => (dispatch) => {
    dispatch(getCartRequest());
    return axios.get("http://localhost:3030/Cart").then(res => {
        dispatch(getCartSucess(res.data))
    }).catch(err => {
        dispatch(getCartError(err))
    })
}

/* Remove Data */

export const removeData = (id)=>(dispatch)=>{
    return axios.delete(`http://localhost:3030/Cart/${id}`).then(()=>{
        dispatch(getCarts())
    }).catch(err=>{
        console.log(err);
    })
}

/* Update Qty */

export const updateData = (id, value)=>(dispatch)=>{
    return axios.patch(`http://localhost:3030/Cart/${id}`, value).then(res=>{
        dispatch(updateQty(res.data))
    }).catch(err=>{
        console.log(err);
    })
}