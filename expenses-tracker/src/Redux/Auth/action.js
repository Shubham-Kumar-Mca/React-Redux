import axios from "axios";
import { GEETING_USER_ERROR, GETTING_USER_DATA, GETTING_USER_REQUEST } from "./actionType";

export const gettingRequestAPI = () => ({ type: GETTING_USER_REQUEST })
export const gettingDataAPI = (payload) => ({ type: GETTING_USER_DATA, payload })
export const gettingErrorAPI = () => ({ type: GEETING_USER_ERROR })


const initialState = {
    isAuth: false,
    userDetails: []
}

//Post Request for Register User

export const getSignupAPI = (user) => () => {
    try {
        return axios.post("http://localhost:3030/users", { ...initialState, userDetails: user })
    } catch (error) {
        console.log(error);
    }

}

// Getting Data for Login and others

export const getUsersDataFromAPI = () => (dispatch) => {
    return axios.get("http://localhost:3030/users").then(res => {
        dispatch(gettingDataAPI(res.data))
        // return res.data
    }).catch(err => {
        console.log(err);
    })
}

//Using Patch Request for Updating User after Logi
export const updatingLoginData = (userId, userUpdatedData) => (dispatch) => {
    try {
        return axios.patch(`http://localhost:3030/users/${userId}`, userUpdatedData)
    } catch (error) {
        console.log(error);
    }
};


export const updateUserDataAfterHistoryDeleting = (userId, updatedData) => (dispatch) =>{
    console.log("updatedData is", updatedData);
    return axios.put(`http://localhost:3030/users/${userId}`, updatedData)
}