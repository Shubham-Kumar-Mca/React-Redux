import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_LOADING, PRODUCT_SUCESS } from "./product.actionType";

export const getRequest = () => ({ type: PRODUCT_LOADING });
export const getFailure = () => ({ type: PRODUCT_FAILURE });
export const getSucess = (payload) => ({ type: PRODUCT_SUCESS, payload });



export const grtProductsAPI = (data, params) => (dispatch) => {
    dispatch(getRequest());
    return axios.get(`http://localhost:3030/${data}`, params).then(res => {
        dispatch(getSucess(res.data))
    }).catch(err => {
        console.log(err);
        dispatch(getFailure())
    })
}