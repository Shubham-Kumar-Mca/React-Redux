import { GETTING_USER_DATA } from "./actionType";


const initialState = {
    gettingData : []
}

export const reducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case GETTING_USER_DATA:
            return {...state, gettingData : payload};    
        default:
            return state;
    }
}