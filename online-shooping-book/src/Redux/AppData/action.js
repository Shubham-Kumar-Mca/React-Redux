import axios from "axios";
import { ADD_TO_CART, GET_CART_ERROR, GET_CART_REQUEST, GET_CART_SUCESS, UPDATE_QTY, USER_GET_ERROR, USER_GET_REQUEST, USER_GET_SUCESS } from "./actionType";

//For Geting data
export const getRequest = () => ({ type: USER_GET_REQUEST });
export const getSucess = (payload) => ({ type: USER_GET_SUCESS, payload });
export const getError = () => ({ type: USER_GET_ERROR });

//for adding data in Cart
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });

//Update qty
export const updateQty = (payload) => ({ type: UPDATE_QTY, payload });

//for display all cart data
export const getCartRequest = () => ({ type: GET_CART_REQUEST })
export const getCartSucess = (payload) => ({ type: GET_CART_SUCESS, payload })
export const getCartError = () => ({ type: GET_CART_ERROR })

/* Get All Book Inside Home Page */

export const getBooks = (params) => (dispatch) => {
    dispatch(getRequest());
    return axios.get("http://localhost:3030/books", params).then(res => {
        dispatch(getSucess(res.data))
    }).catch(err => {
        dispatch(getError())
    })
}

/* For adding data in 'Add to Cart' Section */

export const postAddToCart = (props) => (dispatch) => {
    return axios.post("http://localhost:3030/addToCart", props).then(res => {
        dispatch(addToCart(res.data))
    }).catch(err => {
        dispatch(getError())
    })
}

/* Get All Cart Data */

export const getCarts = () => (dispatch) => {
    dispatch(getCartRequest());
    return axios.get("http://localhost:3030/addToCart").then(res => {
        dispatch(getCartSucess(res.data))
    }).catch(err => {
        dispatch(getError())
    })
}

/* Remove Data */

export const removeData = (id)=>(dispatch)=>{
    return axios.delete(`http://localhost:3030/addToCart/${id}`).then(()=>{
        dispatch(getCarts())
    }).catch(err=>{
        console.log(err);
    })
}

/* Update Qty */

export const updateData = (id, value)=>(dispatch)=>{
    return axios.patch(`http://localhost:3030/addToCart/${id}`, value).then(res=>{
        dispatch(updateQty(res.data))
    }).catch(err=>{
        console.log(err);
    })
}