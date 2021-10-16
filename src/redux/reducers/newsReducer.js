import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function newsReducer(state=initialState.news,action){
    switch (action.type) {
        case actionTypes.GET_NEWSPAGE_SUCCESS:
            
            return action.payload
    
        default:
            return state;
}
}